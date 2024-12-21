import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Could not fetch data");
                }

                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url])

    return {
        data, isLoading, error
    }
}

export default useFetch;