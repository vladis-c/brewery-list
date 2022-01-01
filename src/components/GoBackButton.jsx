import React from "react"

function GoBackButton({ onClick }) {
  return (
    <div>
      <button className="button" onClick={onClick}>GO BACK</button>
    </div>
  )
}

export default GoBackButton
