/*
Write a TS program to display the following pyramid based on the user entered height of the 
pyramid.
Test data and expected output:
Please enter the height of the pyramid: 5
    *
   ***
  *****
 *******
*********

*/
export default function loop(){
let height:number=5;
for(let i=1;i<=height;i++){
    console.log(" ".repeat(height-i)+"* ".repeat(i));
}
}