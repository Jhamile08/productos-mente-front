import { useEffect, useState } from "react";
// creamos una hoja solo para hacer la peticion
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // funcion para limpiar vista
    const abortController = new AbortController();
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.content || data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
      
    return () => abortController.abort();
  }, [url]);


  return { data, loading, error };
}
