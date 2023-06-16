import { test, expect, describe } from '@jest/globals';

import formatPhoneNumber from '../phoneFormatter';

describe('formatPhoneNumber', () => {
  test('форматирование номера в формате 8 (927) 000-00-00', () => {
    const phoneNumber = '8 (927) 000-00-00';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe('+7 927 000 00 00');
  });

  test('форматирование номера в формате +7 960 000 00 00', () => {
    const phoneNumber = '+7 960 000 00 00';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe('+7 960 000 00 00');
  });

  test('форматирование номера в формате +86 000 000 0000', () => {
    const phoneNumber = '+86 000 000 0000';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe('+86 000 000 0000');
  });
});
