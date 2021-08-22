// function generatePin() {
//     const pin = Math.round(Math.random() * 10000);
//     const pinStr = pin + '';
//     if ((pinStr).length == 4) {
//         return pinStr
//     }
//     return generatePin()
// }

// function verifyPin(pin, pinInput) {
//     let tracker;
//     const secretPin = document.getElementById(pin).value;
//     const submittedPin = document.getElementById(pinInput).value;
//     if (secretPin == submittedPin) {
//         document.getElementById('correct').style.display = 'block'
//         document.getElementById('wrong').style.display = 'none'
//         tracker = 'yes'
//     } else {
//         document.getElementById('wrong').style.display = 'block'
//         document.getElementById('correct').style.display = 'none'
//         tracker = 'no'
//     }
//     return tracker
// }



document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('clue').value = generateClue()
    document.getElementById('incorrect').style.display = 'none';
    document.getElementById('correct').style.display = 'none';
    document.getElementById('pin-input').value = '';
})

document.getElementById('key-pad').addEventListener('click', function (e) {

    if (!isNaN(e.target.innerText)) {
        document.getElementById('pin-input').value += e.target.innerText
    } else if (e.target.innerText == 'C') {
        document.getElementById('pin-input').value = '';
    }
})

let tryCount = 3;
document.getElementById('submit-btn').addEventListener('click', function (e) {
    const ans = verifyPin('clue', 'pin-input');
    if (ans == 'incorrect') {
        tryCount--;
        document.getElementById("tries").innerText = tryCount;
        if (tryCount == 0) {
            e.target.classList.add('gray')
            e.target.disabled = true;
        }
    } else {
        tryCount = 3;
        document.getElementById('tries').innerText = tryCount;
    }


})



function generateClue() {
    const clueList = [
        'James Bond code',
        '5*5+77/7',
        'birth year of Bangladesh'
    ]
    for (let i = 0; i < clueList.length - 1; i++) {
        let j = i + Math.round(Math.random() * (clueList.length - i));
        let temp = clueList[j];
        clueList[j] = clueList[i];
        clueList[i] = temp;
    }
    for (clue of clueList) {
        if (clue == 'James Bond code') {
            return 'James Bond code'
        } else if (clue == '5*5+77/7') {
            return '5*5+77/7'
        } else {
            return 'birth year of Bangladesh'
        }
    }
}

function verifyPin(clue, pinInput) {
    let tracker;
    const secretClue = document.getElementById(clue).value;
    let secretPin;
    const submittedPin = parseInt(document.getElementById(pinInput).value);

    if (secretClue == 'James Bond code') {
        secretPin = 007
    } else if (secretClue == '5*5+77/7') {
        secretPin = 36
    } else {
        secretPin = 1971
    }

    if (secretPin == submittedPin) {
        document.getElementById('correct').style.display = 'block'
        document.getElementById('incorrect').style.display = 'none'
        tracker = 'correct'
    } else {
        document.getElementById('incorrect').style.display = 'block'
        document.getElementById('correct').style.display = 'none'
        tracker = 'incorrect'
    }
    return tracker
}
