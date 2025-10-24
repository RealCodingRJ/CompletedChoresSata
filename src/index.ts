import * as Completed  from './Completed.chores.json';
import {question} from "readline-sync";
import * as fs from 'fs';

interface DataSet {
    data: string,
    isComplete: boolean
    getDataFromUser(): void;
}

type Data = DataSet & {

    isAdminChose: boolean
}



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

    const dataByUser: Data = {
        isAdminChose: true,
        getDataFromUser() {
            console.log("Data", )
        },

        data: isComplete,
        isComplete: isComplete == ""
    }

    if (dataByUser["data"] == "Yes") {

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

    const dataByUser: Data = {
        isAdminChose: true,
        getDataFromUser() {
            console.log("Data", )
        },

        data: isComplete,
        isComplete: isComplete == ""
    }

    if (dataByUser["data"] == "Yes") {

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

