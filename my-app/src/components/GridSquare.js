import React from 'react'

function GridSquare({boardValue, selectSquare}) {
  return (
    <div className='gridItem' onClick={selectSquare}>{boardValue}</div>
  )
}

export default GridSquare