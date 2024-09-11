/*
Write a TS program to print out the following star pattern based on the used entered height of 
the triangle.
Test data and expected output:
Please enter the triangle height: 5
*
**
***
****
*****
*/

export default function loop(){
    let height:number=5;
    for(let i=1;i<=height;i++){
        console.log("*".repeat(i));
    }
}