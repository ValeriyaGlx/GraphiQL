import { object, string, ref } from 'yup';

import type { Lang } from '../types';

export const generateValidationSchema = (language: Lang) => {
  const messages = {
    email: {
      required: 'key',
      email: language === 'en' ? 'Email must be valid (example@mail.com)' : 'Невалидная эл. почта (example@mail.com)',
    },
    password: {
      required: language === 'en' ? 'Password is required' : 'Требуется пароль',
      whitespace: language === 'en' ? 'Password must not contain spaces' : 'Пароль не должен содержать пробелы',
      uppercase:
        language === 'en'
          ? 'Password must contain at least one uppercase letter'
          : 'Пароль должен содержать минимум одну заглавную букву',
      lowercase:
        language === 'en'
          ? 'Password must contain at least one lowercase letter'
          : 'Пароль должен содержать минимум одну строчную букву',
      number: language === 'en' ? 'Password must contain at least one number' : 'Пароль должен содержать минимум одну цифру',
      symbol:
        language === 'en'
          ? 'Password must contain at least one special character'
          : 'Пароль должен содержать хотя бы один символ',
      length: language === 'en' ? 'Password must be at least 8 characters' : 'Пароль должен содержать минимум 8 символов',
    },
    confirm: {
      required: language === 'en' ? 'Confirm Password is required' : 'Требуется подтверждение пароля',
      match: language === 'en' ? 'Passwords must match' : 'Пароли должны совпадать',
    },
  };

  return object({
    email: string()
      .required(messages.email.required)
      .email(messages.email.email)
      .test('email-tld', messages.email.email, (value) => {
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
    password: string()
      .required(messages.password.required)
      .matches(/^\S*$/, messages.password.whitespace)
      .matches(/[a-z]/, messages.password.lowercase)
      .matches(/[A-Z]/, messages.password.uppercase)
      .matches(/[0-9]/, messages.password.number)
      .matches(/[!"#$%&'()*+,./:;<=>?@^_`{|}~\-\[\]]/, messages.password.symbol)
      .min(8, messages.password.length),
    confirmPassword: string()
      .required(messages.confirm.required)
      .oneOf([ref('password')], messages.confirm.match),
  });
};
