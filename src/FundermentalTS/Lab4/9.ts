/*
10. Write a TS program to find how many odd numbers are in the following array.
int values[10] = { 2, 5, 8, 13, 14, 11, 74, 65, 34, 13}
*/

export default function loop(){
    let value:number[]=[ 2, 5, 8, 13, 14, 11, 74, 65, 34, 13];
    let totalNumber:number=0;
    for(let i=0;i<value.length;i++){
        if(value[i]%2==1){
            ++totalNumber
        }
    }
    console.log(`Values in the odd  numbers ${totalNumber}`);
}