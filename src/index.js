"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Completed = require("./Completed.chores.json");
var readline_sync_1 = require("readline-sync");
var fs = require("fs");
function isComplete() {
    if (Completed[0].completed) {
        return Completed[0].completed === true;
    }
    if (Completed[1].completed) {
        return Completed[1].completed == true;
    }
}
if (isComplete()) {
    var isComplete_1 = (0, readline_sync_1.question)("Is Your Chores Done...: ");
    if (isComplete_1 == "Yes") {
        console.log("Complete Your Chore: " + Completed[0].COMPLETE_1);
        console.log("[Completed]: " + Completed[0].completed);
    }
    else {
        console.log("Complete Your Chore: " + Completed[0].COMPLETE_1);
        console.log("[Completed]: " + !Completed[0].completed);
        fs.writeFileSync("Completed.false", "You Did Not Complete: " + Completed[0].COMPLETE_1);
    }
}
if (isComplete()) {
    var isComplete_2 = (0, readline_sync_1.question)("Is Your Chores Done...: ");
    if (isComplete_2 == "Yes") {
        console.log("Complete Your Chore: " + Completed[1].COMPLETE_2);
        console.log("[Completed]: " + Completed[1].completed);
    }
    else {
        console.log("Complete Your Chore: " + Completed[1].COMPLETE_2);
        console.log("[Completed]: " + !Completed[1].completed);
        fs.writeFileSync("Completed.false", "You Did Not Complete: " + Completed[1].COMPLETE_2);
    }
}
