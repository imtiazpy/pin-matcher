function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if ((pinStr).length == 4) {
        return pinStr
    }
    return generatePin()
}

function verifyPin(pin, pinInput) {
    let tracker;
    const secretPin = document.getElementById(pin).value;
    const submittedPin = document.getElementById(pinInput).value;
    if (secretPin == submittedPin) {
        document.getElementById('correct').style.display = 'block'
        document.getElementById('wrong').style.display = 'none'
        tracker = 'yes'
    } else {
        document.getElementById('wrong').style.display = 'block'
        document.getElementById('correct').style.display = 'none'
        tracker = 'no'
    }
    return tracker
}

document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('pin').value = generatePin()
})

document.getElementById('key-pad').addEventListener('click', function (e) {

    if (!isNaN(e.target.innerText)) {
        document.getElementById('pin-input').value += e.target.innerText
    } else if (e.target.innerText == 'C') {
        document.getElementById('pin-input').value = '';
    }
})

let tryCount = 3;
// document.getElementById("tries").innerText = tryCount;

document.getElementById('submit-btn').addEventListener('click', function (e) {
    const ans = verifyPin('pin', 'pin-input');
    if (ans == 'no') {
        tryCount--;
        document.getElementById("tries").innerText = tryCount;

        if (tryCount == 0) {
            e.target.classList.add('gray')
            e.target.disabled = true;
        }
    } else {
        document.getElementById('tries').innerText = 3;
    }


})



