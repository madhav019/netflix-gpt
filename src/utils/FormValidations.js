import { emailValidationRegex, passwordValidationRegex } from "../constants";

export const emailIsValid = (value) => {
  const validator = new RegExp(emailValidationRegex);
  return validator.test(value) ? null : "Email is not valid!";
};

export const passwordIsValid = (value) => {
  const validator = new RegExp(passwordValidationRegex);
  return validator.test(value) ? null : "Password is not valid!";
};
