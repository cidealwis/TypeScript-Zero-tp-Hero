/* 
Write a TS program which reads a single letter of alphabet. If it is a lowercase between ’a’ and 
’g’, the program prints out the alphabet in uppercase form. If it is anything else, the program 
should print out uppercase ’X’.
Test data and expected output:
Enter your character: b
Output is: B
Test data and expected output:
Enter your character: y
Output is: X
*/

export default class LetterCheck{
    private character:string="";

    public setChar(character:string):void{
        this.character=character;
    }

    public getCharacter():string{
        return this.character
    }

    public operation():string{
        if(this.character.charCodeAt(0)>96 && this.character.charCodeAt(0)<104){
            return this.character.toUpperCase();
        }
        else{
            return "X";
        }
    }
}