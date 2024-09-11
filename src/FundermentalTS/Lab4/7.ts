/*
Write a program in TS create the following float array.
float zscore[10] = {1.2, 0.9, 0.8, 1.3, 1.4, 1.2, 1.8, 2.2, 2.7, 2.1};
Then, find the sum of all elements of the array. (Summation should be 15.6)
*/
export default function loop(){
    let zScore:number[]=[1.2, 0.9, 0.8, 1.3, 1.4, 1.2, 1.8, 2.2, 2.7, 2.1];
    let total:number=0;
    for(let i=0;i<zScore.length;i++){
        total+=zScore[i];
    }
    console.log(`Summzation is ${total}`);
}