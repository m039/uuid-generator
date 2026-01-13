// src/core.js

type PasswordGeneratorConfig = {
  passwordLength: any;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

type ErrorResult = {
  error: string;
  message: string;
};

type SuccessResult = string;

export function generatePassword(config: PasswordGeneratorConfig) : ErrorResult | SuccessResult {
  if (config == undefined) {
    return { error: "wrong_config", message: "Не правильные аргументы к функции." };
  }
  
  if (!("passwordLength" in config)) {
    return {error:"no_length", message: "Длина пароля не выбрана." };
  }

  const length = parseInt(config.passwordLength);
  if (length <= 0) {
    return {error: "wrong_length", message: "Длина пароля не корректная." };
  }

  const symbols = '!@#$%^&*';
  const numbers = '0123456789';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let chars = '';

  if (config?.includeLowercase == true) chars += lowercase;
  if (config?.includeUppercase == true) chars += uppercase;
  if (config?.includeNumbers == true) chars += numbers;
  if (config?.includeSymbols == true) chars += symbols;

  if (!chars) {
    return { error: "no_characters_selected", message: "Выберете хотя бы один тип символов!" };
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    password += chars[randIndex];
  }

  return password;
}