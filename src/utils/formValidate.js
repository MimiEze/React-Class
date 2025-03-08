export const validateEmail = (email)=> {
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return "Please enter an email address"
  } else if (!validRegex.test(email)) {
    return "Please eneter a valid email address"
  }
};

export const validatePassword = (password)=> {
  const validRegex = /^(?=.[a-z])(?=.[A-Z]).{5,}$/;
  if(!password) {
    return "Please enter a password";
  } else if (!validRegex.test(password)) {
    return "Password must contain at least one lowercase, uppercase, and must be at least five character long";
  }
};