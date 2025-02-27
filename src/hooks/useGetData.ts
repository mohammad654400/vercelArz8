import { useQuery } from "@tanstack/react-query";
import crypto from "crypto";

const baseUrl = "/api/proxy/landing";
const SECRET_KEY = "XBPGNB6GEXUPWES22VU2OBOHX6G49LHACNLBNVP3KZKIXBXA3GIHFZM40INDJXRL";

const generateSignature = (
  method: string,
  endpoint: string,
  timestamp: string,
  params: Record<string, any> = {}
) => {
  const cleanEndpoint = endpoint.split("?")[0] || "";

  let paramsJson = "[]"; 
  if (Object.keys(params).length) {

    const formattedParams: Record<string, any> = {};

    Object.keys(params).forEach((key) => {
      const value = params[key];
      
      // Convert value to number if possible, otherwise convert to string
      if (!isNaN(Number(value))) {
        formattedParams[key] = String(value); // Convert to number
      } else {
        formattedParams[key] = String(value); // Convert to string
      }
    });

    paramsJson = JSON.stringify(formattedParams);
  }

  const dataToHash = `${method} landing/${cleanEndpoint} ${timestamp} ${paramsJson}`;


  return crypto.createHmac("sha256", SECRET_KEY).update(dataToHash).digest("hex");
};


const fetchData = async (endpoint: string, params: Record<string, any> = {}) => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
    
  const relativePath = endpoint + (Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : "");

  const signature = generateSignature("GET", relativePath, timestamp, params);

  const url = `${baseUrl}/${endpoint}${Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : ""}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: {
      "X-Timestamp": timestamp,
      "X-Signature": signature,
    },
  });

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};

const useGetData = (
  endpoint: string,
  refreshInterval: number = 0,
  params?: Record<string, any>
) => {
  return useQuery({
    queryKey: [endpoint, params],
    queryFn: () => fetchData(endpoint, params),
    staleTime: refreshInterval > 0 ? refreshInterval : Infinity,
    refetchInterval: refreshInterval > 0 ? refreshInterval : false,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};

export default useGetData;
