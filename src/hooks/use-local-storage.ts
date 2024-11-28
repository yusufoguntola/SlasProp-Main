import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T = null as T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        setStoredValue(JSON.parse(value));
      }
    } catch (err) {
      console.error(err);
    }
  }, [key]);

  const setValue = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}
