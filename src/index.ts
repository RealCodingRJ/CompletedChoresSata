import * as Completed  from './Completed.chores.json';
import {question} from "readline-sync";
import * as fs from 'fs';

function isComplete() {
    if (Completed[0].completed) {

        return Completed[0].completed === true
    }

    if (Completed[1].completed) {

        return  Completed[1].completed == true
    }
}

if (isComplete()) {

    const isComplete = question("Is Your Chores Done...: ")

    if (isComplete == "Yes") {

        console.log("Complete Your Chore: " + Completed[0].COMPLETE_1)
        console.log("[Completed]: " + Completed[0].completed)
    }

    else {

        console.log("Complete Your Chore: " + Completed[0].COMPLETE_1)
        console.log("[Completed]: " + !Completed[0].completed)

        fs.writeFileSync("Completed.false",
            "You Did Not Complete: " + Completed[0].COMPLETE_1);
    }
}

if (isComplete()) {

    const isComplete = question("Is Your Chores Done...: ")

    if (isComplete == "Yes") {

        console.log("Complete Your Chore: " + Completed[1].COMPLETE_2)
        console.log("[Completed]: " + Completed[1].completed)
    }

    else {

        console.log("Complete Your Chore: " + Completed[1].COMPLETE_2)
        console.log("[Completed]: " + !Completed[1].completed);

        fs.writeFileSync("Completed.false",
            "You Did Not Complete: " + Completed[1].COMPLETE_2);

    }

}

