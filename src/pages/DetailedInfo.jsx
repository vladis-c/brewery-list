import React from "react"
import { useParams, useHistory } from "react-router-dom"
import DetailsOfABrewery from "../components/DetailsOfABrewery"

function DetailedInfo({ data }) {
  const history = useHistory()

  function goBackButtonHandler() {
    history.push("/")
  }

  const params = useParams()
  const brewery = data.find((brewery) => brewery.id === params.breweryId)

  return (
    <div>
      <DetailsOfABrewery brewery={brewery} onClick={goBackButtonHandler} />
    </div>
  )
}

export default DetailedInfo
