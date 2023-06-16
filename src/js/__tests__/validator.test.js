import { test, expect, describe } from '@jest/globals';

import Validator from '../validator';

describe('Validator', () => {
  describe('validateUsername', () => {
    test('возвращает true для допустимого имени пользователя', () => {
      const username = 'john_doe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(true);
    });

    test('возвращает false для недопустимого имени пользователя, содержащего два подряд символа "-"', () => {
      const username = 'john--doe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });

    test('возвращает false для недопустимого имени пользователя, содержащего два подряд символа "_"', () => {
      const username = 'john__doe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });

    test('возвращает false для недопустимого имени пользователя, начинающегося с символа "-"', () => {
      const username = '-johndoe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });

    test('возвращает false для недопустимого имени пользователя, начинающегося с символа "_"', () => {
      const username = '_johndoe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });

    test('возвращает true для допустимого имени пользователя, содержащего цифры', () => {
      const username = 'john123';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(true);
    });

    test('возвращает true для допустимого имени пользователя, содержащего буквы в разных регистрах', () => {
      const username = 'John_Doe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(true);
    });

    test('возвращает false для недопустимого имени пользователя, содержащего пробелы', () => {
      const username = 'john doe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });

    test('возвращает false для недопустимого имени пользователя, содержащего подряд более трех цифр', () => {
      const username = 'john1234doe';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });

    test('возвращает false для недопустимого имени пользователя, заканчивающегося символом подчёркивания', () => {
      const username = 'johndoe_';
      const isValid = Validator.validateUsername(username);
      expect(isValid).toBe(false);
    });
  });
});
