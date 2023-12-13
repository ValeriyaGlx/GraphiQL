import type { UseFormRegister } from 'react-hook-form';
import { Input } from '@mui/material';

import type { InputProps, Validation } from '../../../types';

interface InputValidationProps extends InputProps {
  error: string | undefined;
  register: UseFormRegister<Validation>;
}

const InputValidation = ({ placeholder, inputName, type, error, register }: InputValidationProps) => {
  return (
    <div className={''}>
      {/*<ThemeProvider theme={themeInput}>*/}
      <Input error={!!error} placeholder={placeholder} type={type} {...register(inputName)} />
      <span>{error}</span>
      {/*</ThemeProvider>*/}
    </div>
  );
};

export default InputValidation;
