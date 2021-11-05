// ask username
const showUsername = () => {
    const username = prompt('닉네임을 적어주세요');
    const nameSpan = document.querySelector('span#username');
    nameSpan.innerHTML = username
}
showUsername()

// basic ui
const clickableBread = document.querySelector('#bread');
const numBread = document.querySelector('.game-body span');
const numBreadPerSec = document.querySelector('span#persec')

// show number of bread on the title
const title = document.title
const updateTitle = () => {
    setInterval(() => {
        title = String(numBread.innerText)
    }, 1000)
}

// image elements
const imgCur = document.querySelector('.img.hidden.cursor');
const imgPer = document.querySelector('.img.hidden.granny');
const imgMkr = document.querySelector('.img.hidden.maker');
const imgBkr = document.querySelector('.img.hidden.bakery');
const imgCrp = document.querySelector('.img.hidden.corp');
const imgEmp = document.querySelector('.img.hidden.empress');

// image p elements
const showCur = document.querySelector('.showCur')
const showGran = document.querySelector('.showGran')
const showMkr = document.querySelector('.showMkr')
const showBkr = document.querySelector('.showBkr')
const showCrp = document.querySelector('.showCrp')
const showEmp = document.querySelector('.showEmp')

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

// Store cost increments
const curCost = document.querySelector('span#curCost');
const granCost = document.querySelector('span#granCost');
const makerCost = document.querySelector('span#makerCost');
const bakeryCost = document.querySelector('span#bakeryCost');
const corpCost = document.querySelector('span#corpCost');
const emCost = document.querySelector('span#emCost');

// Store cost initialization
let cursorVal = 15;
let granVal = 100;
let makerVal = 1100;
let bakeryVal = 12000;
let corpVal = 130000;
let emVal = 1400000;

// add bread logic
const addBreads = (val) => {
    let tmp = (parseFloat(numBread.innerText) + val).toFixed(2)
    numBread.innerText = tmp
}

// add payment logic
const makePayment = (val) => {
    const current = Number(numBread.innerText)
    if (current >= val) {
        numBread.innerText = current - val
    }
}

// increase cost every click
const increaseCost = (val) => {
    val *= 1.1
    return val.toFixed(2)
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
    }
}

const addCursor = (val) => {
    const newCursor = new Store(1, val)
    if (numBread.innerText >= newCursor.cost) {
        newCursor.purchase()
        // increments the number of cursors purchased
        numCursor.innerText = parseInt(numCursor.innerText) + 1
        // sync num cursors
        showCur.innerText = numCursor.innerText
        // increases the cost
        curCost.innerText = val
        // reveals the next level element
        person.classList.remove('hidden')
        imgCur.classList.remove('hidden')
    }
}


cursor.addEventListener('click', () => {
    if (numBread.innerText >= cursorVal) {
        cursorVal = increaseCost(cursorVal)
        addCursor(cursorVal)
        console.log(cursorVal)
    }
})

const addPerson = (val) => {
    const newPerson = new Store(5, val)
    if (numBread.innerText >= newPerson.cost) {
        newPerson.purchase()
        numPerson.innerHTML = parseInt(numPerson.innerHTML) + 1
        showGran.innerHTML = numPerson.innerHTML
        granCost.innerText = increaseCost(val)
        breadMaker.classList.remove('hidden')
        imgPer.classList.remove('hidden')
    }
}

person.addEventListener('click', () => {
    if (numBread.innerText >= granVal) {
        granVal = increaseCost(granVal)
        addPerson(granVal)
    }
})

const addBreadMaker = (val) => {
    const newBreadMaker = new Store(15, val)
    if (numBread.innerText >= newBreadMaker.cost) {
        newBreadMaker.purchase()
        numMaker.innerHTML = parseInt(numMaker.innerHTML) + 1
        showMkr.innerText = numMaker.innerText
        makerCost.innerText = increaseCost(val)
        bakery.classList.remove('hidden')
        imgMkr.classList.remove('hidden')
    }
}

breadMaker.addEventListener('click', () => {
    if (numBread.innerText >= makerVal) {
        makerVal = increaseCost(makerVal)
        addBreadMaker(makerVal)
    }
});

const addBakery = (val) => {
    const newBakery = new Store(47, val)
    if (numBread.innerText >= newBakery.cost) {
        newBakery.purchase()
        numBakery.innerHTML = parseInt(numBakery.innerHTML) + 1
        showBkr.innerText = numBakery.innerText
        bakeryCost.innerText = increaseCost(val)
        corporateChain.classList.remove('hidden')
        imgBkr.classList.remove('hidden')
    }
}

bakery.addEventListener('click', () => {
    if (numBread.innerText >= bakeryVal) {
        bakeryVal = increaseCost(bakeryVal)
        addBakery(bakeryVal)
    }
})

const addCorporate = (val) => {
    const newCorporate = new Store(100, val)
    if (numBread.innerText >= newCorporate.cost) {
        newCorporate.purchase()
        numCorp.innerHTML = parseInt(numCorp.innerHTML) + 1
        showCrp.innerText = numCorp.innerHTML
        corpCost.innerText = increaseCost(val)
        empress.classList.remove('hidden')
        imgCrp.classList.remove('hidden')
    }
}

corporateChain.addEventListener('click', () => {
    if (numBread.innerText >= corpVal) {
        corpVal = increaseCost(corpVal)
        addCorporate(corpVal)
    }
})

const addEmpress = (val) => {
    const newEmpress = new Store(260, val)
    if (numBread.innerText >= newEmpress.cost) {
        newEmpress.purchase()
        emCost.innerText = increaseCost(val)
        numEm.innerHTML = parseInt(numEm.innerHTML) + 1
        showEmp.innerHTML = numEm.innerHTML
    }
}

empress.addEventListener('click', () => {
    if (numBread.innerText >= emVal) {
        emVal = increaseCost(emVal)
        addEmpress(emVal)
        imgEmp.classList.remove('hidden')
    }
})

