var pin = '1945';
var tries = 1;


function withdraw() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('pin').style.display = 'block';
}

function one() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '1';
    }
}

function two() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '2';
    }
}

function three() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '3';
    }
}

function four() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '4';
    }
}

function five() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '5';
    }
}

function six() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '6';
    }
}

function seven() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '7';
    }
}

function eight() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '8';
    }
}

function nine() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '9';
    }
}

function zero() {
    if (document.getElementById('pinInput').value.length < 4) {
        document.getElementById('pinInput').value += '0';
    }
}

function clearChar() {
    if (document.getElementById('pinInput').value.length > 0) {
        const currentString = document.getElementById('pinInput').value;
        const newString = currentString.substring(0, currentString.length - 1);
        document.getElementById('pinInput').value = newString;

    }
}

function enter() {
    if (document.getElementById('pinInput').value == pin) {
        document.getElementById('pin').style.display = 'none';
        document.getElementById('withdraw').style.display = 'block';
        tries = 1;
    } else {
        document.getElementById('message').innerHTML = 'Neteisingas pin! (' + tries + '/3)';
        document.getElementById('message').style.color = 'red';
        document.getElementById('pinInput').value = '';
        tries++;
        checkBlocking();
    }
}

function cancel() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('pin').style.display = 'none';
}

function checkBlocking() {
    if (tries > 3) {
        document.getElementById('message').innerHTML = 'Kortele sunaikinta';
        tries = 1;
    }
}