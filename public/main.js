let start = document.getElementById('start')
let text = document.getElementById('eventtext')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let enemyChoice = document.getElementById('enemychoice')
let resolve = document.getElementById('resolve')
let player = document.getElementById('player')
let enemy = document.getElementById('enemy')
let cpuChoice = Math.floor(Math.random() * 3)
let cpuArray = ['ROCK', 'PAPER', 'SCISSORS']

function startGame() {
  start.style.display = 'none'
  console.log(cpuChoice)
}

function clickRock() {
  text.innerHTML = 'You choose ' + rock.innerHTML
  paper.style.display = 'none'
  scissors.style.display = 'none'
  rock.style.display = 'none'
  enemyChoice.innerHTML = cpuArray[cpuChoice]
  if (cpuChoice === 0) {
    resolve.innerHTML = "It's a Draw!"
  } else if (cpuChoice === 1) {
    resolve.innerHTML = 'You Loose!'
    player.src = './modules/Images/rpsgifs/player/playerdeath.gif'
    enemy.src = './modules/Images/rpsgifs/hunt/huntattack.gif'
  } else if (cpuChoice === 2) {
    resolve.innerHTML = 'You Win!'
    player.src = './modules/Images/rpsgifs/player/playerattack.gif'
    enemy.src = './modules/Images/rpsgifs/hunt/huntdeath.gif'
  }
}
function clickPaper() {
  text.innerHTML = 'You choose ' + paper.innerHTML
  paper.style.display = 'none'
  scissors.style.display = 'none'
  rock.style.display = 'none'
  enemyChoice.innerHTML = cpuArray[cpuChoice]
  if (cpuChoice === 1) {
    resolve.innerHTML = "It's a Draw!"
  } else if (cpuChoice === 2) {
    resolve.innerHTML = 'You Loose!'
    player.src = './modules/Images/rpsgifs/player/playerdeath.gif'
    enemy.src = './modules/Images/rpsgifs/hunt/huntattack.gif'
  } else if (cpuChoice === 0) {
    resolve.innerHTML = 'You Win!'
    player.src = './modules/Images/rpsgifs/player/playerattack.gif'
    enemy.src = './modules/Images/rpsgifs/hunt/huntdeath.gif'
  }
}
function clickScissors() {
  text.innerHTML = 'You choose ' + scissors.innerHTML
  paper.style.display = 'none'
  scissors.style.display = 'none'
  rock.style.display = 'none'
  enemyChoice.innerHTML = cpuArray[cpuChoice]
  if (cpuChoice === 2) {
    resolve.innerHTML = "It's a Draw!"
  } else if (cpuChoice === 0) {
    resolve.innerHTML = 'You Loose!'
    player.src = './modules/Images/rpsgifs/player/playerdeath.gif'
    enemy.src = './modules/Images/rpsgifs/hunt/huntattack.gif'
  } else if (cpuChoice === 1) {
    resolve.innerHTML = 'You Win!'
    player.src = './modules/Images/rpsgifs/player/playerattack.gif'
    enemy.src = './modules/Images/rpsgifs/hunt/huntdeath.gif'
  }
}

start.addEventListener('click', startGame)
rock.addEventListener('click', clickRock)
paper.addEventListener('click', clickPaper)
scissors.addEventListener('click', clickScissors)
