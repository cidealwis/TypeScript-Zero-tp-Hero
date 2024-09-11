export class Animal{
    public eat():void{
        console.log("eating");
    }
}

export class Dog extends Animal{
    public bark():void{
        console.log("baking");
    }
}

export class BabyDog extends Dog{
    public weep():void{
        console.log("weeping");
    }
}