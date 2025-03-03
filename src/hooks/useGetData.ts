// import { useQuery } from "@tanstack/react-query";
// import crypto from "crypto";

// const baseUrl = "https://app.arz8.com/api/landing";
// const SECRET_KEY = "XBPGNB6GEXUPWES22VU2OBOHX6G49LHACNLBNVP3KZKIXBXA3GIHFZM40INDJXRL";

// const generateSignature = (
//   method: string,
//   endpoint: string,
//   timestamp: string,
//   params: Record<string, any> = {}
// ) => {
//   const cleanEndpoint = endpoint.split("?")[0] || "";

//   let paramsJson = "[]"; 
//   if (Object.keys(params).length) {

//     const formattedParams: Record<string, any> = {};

//     Object.keys(params).forEach((key) => {
//       const value = params[key];
      
//       if (!isNaN(Number(value))) {
//         formattedParams[key] = String(value); 
//       } else {
//         formattedParams[key] = String(value); 
//       }
//     });

//     paramsJson = JSON.stringify(formattedParams);
//   }

//   const dataToHash = `${method} landing/${cleanEndpoint} ${timestamp} ${paramsJson}`;


//   return crypto.createHmac("sha256", SECRET_KEY).update(dataToHash).digest("hex");
// };


// const fetchData = async (endpoint: string, params: Record<string, any> = {}) => {

//   const timestamp = Math.floor(Date.now() / 1000).toString();
    
//   const relativePath = endpoint + (Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : "");

//   const signature = generateSignature("GET", relativePath, timestamp, params);

//   const url = `${baseUrl}/${endpoint}${Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : ""}`;

//   const response = await fetch(url, {
//     method: "GET",
//     cache: "no-store",
//     headers: {
//       "X-Timestamp": timestamp,
//       "X-Signature": signature,
//     },
//   });

//   if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//   return response.json();
// };

// const useGetData = (
//   endpoint: string,
//   refreshInterval: number = 0,
//   params?: Record<string, any>
// ) => {
//   return useQuery({
//     queryKey: [endpoint, params],
//     queryFn: () => fetchData(endpoint, params),
//     staleTime: refreshInterval > 0 ? refreshInterval : Infinity,
//     refetchInterval: refreshInterval > 0 ? refreshInterval : false,
//     retry: 3,
//     refetchOnWindowFocus: false,
//   });
// };

// export default useGetData;

import { useQuery } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing";

const fetchData = async (endpoint: string, params: Record<string, any> = {}) => {
  const query = new URLSearchParams({ limit: "3", page: "1", sort: "new", ...params }).toString();
  const response = await fetch(`${baseUrl}/${endpoint}?${query}`, { method: "GET", cache: "no-store" });
  
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
  return response.json();
};


const useGetData = (endpoint: string, params?: Record<string, any>, refreshInterval?: number) => {
  return useQuery({
    queryKey: [endpoint, params], // Cache based on endpoint & params
    queryFn: () => fetchData(endpoint, params), // Pass params
    staleTime: refreshInterval || 0, // Controls freshness
    refetchInterval: refreshInterval, // Auto-refresh
    retry: 3, // Retries failed requests
  });
};


export default useGetData;
