import React from 'react'

const Child = ({greet}) => {
  return (
    <div>
      <button onClick={()=>greet("child")}>Click</button>
    </div>
  )
}

export default Child
