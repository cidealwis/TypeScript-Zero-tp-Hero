/*
11. Write a TS program to create the following char array.
char word[10]={‘a’, ‘v’, ‘s’, ‘j’, ‘a’, ‘g’, ‘t’, ‘a’, ‘b’, ‘c’};
Then, find how many ‘a’ characters in the word array.
*/

export default function loop(){
    let letterArray:string[]=["a","v","s","j","a","g","t","a","b","c"];
    let aCounter:number=0;

    for(let i=0;i<letterArray.length;i++){
        if(letterArray[i]=="a"){
            ++aCounter;
        }
    }
console.log(aCounter);
    
}