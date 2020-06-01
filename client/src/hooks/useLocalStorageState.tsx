import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(load(key) || initialValue);

  useEffect(() => {
    save(key, value);
  }, [key, value]);

  return [value, setValue];
}

function load<T>(key: string): T | undefined {
  try {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : undefined;
  } catch (err) {
    return;
  }
}

function save<T>(key: string, value: T) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}
