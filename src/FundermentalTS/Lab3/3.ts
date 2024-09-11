/*
Write a program that accepts any character and prints the corresponding ASCII value.
Test data and expected output:
Enter character: A
ASCII value of A is: 65

*/

export default class asciiValue{
    public character:string=process.argv[2];

    public getAscII():string{
        return (this.character.charCodeAt(0).toString());
    }
}