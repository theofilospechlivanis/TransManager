function getInput(){
    var frm = document.getElementById("form-timetable");
    var timetable = frm.elements[0].value;
    document.getElementById("results").innerHTML = timetable;
}

function getResults(){
    getInput();
}