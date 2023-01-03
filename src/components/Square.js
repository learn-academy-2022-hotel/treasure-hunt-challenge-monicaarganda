import React from "react"
// destructuring props, do not need to write props and can pass mulitple variables inside parameters with separation of a comma
const Square = ({ square, index, handleGamePlay }) => {
  // console.log(props)

  const handleClick = () => {
    handleGamePlay (index)
  }
  
  return (
    <>
      <div className="square" onClick={handleClick}>{square}</div>
    </>
  )
}
export default Square

//step one:
// Making the code more dyamic because the array is in app.js we need the alert to be called on in app.js because thats where the logic is. 
// const handleClick = () => {
//   alert (index)
// }