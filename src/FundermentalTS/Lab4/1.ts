export default function loop(){
   const width=9;
   const height=11;
   for (let i=0;i<height;i++){
    if(i==0 || i==height-1){
        console.log("*".repeat(width));
    }
    else{
        console.log("*"+' '.repeat(width-1)+"*");
    }
   }
    
}