import Day from "./FundermentalTS/OOP/Exercise/1"

let day=new Day();
console.log(`Before string ${day.dayString}`);
day.deleteLeading();
console.log(`After string ${day.dayString}`);
console.log(`Position of First blank ${day.findPosition()}`);
console.log(`Position of Comma ${day.findComma()}`);
day.spreadString();
console.log(`Year is:${day.year}`);
console.log(`Month is :${day.month}`);
console.log(`Day is :${day.day}`);
day.firstCharacter();
console.log(`Month is ${day.month}`);
day.addLeadingZero();
console.log(`add leading zero ${day.dayTwoSpace}`);
