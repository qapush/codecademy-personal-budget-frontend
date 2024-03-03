import { useState } from 'react';

const useForm = (initial) => {
  const [form, setForm] = useState(initial);
  const resetForm = () => setForm(initial);
  const handleChange = ({ target }) => {
    setForm((state) => ({ ...state, [target.id]: target.value }));
  };

  return [form, handleChange, resetForm];
};

export default useForm;
