import type { INPUT_EMAIL, INPUT_PASSWORD, INPUT_TEXT } from '../constants';

export interface SignInProps {
  type: typeof INPUT_EMAIL | typeof INPUT_PASSWORD | typeof INPUT_TEXT;
  placeholder: string;
  inputName: typeof INPUT_EMAIL | typeof INPUT_PASSWORD;
}
