/*
Write a Ts program contains the following variable declarations and assignments:
int test1Score = 90;
int test2Score = 80;
int sumOfScores = test1Score + test2Score;
Write output statements that would produce the output below (notice that the values stored in 
the variables have been output):
Test Score 1 = 90
Test Score 2 = 80
The sum of the scores = 170
*/

export default function question(){
    let test1Score:number;
    let test2Score:number;
    let sumOfScore:number;

    test1Score=90;
    test2Score=80;
    sumOfScore=test1Score+test2Score;
    console.log(`Test Score 1 =${test1Score}`);
    console.log(`Test Score 2=${test2Score}`);
    console.log(`The sum of the scores=${sumOfScore}`);
}