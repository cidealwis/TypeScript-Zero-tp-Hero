export class Language{
    public displayInfo():void{
        console.log("Common English Language");
    }
}

export class Java extends Language{
    public displayInfo():void{
        console.log("Java Programming Language");
    }
}

export class C extends Language{
    public displayInfo(): void {
        console.log("C programming Language");
    }
}
export class TypeScript extends Language{
    public displayInfo(): void {
        console.log("TypeScript Programming Language");
    }
}