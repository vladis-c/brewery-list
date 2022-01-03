import React from "react"
import GoBackButton from "./UI/GoBackButton"
import "./DetailsOfABrewery.css"

function DetailsOfABrewery({ brewery, onClick }) {
  return (
    <React.Fragment>
      <header className="header"><p>{brewery.name}</p></header>
      <div className="container1">
        <div className="card1">
          <div className="box1">
            <div className="content1">
              <table>
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{brewery.name}</td>
                  </tr>
                  <tr>
                    <th>Brewery Type:</th>
                    <td>{brewery.brewery_type}</td>
                  </tr>
                  <tr>
                    <th>Country:</th>
                    <td>{brewery.country}</td>
                  </tr>
                  <tr>
                    <th>Country Province:</th>
                    <td>{brewery.country_province}</td>
                  </tr>
                  <tr>
                    <th>State:</th>
                    <td>{brewery.state}</td>
                  </tr>
                  <tr>
                    <th>City:</th>
                    <td>{brewery.city}</td>
                  </tr>
                  <tr>
                    <th>Address:</th>
                    <td>{brewery.street}</td>
                  </tr>

                  <tr>
                    <th>Address 2:</th>
                    <td>{brewery.address_2}</td>
                  </tr>
                  <tr>
                    <th>Address 3:</th>
                    <td>{brewery.address_3}</td>
                  </tr>
                  <tr>
                    <th>Postal Code:</th>
                    <td>{brewery.postal_code}</td>
                  </tr>
                </tbody>
              </table>
              <GoBackButton type="button" onClick={onClick}>
                GO BACK
              </GoBackButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DetailsOfABrewery
