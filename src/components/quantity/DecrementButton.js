import React from 'react'

function DecrementButton(props) {
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    -
    </button>
  )
}

export default DecrementButton