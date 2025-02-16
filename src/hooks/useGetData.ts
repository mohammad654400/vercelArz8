import { useQuery } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing";

const fetchData = async (endpoint: string, params: Record<string, any> = {}) => {

  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}/${endpoint}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url, { method: "GET", cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};

const useGetData = (
  endpoint: string,
  refreshInterval: number = 0 ,
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
