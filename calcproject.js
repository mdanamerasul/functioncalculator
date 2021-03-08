function calculate(){
    let addition=(num1, num2) => num1 + num2;
    let subtraction=(num1, num2) => num1 - num2;
    let multiplication=(num1, num2) => num1 * num2;
    let division=(num1, num2) => num1 / num2;
    let modulas=(num1, num2) => num1 % num2;

   let num1 =parseFloat(document.getElementById('num1').value);
   let num2 =parseFloat(document.getElementById('num2').value);
   let selectedValue= document.getElementById('type-select').value;

   if(selectedValue ==='Addtion'){
       document.getElementById("answer").innerHTML= addition(num1 ,num2);


   }

  else if(selectedValue ==='Subtraction'){
    document.getElementById("answer").innerHTML= subtraction(num1 ,num2);



}

else if(selectedValue ==='Mltiplication'){
    document.getElementById("answer").innerHTML= multiplication(num1 ,num2);



}

else if(selectedValue ==='division'){
    document.getElementById("answer").innerHTML= division(num1 ,num2);





}


else if(selectedValue ==='Modulas'){
    document.getElementById("answer").innerHTML= modulas(num1 ,num2);



}

else {
    document.getElementById("answer").innerHTML= "plz input 1st and 2nd number"



}

//    if else(selectedValue ==='Subtraction'){

//     document.getElementById("answer").innerHTML= subtraction(num1 ,num2);
// }



}