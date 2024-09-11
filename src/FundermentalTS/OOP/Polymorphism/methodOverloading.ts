export class Pattern {
    // Overload signatures
    public display(): void;
    public display(symbol: string): void;

    // Implementation of the method
    public display(symbol?: string): void {
        const character = symbol ?? "*";
        for (let i = 0; i < 10; i++) {
            console.log(character);
        }
    }
}
