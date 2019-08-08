$(function () {
    $('#enter').click(function () {
    });
});

function getInput(x, y) {
    var myForm = document.getElementById(x);

    return myForm.elements[y].value;
}

function isInt(value) {
    var x;

    if (isNaN(value)) {
        return false;
    }

    x = parseFloat(value);

    return (x | 0) === x;
}

function addRow() {
    var i;

    var num = getInput("add-rows-form", 0);

    var table = document.getElementById("logfile-table");
    var rowCount = table.rows.length;

    for (i = 0; i < num; i++) {
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        rowIndex = "row-" + rowCount.toString();

        var element = document.createElement('input');
        element.type = "text";
        element.name = "cell1-" + rowIndex;
        cell1.appendChild(element);
        element = document.createElement('input');
        element.type = "text";
        element.name = "cell2-" + rowIndex;
        cell2.appendChild(element);
        element = document.createElement('input');
        element.type = "text";
        element.name = "cell3-" + rowIndex;
        cell3.appendChild(element);
        element = document.createElement('input');
        element.type = "text";
        element.name = "cell4-" + rowIndex;
        cell4.appendChild(element);
        element = document.createElement('input');
        element.type = "text";
        element.name = "cell5-" + rowIndex;
        cell5.appendChild(element);
        element = document.createElement('input');
        element.type = "text";
        element.name = "cell6-" + rowIndex;
        cell6.appendChild(element);

        rowCount = rowCount + 1;
    }
}

function removeRow() {
    var i;

    var num = getInput("rm-rows-form", 0);

    var table = document.getElementById("logfile-table");
    var rowCount = table.rows.length - 1;

    if (num >= rowCount) {
        num = rowCount - 1;
    }

    for (i = 0; i < num; i++) {
        table.deleteRow(rowCount);
        rowCount = rowCount - 1;
    }
}

function getTimetable() {
    var i;
    var lsnArray = [];
    var cmdTypeArray = [];
    var transIDArray = [];

    var table = document.getElementById("logfile-table");
    var rowCount = table.rows.length - 2;

    try {
        for (i = 0; i < rowCount; i++) {
            lsnArray.push(getLSN(i * 6));
            cmdTypeArray.push(getCmdType((i * 6) + 3, lsnArray));
            transIDArray.push(getTransID((i * 6) + 2, cmdTypeArray[i]));
        }
    }
    catch (e) {
        alert(e);
    }
}

function getLSN(index) {
    var lsn = getInput("timetable-form", index);

    if (isInt(lsn)) {
        return lsn;
    }
    else {
        throw "LSN must be an integer."
    }
}

function getCmdType(index, lsnArray) {
    var cmdType = getInput("timetable-form", index);

    if (cmdType === "BEGIN_CHECKPOINT"
        || cmdType === "UPDATE"
        || cmdType === "END_CHECKPOINT"
        || cmdType === "ABORT"
        || cmdType === "END"
        || cmdType === "COMMIT") {
        return cmdType;
    }
    else if (cmdType[0] === 'C'
        && cmdType[1] === 'L'
        && cmdType[2] === 'E'
        && cmdType[3] === 'A'
        && cmdType[4] === 'R') {
        for (i = 0; i < lsnArray.length; i++) {
            if (cmdType.substring(5) === lsnArray[i]) {
                return cmdType;
            }
        }
        throw "LSN must exist."
    }
    else {
        throw "TYPE must be BEGIN_CHECKPOINT, UPDATE, END_CHECKPOINT, ABORT, END, COMMIT or CLEAR{LSN}."
    }
}

function getTransID(index, cmdType) {
    var transID = getInput("timetable-form", index);

    if (cmdType === "BEGIN_CHECKPOINT"
        || cmdType === "END_CHECKPOINT") {
        if (!transID) {
            return transID;
        }
        else {
            throw "TRANS_ID must be empty when TYPE is BEGIN_CHECKPOINT or END_CHECKPOINT."
        }
    }
    else if (transID[0] === 'T'
        && isInt(transID.substring(1))) {
        return transID;
    }
    else {
        throw "TRANS_ID must start with 'T' and end with an integer number."
    }
}

function getPrevLSN(index, cmdType) {
    var prevLSN = getInput("timetable-form", index);

    if (cmdType === "BEGIN_CHECKPOINT"
        || cmdType === "END_CHECKPOINT") {
        if (!prevLSN) {
            return prevLSN;
        }
        else {
            throw "PREV_LSN must be empty when TYPE is BEGIN_CHECKPOINT or END_CHECKPOINT."
        }
    }
    else if (isInt(prevLSN)) {
        return prevLSN;
    }
    else {
        throw "LSN must be an integer."
    }
}