function getInput() {
    var frm = document.getElementById("form-timetable");
    var timetable = frm.elements[0].value;
    document.getElementById("results").innerHTML = timetable;
}

function getResults() {
    getInput();
}

function submit() {
    document.getElementById("header").style.display = "none";
    document.getElementById("submit").style.display = "none";

    document.getElementById("skr").style.gridArea = "2 / 2 / 2 / 2";
    document.getElementsByTagName("BODY")[0].style.gridTemplateRows = "15% 15% 10% 20% auto";
    document.getElementById("header-page1").classList.remove("hidden");
    document.getElementById("yesno").classList.remove("hidden");
    document.getElementById("page").classList.remove("hidden");

    document.getElementById("yesno").style.display = "grid";
    document.getElementById("page").style.display = "grid";
}

function next() {
    document.getElementById("header-page1").classList.add("hidden");
    document.getElementById("yesno").classList.add("hidden");
    document.getElementById("yesno").style.display = "none";


    document.getElementById("table").classList.remove("hidden");
}