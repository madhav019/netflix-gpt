const Messages = {
  "auth/email-already-in-use": "Account already exists with similar email!",
  "auth/invalid-credential": "Invalid Credentials! Please try again.",
};

export const getErrorMessage = (value) => Messages[value];
