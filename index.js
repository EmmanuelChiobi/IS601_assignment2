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
    let isPali = document.getElementById('ispali');
    var revPali = ""
    for (var i = val.length - 1; i >= 0; i--) {
        revPali += val[i];
    }

    if (val === revPali) {
        isPali.textContent = "True";
    } else {
        isPali.textContent = "False";
    }
}

function billPay() {
    let subTot = Number(document.getElementById("bill").value);
    let percNum = Number(document.getElementById("perc").value);
    fullPerc = percNum / 100;
    billNum = subTot * fullPerc
    totalNum = subTot + billNum;
    document.getElementById("total").textContent = `Total: $${totalNum.toFixed(2)}`
}