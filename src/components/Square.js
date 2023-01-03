import React from "react"
// destructuring props, do not need to write props and can pass mulitple variables inside parameters with separation of a comma
const Square = ({ square }) => {
  // console.log(props)
  return (
    <>
      <div className="square">{square}</div>
    </>
  )
}
export default Square
