import { useQuery } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing";

const fetchData = async (endpoint: string) => {
  const response = await fetch(`${baseUrl}/${endpoint}`, { method: "GET", cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};

const useGetData = (endpoint: string, refreshInterval?: number) => {
  return useQuery({
    queryKey: [endpoint], // Caches data by endpoint
    queryFn: () => fetchData(endpoint), // Fetch function
    staleTime: refreshInterval || 0, // Controls how long data is fresh
    refetchInterval: refreshInterval, // Auto-refresh at the given interval
    retry: 3, // Retries failed requests up to 3 times
  });
};

export default useGetData;
