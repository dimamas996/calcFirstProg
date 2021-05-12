let counter = 0;
let nextNumber = 0;
let condition = false;
let negativCondition = false;

//Основные вычисления
function counting(actionNext) {
  let element;
  let action = document.getElementById("screen").value;
  action = action.substring(action.length - 1);
  nextNumber = takingNumber();
  switch (action) {
    case "+":
      counter *= 10;
      nextNumber *= 10;
      counter += nextNumber;
      counter /= 10;
      break;
    case "-":
      counter *= 10;
      nextNumber *= 10;
      counter -= nextNumber;
      counter /= 10;
      break;
    case "*":
      counter *= 10;
      nextNumber *= 10;
      counter *= nextNumber;
      counter /= 10;
      break;
    case "/":
      counter *= 10;
      nextNumber *= 10;
      counter /= nextNumber;
      counter /= 10;
      break;
    default:
      counter = nextNumber;
      break;
  }
  element = document.getElementById("screen");
  element.value = counter.toString() + actionNext;
  element = document.getElementById("input");
  element.value = "";
}

//При нажатии равно
function equal() {
  condition = true;
  let action = document.getElementById("screen").value;
  action = action.substring(action.length - 1);
  nextNumber = takingNumber();
  let element;
  element = document.getElementById("screen");
  element.value += nextNumber.toString() + "=";
  switch (action) {
    case "+":
      counter *= 10;
      nextNumber *= 10;
      counter += nextNumber;
      counter /= 10;
      break;
    case "-":
      counter *= 10;
      nextNumber *= 10;
      counter -= nextNumber;
      counter /= 10;
      break;
    case "*":
      counter *= 10;
      nextNumber *= 10;
      counter *= nextNumber;
      counter /= 10;
      break;
    case "/":
      counter *= 10;
      nextNumber *= 10;
      counter /= nextNumber;
      counter /= 10;
      break;
    default:
      element = document.getElementById("screen");
      element.value = "";
      counter = nextNumber;
      break;
  }
  element = document.getElementById("screen");
  element.value += counter.toString();
  element = document.getElementById("input");
  element.value = "";
  counter = 0;
  nextNumber = 0;
}

//Добавление знака минус перед числом
function negativ() {
  let element = document.getElementById("input");
  if (negativCondition == false) {
    element.value = "-" + element.value;
    negativCondition = true;
  } else {
    element.value = element.value.substring(1, element.value.length);
    negativCondition = false;
  }
}

//Взятие числа из нижнего инпута
function takingNumber() {
  let element = document.getElementById("input");
  if (element.value == "") {
    element.value = 0;
  }
  return parseFloat(element.value);
}
//Ввод цифр в нижний инпут
function enterFromButton(number) {
  let element;
  if (condition == true) {
    element = document.getElementById("screen");
    element.value = "";
    condition = false;
  }
  element = document.getElementById("input");
  element.value += number;
}
//Удалить всё из обоих инпутов
function clearing() {
  let element = document.getElementById("input");
  element.value = "";
  element = document.getElementById("screen");
  element.value = "";
  counter = 0;
  nextNumber = 0;
}
//Удаление символа
function delSym() {
  let element = document.getElementById("input");
  element.value = element.value.substring(0, element.value.length - 1);
}
