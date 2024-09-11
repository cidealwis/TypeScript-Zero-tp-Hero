/*
Write a TS program using nested while loop to reproduce the following output:
1
22
333
4444
55555
*/
export default function loop(){
   let height:number=5;
   for(let i=1;i<=height;i++){
    console.log((i+"").repeat(i));
   }
    
}