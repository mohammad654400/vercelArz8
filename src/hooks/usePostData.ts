
import { useMutation } from "@tanstack/react-query";
import crypto from "crypto";

const baseUrl = "https://app.arz8.com/api/landing/form";
const SECRET_KEY = "XBPGNB6GEXUPWES22VU2OBOHX6G49LHACNLBNVP3KZKIXBXA3GIHFZM40INDJXRL";

// Signature generation function
const generateSignature = (
  method: string,
  endpoint: string,
  timestamp: string,
  data: Record<string, any> | FormData
) => {
  let payloadObject: Record<string, any> = {};

  if (data instanceof FormData) {
    data.forEach((value, key) => {
      if (!(value instanceof File)) {
        payloadObject[key] = value;
      }
    });
  } else {
    Object.keys(data).forEach((key) => {
      if (!(data[key] instanceof File)) {  
        payloadObject[key] = data[key] !== undefined && data[key] !== null ? data[key] : null;
      }
    });
  }

  const payloadJson = Object.keys(payloadObject).length ? JSON.stringify(payloadObject) : "[]";

  const dataToHash = `POST landing/form/${endpoint} ${timestamp} ${payloadJson}`;

  return crypto.createHmac("sha256", SECRET_KEY).update(dataToHash).digest("hex");
};

const postData = async (endpoint: string, data: Record<string, any> | FormData) => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const isFormData = data instanceof FormData;

  const signature = generateSignature("POST", endpoint, timestamp, data);

  let filteredData: Record<string, any> = {};
  if (isFormData) {
    filteredData = {};
    data.forEach((value, key) => {
      if (!(value instanceof File)) {  
        filteredData[key] = value;
      }
    });
  } else {
    filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => !(value instanceof File)) 
    );
  }

  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    headers: {
      "x-timestamp": timestamp,
      "x-signature": signature,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
    body: isFormData ? data : JSON.stringify(filteredData),
  });

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}, Error: ${await response.text()}`);
  return response.json();
};

const usePostData = (endpoint: string, onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
  return useMutation({
    mutationFn: (data: Record<string, any> | FormData) => postData(endpoint, data),
    onSuccess,
    onError,
  });
};

export default usePostData;
