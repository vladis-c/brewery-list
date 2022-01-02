import React from "react"

import ShortInfoOfABrewery from "../components/ShortInfoOfABrewery"

function ShortInfo({ data, clearSearch }) {
  return <ShortInfoOfABrewery data={data} clearSearch={clearSearch} />
}

export default ShortInfo
