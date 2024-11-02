// Assignment 2

// Q1
function nameRev() {
    let fname = document.getElementById("your_name").value;
    var name_reversed = ""
    for (var i = fname.length - 1; i >= 0; i--) {
        name_reversed += fname[i];
    }

    document.getElementById("r_name").value = name_reversed;
}

function paliDrome() {
    let val = document.getElementById("pal").value;
    var vals = [];
    
}