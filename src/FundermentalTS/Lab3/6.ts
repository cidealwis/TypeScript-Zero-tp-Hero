/*
. Write a TS program that prompts the user to enter the number of credit hours earned so far and 
displays his/her corresponding category:
First – Year Student: students with <= 30 credit hours earned
Second – Year Student: 30 < credit hours earned <= 60
Third – Year Student: 60 < credit hours earned <= 90
4
Fourth – Year Student: 90 < credit hours earned
If the user input is not valid, i.e., credit hours entered < 0, an error message is displayed.
Test data and expected output (sample run 1):
Please enter your total credit hours earned: 35
You are a Second – Year Student.
Test data and expected output (sample run 2):
Please enter your total credit hours earned: -10
Invalid input
*/

export default class GpaClass{
    private gpa:number=0;

    public getGpa():number{
        return this.gpa;
    }
    public setGpa(gpa:number):void{
        this.gpa=gpa;
    }

    public operation():string{
        if(this.gpa>=90){
            return "Forth Year";
        }
        else if(this.gpa>=60){
            return "Third Year";
        }
        else if(this.gpa>=30){
            return "Second Year";
        }
        else{
            return "First Year";
        }
    }
}