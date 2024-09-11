/*
Write a program in TS to copy the elements of one array into another array. For example, 
create the following two arrays:
int original[5] = {45, 68, 78, 85, 90};
int duplicate[5];
4
After the program execution, duplicate array should contain the original array values.
*/

export default function loop(){

   let original:number[]=[45, 68, 78, 85, 90];
   let duplicate:number[]=[];

   for(let i=0;i<original.length;i++){
    duplicate[i]=original[i];
   }
   console.log(duplicate)
}