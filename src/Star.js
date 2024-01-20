import React from 'react'

const Star = ({ selected, onClick }) => {
  return (
    <div>
      <span
      style={{ cursor: 'pointer', color: selected ? 'gold' : 'gray'}}
      onClick={onClick}
    >
      &#9733;
    </span>
    </div>
  )
}

export default Star
