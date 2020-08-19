// export function observe(receive){
//   const randPos = () => Math.floor(Math.random() * 8)
//   setInterval(() => receive([randPos(), randPos()]), 500)
// }

// let kingPosition = [4,6]
let knightPosition = [0, 0]
let observer = null

function emitChange() {
  observer(knightPosition)
}


export function observe(o) { 
  observer = o
  emitChange()
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}




export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y
  
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
  }


let flowerPosition = [0, 0]
let flowerObserver = null
function emitChangeFlower() {
  flowerObserver(flowerPosition)
}


export function flowerObserve(o) { 
  flowerObserver = o
  emitChangeFlower()
}

export function moveFlower(toX, toY) {
  flowerPosition = [toX, toY]
  emitChangeFlower()
}


export function canMoveFlower(toX, toY) {
  const [x, y] = flowerPosition
  const dx = toX - x
  const dy = toY - y
  
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
  }
// let knightPosition = [0, 0]
// let observer = null

// function emitChange() {
//   observer(knightPosition)
// }


// export function observe(o) { 
//   observer = o
//   emitChange()
// }

// export function moveKnight(toX, toY) {
//   knightPosition = [toX, toY]
//   emitChange()
// }




// export function canMoveKnight(toX, toY) {
//   const [x, y] = knightPosition
//   const dx = toX - x
//   const dy = toY - y
  
//   return (
//     (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//     (Math.abs(dx) === 1 && Math.abs(dy) === 2)
//     )
//   }


// let flowerPosition = [0, 0]
// let flowerObserver = null
// function emitChangeFlower() {
//   flowerObserver(flowerPosition)
// }


// export function flowerObserve(o) { 
//   flowerObserver = o
//   emitChangeFlower()
// }

// export function moveFlower(toX, toY) {
//   flowerPosition = [toX, toY]
//   emitChangeFlower()
// }


// export function canMoveFlower(toX, toY) {
//   const [x, y] = flowerPosition
//   const dx = toX - x
//   const dy = toY - y
  
//   return (
//     (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//     (Math.abs(dx) === 1 && Math.abs(dy) === 2)
//     )
//   }