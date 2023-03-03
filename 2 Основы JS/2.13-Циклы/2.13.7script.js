// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;
{
    for (let i, s = Math.sqrt(num); i <= s; i++) { //проверяем все числа до квадратного корня заданного числа
        if (num % i === 0) { return false }
    }
    return num > 1}



console.log("isPrimeNumber:")
for (let i = 0; i <= 20; i++) {
    console.log(i, "=>", isPrimeNumber(i))}
