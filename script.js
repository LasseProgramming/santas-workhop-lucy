const openGift = (name) => {
    document.getElementById('gift-content-container').classList.remove('hidden');
    document.getElementById('gift-receiver').innerHTML = '<b>Receiver:</b> ' + name.name
    document.getElementById('nice-status').innerHTML = '<b>List Status:</b> ' + name.status
    document.getElementById('gift-image').innerHTML = '<img src="' + name.image + '" alt="">'
}

const closeGift = () => {
    document.getElementById('gift-content-container').classList.toggle('hidden');
}

const closeIntro = () => {
    document.getElementById('intro-container').classList.toggle('hidden');
}

const openGreenClue = () => {
    document.getElementById('green-clue-container').classList.remove('hidden');
}

const closeGreenClue = () => {
    document.getElementById('green-clue-container').classList.add('hidden');
}

const openYellowClue = () => {
    document.getElementById('yellow-clue-container').classList.remove('hidden');
}

const closeYellowClue = () => {
    document.getElementById('yellow-clue-container').classList.add('hidden');
}

const openBlueClue = () => {
    document.getElementById('blue-clue-container').classList.remove('hidden');
}

const closeBlueClue = () => {
    document.getElementById('blue-clue-container').classList.add('hidden');
}

const openRedClue = () => {
    document.getElementById('red-clue-container').classList.remove('hidden');
}

const closeRedClue = () => {
    document.getElementById('red-clue-container').classList.add('hidden');
}

const openBlackClue = () => {
    document.getElementById('black-clue-container').classList.remove('hidden');
}

const closeBlackClue = () => {
    document.getElementById('black-clue-container').classList.add('hidden');
}

const openLastClue = () => {
    document.getElementById('last-clue-container').classList.remove('hidden');
}

const closeLastClue = () => {
    document.getElementById('last-clue-container').classList.add('hidden');
}

const incLock = (num) => {
    const currentInner = parseInt(document.getElementById("lock" + num).innerHTML);
    if (currentInner < 9) {
        document.getElementById("lock" + num).innerHTML = currentInner + 1
    }
}

const decLock = (num) => {
    const currentInner = parseInt(document.getElementById("lock" + num).innerHTML);
    if (currentInner > 0) {
        document.getElementById("lock" + num).innerHTML = currentInner - 1
    }
}

const checkLock = () => {
    const result = parseInt(document.getElementById("lock" + 1).innerHTML +
                    document.getElementById("lock" + 2).innerHTML +
                    document.getElementById("lock" + 3).innerHTML +
                    document.getElementById("lock" + 4).innerHTML 
    )

    if ( result == 1348) {
        document.getElementById('black-clue-container').classList.add('hidden');
        document.getElementById('last-clue-container').classList.remove('hidden');
    }
}

