import React, { useCallback } from 'react';

export function useForm() {
    const [formValue, setformValue] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
  
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setformValue({...formValue, [name]: value});
      setErrors({...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setformValue(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setformValue, setErrors, setIsValid]
    );
  
    return { formValue, handleChange, errors, isValid, resetForm, setIsValid };
  }