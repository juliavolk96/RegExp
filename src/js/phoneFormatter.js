function formatPhoneNumber(phoneNumber) {
  const onlyDigits = phoneNumber.replace(/\D/g, '');

  if (onlyDigits.startsWith('86')) {
    return `+86 ${onlyDigits.slice(2).replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}`;
  }

  return `+7 ${onlyDigits.slice(1).replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')}`;
}

export default formatPhoneNumber;
