import React from 'react'

const Cell = (props) => {

  const cellStyle = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: gray,
  }

  return (
    <div style={cellStyle}>
    </div>
  )
}

export default Cell