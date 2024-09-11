export default class Dog{
    public age:number=0;
    public breed:string="";

    constructor(age:number,breed:string){
        this.age=age;
        this.breed=breed;
    }

    getRelativeAge():number{
        return this.age*7
    }
}