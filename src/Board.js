import React from 'react'
import Knight from './Knight'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'

function renderSquare(i, knightPosition) {
  const x = i % 10
  const y = Math.floor(i / 10)
  return (
    <div key={i} style={{width: '10%', height: '10vh' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}



const Board = ({ knightPosition }) => {
  const squares = []
  for(let i = 0; i < 100; i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  console.log(knightPosition)

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap'
        }}  
      >
        {squares}
      </div>
    </DndProvider>
  )
}

export default Board




  // One that was working well
  
// import React from 'react'
// import Knight from './Knight'
// import { DndProvider } from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'
// import BoardSquare from './BoardSquare'

// function renderSquare(i, knightPosition) {
//   const x = i % 10
//   const y = Math.floor(i / 10)
//   return (
//     <div key={i} style={{width: '10vw', height: '10vh' }}>
//       <BoardSquare x={x} y={y}>
//         {renderPiece(x, y, knightPosition)}
//       </BoardSquare>
//     </div>
//   )
// }

// function renderPiece(x, y, [knightX, knightY]) {
//   if (x === knightX && y === knightY) {
//     return <Knight />
//   }
// }



// const Board = ({ knightPosition }) => {
//   const squares = []
//   for(let i = 0; i < 100; i++) {
//     squares.push(renderSquare(i, knightPosition))
//   }
//   console.log(squares, knightPosition)

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           flexWrap: 'wrap'
//         }}  
//       >
//         {squares}
//       </div>
//     </DndProvider>
//   )
// }

// export default Board


// -------------------------------------------------

// import React from 'react'
// import Square from './Square'
// import Knight from './Knight'
// import { DndProvider } from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'
// import { canMoveKnight, moveKnight } from './Game'
// import BoardSquare from './BoardSquare'

// function renderSquare(i, [knightX, knightY]){
//   const x = i % 8
//   const y = Math.floor( i / 8 )
//   const isKnightHere = x === knightX && y === knightY
//   const black = ( x + y ) % 2 === 1
//   const piece = isKnightHere ? <Knight /> : null

//   return (
//     <div onClick={() => handleSquareClick(x, y)}>
//       <div key={i} style={{ width: '12.5vw', height: '12.5vh' }}>
//         <Square black={black}>{piece}</Square>
//       </div>
//     </div>
//   )
// }

// function handleSquareClick(toX, toY) {
//   if (canMoveKnight(toX, toY)){
//     moveKnight(toX, toY)
//   }
// }

// const Board = ({ knightPosition }) => {
//   const squares = []
//   for(let i = 0; i < 64; i++) {
//     squares.push(renderSquare(i, knightPosition))
//   }

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div
//         style={{
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           flexWrap: 'wrap'
//         }}  
//       >
//         {squares}
//       </div>
//     </DndProvider>
//   )
// }

// export default Board