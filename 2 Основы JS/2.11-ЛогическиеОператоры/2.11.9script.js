// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, 
// если ничего не введено или нажата клавиша Esc – показать «Отменено», 
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
let login;
let password;

login = prompt('Введите логин')
if (login ==='Админ'){
    (password =  prompt('Введите пароль'))
    if (password==='Я главный'){
        alert('Здравствуйте!')
    }
    else if (password===!'Я главный'){
        alert('Неверный пароль!')
    }
    else if (password===''|| password === null){
        alert('Отменено')
    }
}
else if (login ===!'Админ'){
    alert('Я вас не знаю')
}
else if (login ==='' || login===null){
    alert('Отменено')
}
