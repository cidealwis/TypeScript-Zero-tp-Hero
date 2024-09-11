/*
3. Write a TS program to read 5 numbers from the user. The numbers read should be stored in an 
array of integer type. Set the maximum capacity of this array to 5.
• Then the program displays all the values in the array, one value per line
• Next, the program displays all the values in the array in reverse order, i.e., the last 
values in the array is displayed first, and the first value in the array is displayed last.
Here is the example output of the program:
The list of values are:
49
53
91
100
82
The list of values printed in reverse are:
82
100
91
53
49
*/
export default function loop(){
    let original:number[]=[49,53,91,100,82];
    let revers:number[]=[];

    for(let i=0;i<original.length;i++){
        revers[original.length-i]=original[i];
    }

    console.log(`Original is : ${original}`);
    console.log(`Revers is :${revers}`);
}