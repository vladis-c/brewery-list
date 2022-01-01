import React from "react"
import "./Search.css"

function Search({ onChange, value }) {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </header>
  )
}

export default Search
