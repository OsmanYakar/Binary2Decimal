function BinToDec(ev) {

    if (ev.key != 0 && ev.key != 1 && ev.key != 'Backspace' && ev.key != 'Enter') {
        console.log(ev.key);
        ev.preventDefault();
    }

    else if (ev.key == 0 || ev.key == 1) {
        var binary = document.getElementById("binaryNumber").value;
        binary += ev.key;
        decimal = parseInt(binary, 2);
        document.getElementById("decimalNumber").placeholder = decimal;
    }
}