let gem = document.querySelector('.preco')
let parsedGem = parseFloat(gem.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector('.clicker-level')
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let pickaxeCost = document.querySelector('.pickaxe-cost')
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML)
let pickaxeLevel = document.querySelector('.pickaxe-level')
let pickaxeIncrease = document.querySelector('.pickaxe-increase')
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

let minerCost = document.querySelector('.miner-cost')
let parsedMinerCost = parseFloat(minerCost.innerHTML)
let minerLevel = document.querySelector('.miner-level')
let minerIncrease = document.querySelector('.miner-increase')
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML)

let dpctext = document.getElementById("dpc-text")
let dpstext = document.getElementById("dps-text")

let dpc = 1;

let dps = 0;

function incrementGem() {
    gem.innerHTML = Math.round(parsedGem += dpc);
}

function buyClicker() {
    if (parsedGem >= parsedClickerCost) { 
        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        dpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyPickaxe() {
    if (parsedGem >= parsedPickaxeCost) { 
        gem.innerHTML = Math.round(parsedGem -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease
        dps += parsedPickaxeIncrease

        parsedPickaxeCost *= 1.18;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }
}

function buyMiner() {
    if (parsedGem >= parsedMinerCost) { 
        gem.innerHTML = Math.round(parsedGem -= parsedMinerCost);

        minerLevel.innerHTML ++

        parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.03).toFixed(2))
        minerIncrease.innerHTML = parsedMinerIncrease
        dps += parsedMinerIncrease

        parsedMinerCost *= 1.18;
        minerCost.innerHTML = Math.round(parsedMinerCost)
    }
}

setInterval (() => {
    parsedGem += dps / 10
    gem.innerHTML = Math.round(parsedGem)
    dpctext.innerHTML = Math.round(dpc)
    dpstext.innerHTML = Math.round(dps)
}, 100)