import { useState, useEffect } from "react";

/**
 *  use [react-query](https://github.com/tannerlinsley/react-query)
 */
export default function useQuery<T>(fetch: () => Promise<T>) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [status, setStatus] = useState("success");

  useEffect(() => {
    setStatus("loading");
    fetch().then((response) => {
      setData(response);
      setStatus("success");
    });
  }, []);

  return { data, status };
}
