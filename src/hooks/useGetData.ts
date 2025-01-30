import { useEffect, useState } from 'react';

const useGetData = (endpoint: string) => {
    const baseUrl = "/api/proxy/landing"; 
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const getData = async () => {
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`, { method: 'GET', cache: "no-store" });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error);
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await getData();
                if (result) {
                    setData(result);
                }
            } catch (error) {
                console.error("Effect error:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useGetData;
