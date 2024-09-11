/*
4. Develop a TS program to read the cricket players name and the runs scored for four T20 innings
from the user given in the following order.
Asalanka,KIC 51 20 32 42
Perera,MDKJ 22 34 56 12
Shanaka,MD 12 14 22 56
Nissanka,P 45 32 01 34
Karunaratne,C 45 67 89 23
Store the player names in a two-dimensional character array and runs in another twodimensional integer array. Then, calculate total runs scored and average runs for each player 
and display it the following format:
Asalanka,KIC 145 36.25
Perera,MDKJ 124 31.00
Shanaka,MD 104 26.00
Nissanka,P 112 28.00
Karunaratne,C 224 56.00
*/

export default function loop(){
    let player:string[]=["Asalanka,KIC ","Perera,MDKJ","Shanaka,MD","Nissanka,P","Karunaratne,C"];
    let runs:number[][]=[
    [51,20,32,42],
    [22,34,56,12], 
    [12,14,22,56],
    [45,32,1,34],
    [45,67,89,23]
];

let totalAndAverage:number[][]=[[]];
for(let i=0;i<runs.length;i++){
    let total=0;
    for(let j=0;j<runs[i].length;j++){
        total+=runs[i][j];
    }
    totalAndAverage[i]=[total,total/4];
}
console.log(`${totalAndAverage}`)

}