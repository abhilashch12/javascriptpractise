//fuction declaration
let a=4;
let b=5;
function declareSum(){
    let sum=a+b;
    console.log(sum);
}
declareSum();
//function expression
const sum = function express(){
    let total=a+b;
    console.log(total);
}
sum();
//arrow function
const arrowsum = ()=>{
let asum= a+b;
console.log(asum);
}
arrowsum();
//grade checking function
function gradeChecker(score){
  if(score>=90){
        console.log("A");
  }
  else if(score>=80)
  
  {
    console.log("B");
  }
  else if(score>=70)
  {
    console.log("C");
  }
  else
  {
    score>=60?console.log("D"):console.log("F");
  }

}
gradeChecker(96);
gradeChecker(69);
gradeChecker(59);
//iseven function
function isEven(num){
    num%2==0?console.log("even"):console.log("odd");
}
isEven(19);
isEven(30);
//describeage function
function describeAge(age){
    if(age>18){
        age>65?console.log("senior"):console.log("adult");
    }
    else if(age>13) {
        age>13?console.log("teen"):console.log("child");
    }
    else{
        console.log("enter valid number");
    }
}
describeAge(0);
//bmi function
function bmi(weight,height){
 let value=weight/(height*height);
 return Number(value.toFixed(1));
}
//catagory string
function bmiCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
let value = bmi(70, 1.75);
let category = bmiCategory(value);

console.log(value);     // BMI
console.log(category);  // Category

