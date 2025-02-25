import { useMutation } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing/form";

const postData = async (endpoint: string, data: Record<string, any>) => {
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};

const usePostData = (endpoint: string, onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
  const mutation = useMutation({
    mutationFn: (data: Record<string, any>) => postData(endpoint, data),
    onSuccess,
    onError,
  });

  return mutation;
};

export default usePostData;
