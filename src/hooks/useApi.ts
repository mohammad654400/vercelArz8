"use client";

import useSWR from "swr";

const BASE_URL = "https://api.example.com";

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
  method?: Method;
  body?: any;
}

const fetcher = async (endpoint: string, method: Method = "GET", body?: any) => {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!response.ok) throw new Error("API request failed");

  return response.json();
};

export function useApi<T>(endpoint: string, { method = "GET", body }: FetchOptions = {}) {
  const { data, error, isLoading, mutate } = useSWR<T>(
    method === "GET" ? `${BASE_URL}${endpoint}` : null,
    () => fetcher(endpoint, method, body)
  );

  const callApi = async (customMethod: Method = method, customBody?: any) => {
    try {
      const result = await fetcher(endpoint, customMethod, customBody);
      mutate(); 
      return result;
    } catch (err) {
      console.error("API error:", err);
      throw err;
    }
  };

  return { data, error, isLoading, callApi };
}
