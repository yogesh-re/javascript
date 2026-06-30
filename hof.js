// what is high order function : the ability of  the function to the accept another funtion as a pparameter or return another function as a parameter.

//call back function  : funtion which is which is passed as an argument to another function and is executed after some operation has been completed.


// map filter reduce : high order funtion

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(num);
// let num2 = num.map((num) =>{
//     return num * 10;
// })
// console.log(num2);




//********************map**********************************************/

// let num3 = num.map((value,index,array) =>{
//     // console.log(value);
//     // console.log(index);
//     // console.log(array);

//    console.log(index);
// })





// ******************* filter *********************

// let num3 = num.filter((value) => {
//     return value > 5;
// })
// console.log(num3);

//******************** reduce *********************
// let num4 = num.reduce((acc, Value) => {
//     return acc + Value;
// }, 0 );
// console.log(num4);


// for(i=0;i<9; i++){
//     let sum=sum+num[i];
//     return sum;
// }

    
// let  num5=num.forEach((value, index, array) => {
       
// })


let object= {
    name : "john",
    age : 30
}
for (const i in object){
    const element = object[i];
    console.log(element);
}
 