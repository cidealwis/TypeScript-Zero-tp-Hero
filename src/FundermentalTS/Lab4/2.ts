
export default function loop(){
        let total:number=0;

        for(let i=11;i>10 && i<100;i++){
            total+=i;
        }
        console.log(`Total is ${total}`);
}