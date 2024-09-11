/*
Write a TS program to determine an employee weekly salary based on the following 
information.
• Employee regular hourly pay rate is Rs. 250.00.
• Employee overtime pay rate is Rs. 300.00.
• Assume that employee worked 40 regular working hours and 15 overtime hours.
• Then, calculate the total weekly pay for the employee and display it with an 
appropriate message. (Note: In this program, you do not need to consider the if else 
statements.)
Upload the completed program into lab 02 – Program 07 folder in the CAL.
*/

export default function question(){
  let regularHourlyRate:number=250;
  let overtimeHourlyRate:number=300;

  let workingHours:number=65;
  let payment:number;

  if(workingHours<40){
    payment=regularHourlyRate*workingHours;
  }else{
    let overHourTime=workingHours-40;
    payment=(regularHourlyRate*40)+(overHourTime*overtimeHourlyRate);
  }
  console.log(`Your Payment is :${payment}`);
}