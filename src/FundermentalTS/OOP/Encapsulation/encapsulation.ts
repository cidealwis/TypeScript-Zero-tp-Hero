export default class BankMember{
    private _savingsBalance:number=0;

    public get savingsBalance():number{
        return this._savingsBalance;
    }

    public set savingsBalance(balance:number){
         this._savingsBalance=balance;
    }

    constructor(savingBalance:number){
        this._savingsBalance=savingBalance;
    }

    public deposit(amount:number):void{
        this._savingsBalance+=amount;
    }

    public withdraw(amount:number):void{
        if(this.savingsBalance<amount){
            console.log("Insufficient Funds");
            return;
        }
        this._savingsBalance-=amount;
    }

}