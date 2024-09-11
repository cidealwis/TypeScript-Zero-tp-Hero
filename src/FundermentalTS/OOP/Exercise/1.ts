export default class Day {
    public dayString: string = "   april 8, 2022   ";
    public month: string = "";
    public day: number = 0;
    public year: number = 0;
    public dayTwoSpace:string="";
    // Delete leading and trailing blanks
    deleteLeading(): void {
        this.dayString = this.dayString.trim();
    }

    // Find position of the first blank space
    findPosition(): number {
        return this.dayString.indexOf(" ");
    }

    // Find position of the comma
    findComma(): number {
        return this.dayString.indexOf(",");
    }

    // Spread the string into month, day, and year using substring
    spreadString(): void {
        this.deleteLeading(); // Remove extra spaces before processing

        // Find positions of the first space and comma
        const firstSpace = this.findPosition();
        const commaPosition = this.findComma();

        // Get month, day, and year
        this.month = this.dayString.substring(0, firstSpace).trim();
        this.day = parseInt(this.dayString.substring(firstSpace + 1, commaPosition).trim());
        this.year = parseInt(this.dayString.substring(commaPosition + 1).trim());
    }

    // Capitalize the first character in the month string 
    firstCharacter(): void {
        if (this.month.length > 0) {
            this.month = this.month.charAt(0).toUpperCase() + this.month.slice(1);
        }
    }

    //add leading 0
    addLeadingZero():void{
        if(this.day<10){
            this.dayTwoSpace="0"+this.day.toString();
        }
        else{
            this.dayTwoSpace=this.day.toString();
        }
    }

}