import React from "react"
import { Link } from "react-router-dom"
import "./ShortInfo.css"

function ShortInfoOfABrewery({ data }) {
  return (
    <div>
      {data.map((el, key) => (
        <div className="container" key={key}>
          <div className="card">
            <div className="box">
              <div className="content">
                Brewing Company
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
                <Link to={`/breweries/${el.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        </div>

        // <table className="card" key={key}>
        //   <tbody>
        //     <tr>
        //       <th>Name:</th>
        //       <td>{el.name}</td>
        //     </tr>
        //     <tr>
        //       <th>Brewery Type:</th>
        //       <td>{el.brewery_type}</td>
        //     </tr>
        //     <tr>
        //       <th>City:</th>
        //       <td>{el.city}</td>
        //     </tr>
        //   </tbody>
        //   <tfoot>
        //     <tr>
        //       <td>
        //         <Link className="button" to={`/breweries/${el.id}`}>View Details</Link>
        //       </td>
        //     </tr>
        //   </tfoot>
        // </table>
      ))}
    </div>
  )
}

export default ShortInfoOfABrewery
