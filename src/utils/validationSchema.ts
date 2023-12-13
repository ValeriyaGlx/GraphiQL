import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .matches(/^\S*$/, 'Email must be valid (example@mail.com)')
    .test('email-tld', 'Email must be valid (example@mail.com)', (value) => {
      if (!value) {
        return false;
      }
      const parts = value.split('@');
      if (parts.length !== 2) {
        return false;
      }

      const domain = parts[1].trim();
      const domainParts = domain.split('.');

      return domainParts.length >= 2 && domainParts.every((part) => part.trim() !== '');
    }),
  password: yup
    .string()
    .required('Password is required')
    .matches(/^\S*$/, 'This field must not contain spaces')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
