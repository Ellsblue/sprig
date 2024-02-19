/*
@title: Threes
@author: Ellsblue
@tags: []
@img: ""
@addedOn: 2024-00-00

Hello Player!
Your goal in this game is to beat the AI opponent.
Each round you will get a random roll of three dice.
You then get six rolls to try and get a set or run.
At the end of each round, points are awarded based on the key below.
The first player to 100 points wins the match!

KEY:
  Nothing => 0pts
  Set of two => 1pt
  Set of three => 2pts
  Run of three => 4pts

  Runs:
  1, 2, 3
  2, 3, 4
  3, 4, 5
  4, 5, 6

CONTROLS:
  a & d => move cursor between dice
  l => rolls the selected die
  k => submits the dice as they are
  j => starts new round
  i => starts new match

Opponent
dice
*/

const score0 = "0"
const score1 = "1"
const score2 = "2"
const score3 = "3"
const score4 = "4"
const score5 = "5"
const score6 = "6"
const score7 = "7"
const score8 = "8"
const score9 = "9"

const black1 = "q"
const black2 = "w"
const black3 = "e"
const black4 = "r"
const black5 = "t"
const black6 = "y"

const background = "b"
const cursor = "c"
const hideL = "h"
const hide = "l"
const hideR = "z"
const rollsLeft = "u"

const tie = "n"
const win = "x"
const lose = "v"

setLegend(
  [ tie, bitmap`
0000000000000000
0222222222222220
0202020002020220
0202020202020220
0220220202020220
0220220202020220
0220220002000220
0222222222222220
0200020002000220
0220222022022220
0220222022002220
0220222022022220
0220220002000220
0222222222222220
0000000000000000
................` ],
  [ win, bitmap`
0000000000000000
0222222222222220
0202020002020220
0202020202020220
0220220202020220
0220220202020220
0220220002000220
0222222222222220
0202020002000220
0202022022020220
0200022022020220
0200022022020220
0202020002020220
0222222222222220
0000000000000000
................` ],
  [ lose, bitmap`
0000000000000000
0222222222222220
0202020002020220
0202020202020220
0220220202020220
0220220202020220
0220220002000220
0222222222222220
0202200020020020
0202202020220220
0202202020020020
0202202022020220
0200200020020020
0222222222222220
0000000000000000
................` ],
  [ cursor, bitmap`
777.........777.
7.............7.
7.............7.
................
................
................
................
................
................
................
................
................
7.............7.
7.............7.
777.........777.
................` ],
  [ hide, bitmap`
0000000000000000
2222222222222222
0002000200020002
0202020202020222
0002020202020022
0222020202020222
0222000202020002
2222222222222222
2222222222222222
0022000200020002
0202202202220222
0202202202220022
0202202202220222
0022000200020002
2222222222222222
0000000000000000` ],
  [ hideL, bitmap`
0000000000000000
0202222222222222
0002222200020002
0222222202020202
0222222202020002
0222222202020222
0222222200020222
0222222222222222
0222222222222222
0222222222222222
0222222222222222
0222222222222222
0222222222222222
0002222222222222
0202222222222222
0000000000000000` ],
  [ hideR, bitmap`
0000000000000000
2222222222222020
0002000222222000
0202202222222220
0202202222222220
0202202222222220
0202202222222220
2222222222222220
2222222222222220
2222222222222220
2222222222222220
2222222222222220
2222222222222220
2222222222222000
2222222222222020
0000000000000000` ],
  [ black1, bitmap`
000000000000000.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
022222000222220.
022222000222220.
022222000222220.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
000000000000000.
................` ],
  [ black2, bitmap`
000000000000000.
022222222222220.
022222222200020.
022222222200020.
022222222200020.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
020002222222220.
020002222222220.
020002222222220.
022222222222220.
000000000000000.
................` ],
  [ black3, bitmap`
000000000000000.
022222222222220.
022222222200020.
022222222200020.
022222222200020.
022222222222220.
022222000222220.
022222000222220.
022222000222220.
022222222222220.
020002222222220.
020002222222220.
020002222222220.
022222222222220.
000000000000000.
................` ],
  [ black4, bitmap`
000000000000000.
022222222222220.
020002222200020.
020002222200020.
020002222200020.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
022222222222220.
020002222200020.
020002222200020.
020002222200020.
022222222222220.
000000000000000.
................` ],
  [ black5, bitmap`
000000000000000.
022222222222220.
020002222200020.
020002222200020.
020002222200020.
022222222222220.
022222000222220.
022222000222220.
022222000222220.
022222222222220.
020002222200020.
020002222200020.
020002222200020.
022222222222220.
000000000000000.
................` ],
  [ black6, bitmap`
000000000000000.
022222222222220.
022000222000220.
022000222000220.
022000222000220.
022222222222220.
022000222000220.
022000222000220.
022000222000220.
022222222222220.
022000222000220.
022000222000220.
022000222000220.
022222222222220.
000000000000000.
................` ],
  [ rollsLeft, bitmap`
0000000000000000
0222222222222220
0200200020220220
0202202020220220
0202202020220220
0202202020220220
0202200020020020
0222222222222220
0202200200200020
0202202202220220
0202200200220220
0202202202220220
0200200202220220
0222222222222220
0002222222222000
0202222222222020` ],
  [ score0, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0222222222222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0002220000222000
0202222222222020
0000000000000000` ],
  [ score1, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222222222222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0222222222222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0002222222222000
0202222222222020
0000000000000000` ],
  [ score2, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0222220000222220
0222202222222220
0222202222222220
0222202222222220
0222202222222220
0002220000222000
0202222222222020
0000000000000000` ],
  [ score3, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0002220000222000
0202222222222020
0000000000000000` ],
  [ score4, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222222222222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0002222222222000
0202222222222020
0000000000000000` ],
  [ score5, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222202222222220
0222202222222220
0222202222222220
0222202222222220
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0002220000222000
0202222222222020
0000000000000000` ],
  [ score6, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222202222222220
0222202222222220
0222202222222220
0222202222222220
0222220000222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0002220000222000
0202222222222020
0000000000000000` ],
  [ score7, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0222222222222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0002222222222000
0202222222222020
0000000000000000` ],
  [ score8, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0222220000222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0002220000222000
0202222222222020
0000000000000000` ],
  [ score9, bitmap`
0000000000000000
0202222222222020
0002222222222000
0222220000222220
0222202222022220
0222202222022220
0222202222022220
0222202222022220
0222220000222220
0222222222022220
0222222222022220
0222222222022220
0222222222022220
0002220000222000
0202222222222020
0000000000000000` ],
  [ background, bitmap`
11111111L1111111
1111111111111L11
111L111111111111
1111111111111111
111111L11L11111L
L111111111111111
111111111111L111
1111111111111111
111111L111111111
11L1111111111111
1111111111111L11
1111111111L11111
1111L11111111111
1111111111111111
111111L111111111
L111111111111L11` ]
)

let level = 0
const levels = [
  map`
.hlz.
u..00
6..00
bqqqb`
]

setBackground(background)

setSolids([cursor, background])

setMap(levels[level])

addSprite(1, 3, cursor)

var rolls = 6
var die1
var die2
var die3
var playerScore = 0
var aiScore = 0
var roundOver = 0
var matchOver = 0

rollcount()
rollAll()

onInput("a", () => {
 if(matchOver == 0){
  getFirst(cursor).x -= 1
 }
})

onInput("d", () => {
 if(matchOver == 0){
  getFirst(cursor).x += 1
 }
})

onInput("l", () => {
 if(matchOver == 0){
  if(rolls>0){
    roll()
    rolls = rolls - 1
    rollcount()
    if(rolls == 0){
      rollcount()
      calculateScore()
      roundOver = 1
    }
  }
 }
})

onInput("k", () => {
 if(matchOver == 0 && roundOver == 0){
  rolls = 0
  rollcount()
  calculateScore()
  roundOver = 1
 }
})

onInput("j", () => {
 if(matchOver == 0){
  if(roundOver == 1){
    rolls = 6
    rollAll()
    rollcount()
    roundOver = 0
  }

  if(playerScore > 99){
    addSprite(2, 2, win)
    matchOver = 1
  }
  if(aiScore > 99){
    addSprite(2, 2, lose)
    matchOver = 1
  }
  if(playerScore > 99 && aiScore > 99){
    addSprite(2, 2, tie)
    matchOver = 1
  }
 }
})

onInput("i", () => {
  if(matchOver == 1){
    rolls = 6
    playerScore = 0
    aiScore = 0
    roundOver = 0
    matchOver = 0
    clearTile(2, 2)
    rollcount()
    rollAll()
    addSprite(4, 1, score0)
    addSprite(4, 2, score0)
  }
})

function random(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function roll() {
  var x = getFirst(cursor).x
  var rand = random(1, 6)

  clearTile(x, 3)
  if(rand == 1){
    addSprite(x, 3, black1)
    if(x == 1){
      die1 = 1
    } else if (x == 2){
      die2 = 1
    } else if (x == 3){
      die3 = 1
    }
  } else if(rand == 2){
    addSprite(x, 3, black2)
    if(x == 1){
      die1 = 2
    } else if (x == 2){
      die2 = 2
    } else if (x == 3){
      die3 = 2
    }
  } else if(rand == 3){
    addSprite(x, 3, black3)
    if(x == 1){
      die1 = 3
    } else if (x == 2){
      die2 = 3
    } else if (x == 3){
      die3 = 3
    }
  } else if(rand == 4){
    addSprite(x, 3, black4)
    if(x == 1){
      die1 = 4
    } else if (x == 2){
      die2 = 4
    } else if (x == 3){
      die3 = 4
    }
  } else if(rand == 5){
    addSprite(x, 3, black5)
    if(x == 1){
      die1 = 5
    } else if (x == 2){
      die2 = 5
    } else if (x == 3){
      die3 = 5
    }
  } else if(rand == 6){
    addSprite(x, 3, black6)
    if(x == 1){
      die1 = 6
    } else if (x == 2){
      die2 = 6
    } else if (x == 3){
      die3 = 6
    }
  }
  addSprite(x, 3, cursor)
}

function rollcount() {
  clearTile(0, 2)
  if(rolls == 6){
    addSprite(0, 2, score6)
  } else if (rolls == 5){
    addSprite(0, 2, score5)
  } else if (rolls == 4){
    addSprite(0, 2, score4)
  } else if (rolls == 3){
    addSprite(0, 2, score3)
  } else if (rolls == 2){
    addSprite(0, 2, score2)
  } else if (rolls == 1){
    addSprite(0, 2, score1)
  } else if (rolls == 0){
    addSprite(0, 2, score0)
  } 
}

function rollAll() {
  getFirst(cursor).x -= 1
  getFirst(cursor).x -= 1
  roll()
  getFirst(cursor).x += 1
  roll()
  getFirst(cursor).x += 1
  roll()
  getFirst(cursor).x -= 1
}

function updateScore(value, chord){
  clearTile(4, chord)
  clearTile(3, chord)
  var tens = Math.floor(value/10)
  var ones = value - (tens*10)
  if(ones == 0){
    addSprite(4, chord, score0)
  } else if(ones == 1){
    addSprite(4, chord, score1)
  } else if(ones == 2){
    addSprite(4, chord, score2)
  } else if(ones == 3){
    addSprite(4, chord, score3)
  } else if(ones == 4){
    addSprite(4, chord, score4)
  } else if(ones == 5){
    addSprite(4, chord, score5)
  } else if(ones == 6){
    addSprite(4, chord, score6)
  } else if(ones == 7){
    addSprite(4, chord, score7)
  } else if(ones == 8){
    addSprite(4, chord, score8)
  } else if(ones > 8){
    addSprite(4, chord, score9)
  }

  if(tens == 0){
    addSprite(3, chord, score0)
  } else if(tens == 1){
    addSprite(3, chord, score1)
  } else if(tens == 2){
    addSprite(3, chord, score2)
  } else if(tens == 3){
    addSprite(3, chord, score3)
  } else if(tens == 4){
    addSprite(3, chord, score4)
  } else if(tens == 5){
    addSprite(3, chord, score5)
  } else if(tens == 6){
    addSprite(3, chord, score6)
  } else if(tens == 7){
    addSprite(3, chord, score7)
  } else if(tens == 8){
    addSprite(3, chord, score8)
  } else if(tens > 8){
    addSprite(3, chord, score9)
  }
}

function calculateScore() {
  var tempScore = 0
  var tempScore2 = 0
  if(die1 == die2 || die1 == die3 || die2 == die3){
    tempScore = 1
  }
  if(die1 == die2 && die2 == die3){
    tempScore = 2
  }
  if(((die3-1) == die2) && ((die2 - 1) == die1)){
    tempScore = 4
  }

  var temp = random(1, 10)
  if(temp > 1){
   tempScore2 = 1
  }
  if(temp > 4){
    tempScore2 = 2
  }
  if(temp > 9){
    tempScore2 = 4
  }

  playerScore = playerScore + tempScore 
  aiScore = aiScore + tempScore2

  updateScore(aiScore, 1)
  updateScore(playerScore, 2)
}