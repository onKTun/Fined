export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isUsernameValid = (username: string): boolean => {
  return username.length >= 5 && username.length <= 14;
};

export const isPasswordValid = (password: string): boolean => {
  const minLength = 8;
  const hasSpecialChar = /[!_.-]/.test(password); // Check for special characters
  const hasNumber = /\d/.test(password); // Check for numbers
  const hasUppercase = /[A-Z]/.test(password); // Check for uppercase letters

  return (
    password.length > minLength && hasSpecialChar && hasNumber && hasUppercase
  );
};
