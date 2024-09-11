abstract class Animal{
    name:string="";

    constructor(name:string) {
        this.name=name
    }

    abstract makeSound():void;

    move():void{
        console.log(`${this.name} is moving.`);
    }
}

export abstract class Dog extends Animal{
    constructor(name:string){
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

