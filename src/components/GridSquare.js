import React from 'react'

function GridSquare({boardValue, selectSquare}) {
  return (
    <div className='gridItem' data-testid="gridSquareTest"  onClick={selectSquare}>{boardValue}</div>
  )
}

export default GridSquare