interface Shape{
    name:string;
    color:string;
    area():number;
}

interface ThreeDShape extends Shape{
    volume():number;
}

//usage
class Circle implements Shape{
    constructor(public name:string,public color:string,public radius:number){}

    area(): number {
        return Math.PI*this.radius*this.radius
    }

}

class Sphere implements ThreeDShape{
    constructor(public name:string,public color:string,public radius:number,public height:number){}

    area(): number {
        return Math.PI*this.radius*this.radius
    }

    volume(): number {
        return Math.PI*this.radius*this.radius*this.height
    }
}