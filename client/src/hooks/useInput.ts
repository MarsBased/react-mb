import { useState, ChangeEvent } from "react";

/**
 * Use [react-hook-form](https://github.com/react-hook-form/react-hook-form)
 */
export default function useInput(
  validate: (value: string) => string | undefined
) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const isValid = () => {
    const validationError = validate(value);
    if (validationError) {
      setError(validationError);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, error, isValid, handleChange };
}
