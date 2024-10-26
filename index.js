// Assignment 2

// Q1
function nameRev() {
   let fname = document.getElementById("your_name").value;
    var name_reversed = ""
    for (var i = 0; i < fname.length; i++) {
        name_reversed[i] = fname[fname.length - (i-1)]
    }

    document.getElementById("r_name").value = name_reversed;
}