//3.BMI Calculator

let weight = 63;
let height = 1.75;
let BMI = weight / (height * height);
console.log(BMI);
if(BMI < 18.5){
    console.log("Underweight");
}if(BMI > 18.5 && BMI <=24.9){
    console.log("Normal");
}if(BMI >= 30){
    console.log("Overweight");
}
