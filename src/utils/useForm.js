import React, { useCallback } from "react";

export function useForm() {
  const [formValue, setformValue] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setformValue({ ...formValue, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  };

  const Form = useCallback(
    (newValues = {}, newIsValid = false) => {
      setformValue(newValues);
      setIsValid(newIsValid);
    },
    [setformValue, setIsValid]
  );

  return { formValue, handleChange, isValid, Form, setIsValid };
}
