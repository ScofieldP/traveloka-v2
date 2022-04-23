import React from 'react'

function IncrementButton(props) {
    return (
        <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
        +
        </button>
      )
}

export default IncrementButton