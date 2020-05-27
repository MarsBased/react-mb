import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<S>(
  key: string,
  initialState: S
): [S, Dispatch<SetStateAction<S>>] {
  const storedValue = load(key);
  const [state, setState] = useState<S>(
    storedValue ? (storedValue as S) : initialState
  );

  useEffect(() => {
    save(key, state);
  }, [key, state]);

  return [state, setState];
}

function save(key: string, value: any) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (err) {
    return;
  }
}

function load(key: string) {
  try {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
  } catch (err) {
    return;
  }
}
