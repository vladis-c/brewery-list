import React from "react"
import { Link } from "react-router-dom"
import "./ShortInfo.css"

function ShortInfoOfABrewery({ data, clearSearch }) {
  return (
    <div>
      {data.map((el, key) => (
        <div className="container" key={key}>
          <div className="card">
            <div className="box">
              <div className="content">
                <h4>Brewing Company's</h4>
                <h4>Name:</h4>
                <h3>{el.name}</h3>
                <h4>Location:</h4>
                <h3>
                  {el.city}
                  {el.state && ", "}
                  {el.state}
                </h3>
                <h4>Brewery Type:</h4>
                <p>{el.brewery_type}</p>
                <Link to={`/breweries/${el.id}`} onClick={clearSearch}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShortInfoOfABrewery
