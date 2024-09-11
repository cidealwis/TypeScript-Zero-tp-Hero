/*
 Write a program to accept the unit price and quantity for three sales items in a particular store. 
Then, calculate the total bill value and display it according to the output shown below:
Enter unit price for item 01: 3
Enter the quantity for item 01: 4
Enter unit price for item 02: 5
Enter the quantity for item 02: 6
Enter unit price for item 03: 7
Enter the quantity for item 03: 8
***** Welcome to the ABC Store *****
-------------------------------------------------
Unit ID Unit Price Subtotal
-------------------------------------------------
Unit 01 3.00 12.00
Unit 02 5.00 30.00
Unit 03 7.00 56.00
-------------------------------------------------
Total: 98.00
-------------------------------------------------
*/

export default class Price{
    private itemPrice:number[]=[];
    private itemUnit:number[]=[];
    public getItemPrice():number[]{
        return this.itemPrice;
    }
    public setItemPrice(setUnitPrice:number):void{
        this.itemPrice.push(setUnitPrice);
    }

    public getItems():number[]{
        return this.itemUnit
    }

    public setItem(setUnit:number):void{
        this.itemUnit.push(setUnit);
    }
    
}