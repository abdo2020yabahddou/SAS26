//1.Basic Calculator

let num1 = 12;
let num2 = 6;
let operator = "/";
switch(operator){
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
        if (num2 == 0){
            console.log("error");
        }else{
            console.log(num1 / num2);
        }
      break;
}