// what is array: array is the collection of multiple elements, 
// it store its elements in contiguos memory allocations. 
 

// let arr = [1, 2, 3, 4, 5,"ram","yogesh"]; // array of numbers
// console.log(arr);

// for(i=0; i<7; i++){
//     console.log(arr[i]);
// }
// console.log(arr[5]);
// console.log(arr.reverse()); 



let arr = [1, 2, 3, 4, 5,"ram","yogesh"]; // array of numbers
let i=0;
let j=arr.length-1;
while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);
