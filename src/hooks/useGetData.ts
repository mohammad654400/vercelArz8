import { useQuery } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing";

const fetchData = async (endpoint: string, params: Record<string, any> = {}) => {

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}/${endpoint}${queryString ? `?${queryString}` : ""}`;

  console.log("Request URL:", url); // چاپ URL درخواست در کنسول
  console.log("Request Params:", params); // چاپ پارامترهای ارسالی

  const response = await fetch(url, { method: "GET", cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};

const useGetData = (endpoint: string , refreshInterval?: number , params?: Record<string, any>) => {
  return useQuery({
    queryKey: [endpoint, params], // Caches data by endpoint
    queryFn: () => fetchData(endpoint, params), // Fetch function
    staleTime: refreshInterval || 0, // Controls how long data is fresh
    refetchInterval: refreshInterval, // Auto-refresh at the given interval
    retry: 3, // Retries failed requests up to 3 times
  });
};

export default useGetData;
