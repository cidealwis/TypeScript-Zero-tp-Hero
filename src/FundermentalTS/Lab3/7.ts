/*
Write a TS program, that reads three integer values from the user (through keyboard entry), 
then display the three values in ascending order. For example, if the user entered 3 values: 84 
3 130, the program should output the three values as: 3, 84, 130. Here are a few example runs 
of the program:
Sample run 1
Please enter three integer values: 4 10 6
The three values in ascending order are: 4 6 10
Sample run 2
Please enter three integer values: 20 5 3
The three values in ascending order are: 3 5 20

*/

export default class sortNumberArra{
    private sortNumberString:string="";
    private sortNumberArray:number[]=[];

    public setNumberString(num:string):void{
        this.sortNumberString=num;
    }

    public sortData():number[]{
        let numberStringArray:string[]=this.sortNumberString.split("");
        for(let i=0;i<numberStringArray.length;i++){
            this.sortNumberArray[i]=parseInt(numberStringArray[i]);
        }

       for(let i=0;i<this.sortNumberArray.length;i++){
        for(let j=0;j<this.sortNumberArray.length+i-1;j++){
            this.sortTwo(this.sortNumberArray,j+1,j);
        }
       }

        return this.sortNumberArray;
    }

    private swapTwo(list:number[],a:number,b:number){
        [list[a],list[b]]=[list[b],list[a]];
    }

    private sortTwo(list:number[],a:number,b:number){
        if(list[a]<list[b]){
            this.swapTwo(list,a,b);
        }
    }

  
}