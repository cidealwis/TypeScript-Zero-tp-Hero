/*
Write a TS program perform the following tasks. (Not: Add header comments and the 
program comments when necessary.)
• Create variables to store the following information:
o Your birth year.
o A/L Z-Score.
o Your Letter grade for the A/L Physics or any other subject (A, B, C).
• Assign the values to each variable you have declared in the previous step.
• Print the values of each variable in separate line.
*/

export default function question() {
    let birthday:string="999/05/13";
    let zScore:number=3.5;
    let result:string[]=["A","B","C"];
    console.log(`My Birthday ${birthday} zScore ${zScore} result ${result}`);
}