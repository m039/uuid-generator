import {generatePassword} from './core.ts';

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    includeSymbols: false,
    includeNumbers: false,
    includeLowercase: false,
    includeUppercase: false,
    passwordLength: 12
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // Обрабатываем флаги (без значения)
    if (arg === '--includeSymbols') {
      result.includeSymbols = true;
    } else if (arg === '--includeNumbers') {
      result.includeNumbers = true;
    } else if (arg === '--includeLowercase') {
      result.includeLowercase = true;
    } else if (arg === '--includeUppercase') {
      result.includeUppercase = true;
    } else if (arg === '--passwordLength' && i + 1 < args.length) {
      const nextArg = args[i + 1];
      const length = parseInt(nextArg, 10);
      if (!isNaN(length) && length > 0) {
        result.passwordLength = length;
        i++; // Пропускаем следующий элемент (уже обработали)
      } else {
        console.error('Ошибка: --passwordLength требует положительное число');
        process.exit(1);
      }
    }
  }

  return result;
}

let password = generatePassword(parseArgs());
if (password.message != undefined) {
  console.error(password.message);
} else {
  console.log("Ваш пароль: " + password);
}