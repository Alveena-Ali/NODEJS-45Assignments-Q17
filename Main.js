"use strict";
// Que 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and 
// you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two 
//   people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//   your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
//   an empty list at the end of your program.
// *************************************************************************************************************************
// • Start with your program from Exercise 16.
let guestList = ["Zara", "Sheza", "Laiba"];
let absentGuest = "Zara";
let newGuest = "Hooria";
guestList[0] = newGuest;
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log(`\nGood News! We find big dinner table so we are inviting 3 more guests.\n\n`);
// • Add one new guest to the beginning of your array.
guestList.unshift("Kiran");
// • Add one new guest to the middle of your array. 
guestList.splice(2, 0, "Areeba");
// • Use append() to add one new guest to the end of your list.
guestList.push("Anusha");
// • Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear" + " " + guestList[i] +
        ",\n\nIt is our pleasure to invite you in our dinner party.\n\nThank You!\n\n");
}
;
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`\nSorry we can not arrange big dinner table, only two peoples will be invited.\n`);
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//   your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, You are not invited for dinner.\n`);
}
;
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < guestList.length; i++) {
    console.log("\nDear" + " " + guestList[i] + ",\n\nYou are still invited.\n\nThank You!\n\n");
}
;
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
//   an empty list at the end of your program.
guestList.splice(0, 2);
console.log(guestList);
