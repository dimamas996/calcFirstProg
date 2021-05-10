let counter = document.getElementById('counter');
counter.value = 0;

//Основные вычисления
function counting(action) {  
  let nextNumber;
  let element;  
  let counter;
  switch (action) {
    case '+':
      nextNumber = takingNumber();
      counter = document.getElementById('counter');
      counter.value = parseFloat(counter.value) + nextNumber;      
      element = document.getElementById("screen");
      element.value = counter.value.toString() + "+";
      element = document.getElementById("input");
      element.value = "";
    break;
    case '-':
      ;
    break;
    case '=':
      counter = document.getElementById('counter');
      counter.value = parseFloat(counter.value) + parseFloat(document.getElementById("input").value);
      element = document.getElementById("screen");
      element.value = counter.value;
      element = document.getElementById("input");
      element.value = "";
      counter.value = 0;
    break;
  }  
}
//Взятие числа из нижнего инпута
function takingNumber() {
  let element = document.getElementById("input");
  return parseFloat(element.value);
}
//Ввод цифр в нижний инпут
function enterFromButton(number) {
  let element = document.getElementById("input");
  element.value += number;
}
//Удалить всё из обоих инпутов
function clearing() {
  let element = document.getElementById("input");
  element.value = "";
  element = document.getElementById("screen");
  element.value = "";
}
//Удаление символа
function delSym() {
  let element = document.getElementById("input");
  element.value = element.value.substring(0, element.value.length - 1);  
}

