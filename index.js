// ask username
const showUsername = () => {
    const username = prompt('닉네임을 적어주세요');
    const nameSpan = document.querySelector('span#username');
    nameSpan.innerHTML = username
}
// showUsername()

// basic ui
const clickableBread = document.querySelector('#bread');
const numBread = document.querySelector('.game-body span');
const numBreadPerSec = document.querySelector('span#persec')

// show number of bread on the title
const title = document.title
const updateTitle = () => {
    setInterval(() => {
        title = String(numBread.innerHTML)
    }, 1000)
}

// Store elements
const cursor = document.querySelector('#cursor')
const person = document.querySelector('#granny');
const breadMaker = document.querySelector('#breadMaker');
const bakery = document.querySelector('#bakery');
const corporateChain = document.querySelector('#corporateChain');
const empress = document.querySelector('#empress');

// Store element increments
const numCursor = document.querySelector('span#numCursor')
const numPerson = document.querySelector('span#numGran');
const numMaker = document.querySelector('span#numMaker');
const numBakery = document.querySelector('span#numBakery');
const numCorp = document.querySelector('span#numCorp');
const numEm = document.querySelector('span#numEm');

// add bread logic
const addBreads = (val) => {
    numBread.innerText = parseFloat(numBread.innerText) + val
}

const makePayment = (val) => {
    const current = Number(numBread.innerText)
    if (current >= val) {
        numBread.innerText = current - val
    }
}

// add number of bread baked per second logic when booster purchased
const addBreadPerSec = (val) => {
    numBreadPerSec.innerText = parseInt(numBreadPerSec.innerText) + val 
}

clickableBread.addEventListener('click', () => {addBreads(1)})

// add store boosters logic
// class Store for adding logic faster
class Store {
    constructor(breadProduction, cost) {
        this.breadProduction = breadProduction;
        this.cost = cost;
    }
    purchase() {
        setInterval(() => {addBreads(this.breadProduction)}, 1000)
        makePayment(this.cost)
        addBreadPerSec(this.breadProduction)
        console.log('it works')
    }
}

const addCursor = () => {
    const newCursor = new Store(1, 15)
    if (numBread.innerText >= newCursor.cost) {
        newCursor.purchase()
        numCursor.innerText = parseInt(numCursor.innerText) + 1
    }
}

cursor.addEventListener('click', addCursor)

const addPerson = () => {
    const newPerson = new Store(5, 100)
    if (numBread.innerText >= newPerson.cost) {
        newPerson.purchase()
        numPerson.innerHTML = parseInt(numPerson.innerHTML) + 1
    }
}

person.addEventListener('click', addPerson)

const addBreadMaker = () => {
    const newBreadMaker = new Store(15, 1100)
    if (numBread.innerText >= newBreadMaker.cost) {
        newBreadMaker.purchase()
        numMaker.innerHTML = parseInt(numMaker.innerHTML) + 1
    }
}

breadMaker.addEventListener('click', addBreadMaker);

const addBakery = () => {
    const newBakery = new Store(47, 12000)
    if (numBread.innerText >= newBakery.cost) {
        newBakery.purchase()
        numBakery.innerHTML = parseInt(numBakery.innerHTML) + 1
    }
}

bakery.addEventListener('click', addBakery)

const addCorporate = () => {
    const newCorporate = new Store(100, 130000)
    if (numBread.innerText >= newCorporate.cost) {
        newCorporate.purchase()
        numCorp.innerHTML = parseInt(numCorp.innerHTML) + 1
    }
}

corporateChain.addEventListener('click', addCorporate)

const addEmpress = () => {
    const newEmpress = new Store(260, 1400000)
    if (numBread.innerText >= newEmpress.cost) {
        newEmpress.purchase()
        numEm.innerHTML = parseInt(numEm.innerHTML) + 1
    }
}

empress.addEventListener('click', addEmpress)

