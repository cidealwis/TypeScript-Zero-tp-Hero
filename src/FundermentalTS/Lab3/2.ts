/*
Write a TS program that accepts a temperature in Fahrenheit and prints the corresponding 
temperature in Celsius.
C = ((F − 32)*5)/9
Test data and expected output:
Enter temp in Fahrenheit:98.4
Temp 98.40 in Fahrenheit = 36.89 Centigrade


*/

export default class Temperature {
private fahrenheit:number=Number(process.argv[2]);

public getFahrenheit():number{
    return this.fahrenheit;
}

public converterFahrenheitToCelsius():number{
    return ((this.fahrenheit-32)*5)/9;
}

}