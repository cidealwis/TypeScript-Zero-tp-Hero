/*
9. Write a TS program to create the following integer array.
int values[10] = { 2, 5, 8, 13, 14, 11, 74, 65, 34, 13};
Then, find the maximum and the minimum values stored in the array
*/
export default function loop(){
    let values:number[]=[2, 5, 8, 13, 14, 11, 74, 65, 34, 13];
    let maxNumber:number=Math.max(...values);
    let minNUmber:number=Math.min(...values);

    console.log(`That Max is ${maxNumber} Min is ${minNUmber}`);
}