// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

function checkSpam(str){
    if (str.toLowerCase().includes("viagra" || "XXX") ){
        return true;
    }
    else {
        return false;
    }
}


checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false