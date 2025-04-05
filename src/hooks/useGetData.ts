import { useQuery } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing";

const fetchData = async (endpoint: string, params: Record<string, any> = {}) => {
  try {
    const query = new URLSearchParams({ limit: "3", page: "1", sort: "new", ...params }).toString();
    const response = await fetch(`${baseUrl}/${endpoint}?${query}`, { method: "GET", cache: "no-store" });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

};


const useGetData = (endpoint: string, refreshInterval?: number, params?: Record<string, any>) => {
  return useQuery({
    queryKey: [endpoint, params],
    queryFn: () => fetchData(endpoint, params),
    staleTime: refreshInterval || 0,
    refetchInterval: refreshInterval,
    retry: 3,
  });
};



export default useGetData;
