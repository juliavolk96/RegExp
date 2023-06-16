class Validator {
  static validateUsername(username) {
    const usernameRegexp = /^(?!.*[-_]{2})(?![-_])(?!.*\d{4})[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]$/;
    return usernameRegexp.test(username);
  }
}

export default Validator;
