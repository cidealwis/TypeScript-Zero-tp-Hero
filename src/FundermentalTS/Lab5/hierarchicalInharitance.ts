export class Animal{
    public eat():void{
        console.log("eating");
    }
}

export class Dog extends Animal{
    public bark():void{
        console.log("barking");
    }
}

export class Cat extends Animal{
    public meow():void{
        console.log("meowing");
    }
}