/*
Write a TS program that accepts a sequence of positive integers between 1 and 9 both 
inclusive from the keyboard. The program will stop accepting input once an integer outside 
the range is entered. The program will finish by printing the total number multiples of 3 and 
total number of even integers entered.
Test data and expected output (sample run 1):
Enter integers between 1 & 9 both inclusive, outside range to stop
Enter integer :0
Total no of even integer entered is 0
Total no of multiples of 3 entered is 0
3
Test data and expected output (sample run 2):
Enter integers between 1 & 9 both inclusive, outside range to stop
Enter integer :2
Enter integer :4
Enter integer :6
Enter integer :9
Enter integer :3
Enter integer :1
Enter integer :2
Enter integer :0
Total no of even integers entered is 4
Total no of multiples of 3 entered is 3
*/

export default function loop(){
    let stringNumbers:string="234572303845482283349002181048575493";
    let numberArray:number[]=[];
  
    let stringArrayNumber:string[]=[];
    stringArrayNumber=stringNumbers.split("");
    console.log(stringArrayNumber)
    for(let i=0;i<stringArrayNumber.length;i++){
        numberArray[i]=parseFloat(stringArrayNumber[i]);
    }

    let totalEvenNumber:number=0;
    let totalMultipleThree:number=0;

    for(let i=0;i<numberArray.length;i++){
        if(numberArray[i]%2==0){
            totalEvenNumber++;
        }
        if(numberArray[i]%3==0){
            totalMultipleThree++;
        }
    }
    console.log(`Total Even Integers ${totalEvenNumber}`);
    console.log(`Total no of multiples of 3 entered is ${totalMultipleThree}`)
}