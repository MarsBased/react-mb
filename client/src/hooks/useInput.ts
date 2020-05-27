import { useState, ChangeEvent } from "react";

type ValidationOptions = {
  isRequired?: string;
};

export function validation(options: ValidationOptions) {
  return (value: string): string => {
    return options.isRequired && value === "" ? options.isRequired : "";
  };
}

export default function useInput(validate: (value: string) => string) {
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);

  const error = validated ? validate(value) : "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const isValid = () => {
    setValidated(true);
    return error === "";
  };

  return { value, error, isValid, handleChange };
}
