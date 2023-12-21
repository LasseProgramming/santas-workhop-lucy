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
    console.log("hello")
    document.getElementById('blue-clue-container').classList.remove('hidden');
}

const closeBlueClue = () => {
    document.getElementById('blue-clue-container').classList.add('hidden');
}