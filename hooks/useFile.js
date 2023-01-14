import { useEffect, useState } from "react";

export default function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const getErrors = () => {
    Object.keys(fields).forEach((field) => {
      if (!fields[field].trim()) {
        setErrors({ ...errors, [field]: `The ${field} is required` });
      } else {
        let newErrors = { ...errors };
        delete newErrors[field];
        setErrors({ ...newErrors });
      }
    });
  };

  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    },
    getErrors,
    errors
  ];
}