import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetchOrderToken() {
  const { orderToken } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      if (!orderToken) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/orderToken/${orderToken}`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (data.error) {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [orderToken]);

  return { loading, error };
}

export default useFetchOrderToken;
