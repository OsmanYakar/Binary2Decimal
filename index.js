binToDec = true;
maxLength = 8;

function Convert(ev) {

    var firstInput = document.getElementById("firstInput");
    var secondInput = document.getElementById("secondInput");
    if (binToDec == true) {
        if (ev.key == 0 || ev.key == 1) {
            var binary = firstInput.value;
            if (binary.length < maxLength) {
                binary += ev.key;
                var decimal = parseInt(binary, 2);
                secondInput.value = decimal;
            }
            else
                ev.preventDefault();
        }
        else if (ev.key == 'Backspace') {
            var binary = firstInput.value;
            binary = Math.floor(binary / 10);
            var decimal = parseInt(binary, 2);
            secondInput.value = decimal;
        }
        else if (ev.keyCode != 0 || ev.key != 1 || ev.key != 'ArrowLeft' || ev.keyCode != 'ArrowRight') {
            ev.preventDefault();
        }
    }
    else {
        if (ev.key >= 0 || ev.key <= 9) {
            var decimal = firstInput.value;
            if (decimal.length < maxLength) {
                decimal += ev.key;
                var binary = (decimal >>> 0).toString(2);
                secondInput.value = binary;
            }
            else
                ev.preventDefault();
        }
        else if (ev.key == 'Backspace') {
            var decimal = firstInput.value;
            decimal = Math.floor(decimal / 10);
            var binary = (decimal >>> 0).toString(2);
            secondInput.value = binary;
        }
        else if (ev.keyCode != 0 || ev.key != 1 || ev.key != 'ArrowLeft' || ev.keyCode != 'ArrowRight') {
            ev.preventDefault();
        }
    }
}

function CopyNumber() {
    const el = document.createElement('textarea');
    el.value = document.getElementById("secondInput").value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    var copyBtn = document.getElementById('copybtn')

    copyBtn.setAttribute('class', 'btn btn-success');
    copyBtn.innerHTML = 'Kopyalandı';

    setTimeout(function () {
        copyBtn.setAttribute('class', 'btn btn-primary');
        copyBtn.innerHTML = 'Kopyala';
    }, 600);
}

function ChangeConversion() {
    var firstInputLabel = document.getElementById("firstInputLabel");
    var secondInputLabel = document.getElementById("secondInputLabel");
    var firstInputDesc = document.getElementById("firstInputDesc");


    binToDec = !binToDec;
    if (binToDec) {
        SetInputLabel(firstInputLabel, "Binary Sayı");
        SetInputLabel(secondInputLabel, "Decimal Sayı");
        SetDescription(firstInputDesc, "İkilik tabanda bir sayı girin");

    }
    else {
        SetInputLabel(firstInputLabel, "Decimal Sayı");
        SetInputLabel(secondInputLabel, "Binary Sayı");
        SetDescription(firstInputDesc, "Onluk tabanda bir sayı girin");
    }
    ResetInputs();
}

function SetInputLabel(label, message) {
    label.innerHTML = "<h2>" + message + "</h2>";
}

function SetDescription(label, message) {
    label.innerHTML = "<h6>" + message + "</h6>";
}

function ResetInputs() {

    var firstInput = document.getElementById("firstInput");
    var secondInput = document.getElementById("secondInput");
    firstInput.value = "";
    secondInput.value = "";
}