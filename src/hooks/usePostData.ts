import { useMutation } from "@tanstack/react-query";

const baseUrl = "/api/proxy/landing/form";

const postData = async (endpoint: string, data: Record<string, any> | FormData) => {
  const isFormData = data instanceof FormData;

  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    headers: isFormData ? undefined : { "Content-Type": "application/json" },
    body: isFormData ? data : JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}, Error: ${response.text()}`);
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
