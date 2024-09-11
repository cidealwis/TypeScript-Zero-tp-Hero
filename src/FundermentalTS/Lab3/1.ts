/*
Write a TS program that accepts a distance in inches and prints the corresponding value in 
centimeters (cm). Note that 1 inch = 2.54 cm.
Test data and expected output:
Enter the distance in inches:3
Distance 3.00000 inches is = 7.62 cms

*/
export default class question{
    private inches:number=2;
    
    public setInches(inches:number):void{
        this.inches=inches;
    }
    public getInches():number{
        return this.inches;
    }

    public inchesConvertCentimeters():number{
        return (this.inches*2.54);
    }
}