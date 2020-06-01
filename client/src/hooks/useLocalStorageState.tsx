import { useState, useEffect } from "react";

export default function useLocalStorageState(
  key: string,
  initialValue: string
): [string, (newVal: string) => void] {
  const [state, setState] = useState<string>(
    localStorage.getItem(key) || initialValue
  );
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
}
