import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AnimatedInner from '../../shared/AnimatedInner/AnimatedInner.tsx';
import { useTranslation } from '../../../hooks';
import { INPUTS_SIGN_IN } from '../../../constants';
import InputValidation from '../../shared/InputValidation/InputValidation.tsx';
import { validationSchema } from '../../../utils/validationSchema.ts';

const SingIn = () => {
  const translation = useTranslation();

  const {
    register,
    // handleSubmit,
    formState: { errors },
    // isValid (put in formState)
    // reset,
    // getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  return (
    <>
      <AnimatedInner inner={translation.signin} />
      <form noValidate>
        {INPUTS_SIGN_IN.map(({ placeholder, inputName, type }) => (
          <InputValidation
            key={placeholder}
            placeholder={placeholder}
            inputName={inputName}
            type={type}
            error={errors[inputName]?.message}
            register={register}
          />
        ))}
        <input className={''} type="submit" value="submit" />
      </form>
    </>
  );
};

export default SingIn;
