import { useState, useEffect } from "react";

type Status = "pending" | "loading" | "success" | "error";

export default function useQuery<T>(fetch: () => Promise<T>) {
  const [data, setData] = useState<T | undefined>();
  const [status, setStatus] = useState<Status>("pending");

  useEffect(() => {
    setStatus("loading");
    fetch().then((data) => {
      setData(data);
      setStatus("success");
    });
  }, []);

  return { data, status };
}
