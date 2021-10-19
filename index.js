// ask username
const showUsername = () => {
    const username = prompt('닉네임을 적어주세요');
    const nameSpan = document.querySelector('span#username');
    nameSpan.innerHTML = username
}

showUsername()

const clickableBread = document.querySelector('#bread');
const numBread = document.querySelector('.game-body span');

// Store elements
const person = document.querySelector('#granny');
const breadMaker = document.querySelector('#breadMaker');
const bakery = document.querySelector('#bakery');
const corporateChain = document.querySelector('#corporateChain');
const empress = document.querySelector('#empress');

// Store element increments
const numPerson = document.querySelector('span#numGran');
const numMaker = document.querySelector('span#numMaker');
const numBakery = document.querySelector('span#numBakery');
const numCorp = document.querySelector('span#numCorp');
const numEm = document.querySelector('span#numEm');

// add bread logic
const addBreads = (val) => {
    numBread.innerHTML = parseInt(numBread.innerHTML) + val
}

clickableBread.addEventListener('click', () => {addBreads(1)})

// add store boosters logic
const addPerson = () => {
    setInterval(() => {addBreads(1)}, 1000)
    numPerson.innerHTML = parseInt(numPerson.innerHTML) + 1
}

person.addEventListener('click', addPerson)

const addBreadMaker = () => {
    setInterval(() => {addBreads(5)}, 1000)
    numMaker.innerHTML = parseInt(numMaker.innerHTML) + 1
}

breadMaker.addEventListener('click', addBreadMaker);

const addBakery = () => {
    setInterval(() => {addBreads(15)}, 1000)
    numBakery.innerHTML = parseInt(numBakery.innerHTML) + 1
}

bakery.addEventListener('click', addBakery)

const addCorporate = () => {
    setInterval(() => {addBreads(47)}, 1000)
    numCorp.innerHTML = parseInt(numCorp.innerHTML) + 1
}

corporateChain.addEventListener('click', addCorporate)

const addEmpress = () => {
    setInterval(() => {addBreads(260)}, 1000)
    numEm.innerHTML = parseInt(numEm.innerHTML) + 1
}

empress.addEventListener('click', addEmpress)