import axios from "axios"
import { useState, useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Error from "./components/UI/Error"
import Search from "./components/UI/Search"
import DetailedInfo from "./pages/DetailedInfo"
import NotFound from "./pages/NotFound"
import ShortInfo from "./pages/ShortInfo"

function App() {
  const [fetchedData, setFetchedData] = useState([])
  const [error, setError] = useState(false)
  const [search, setSearch] = useState("")
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    axios
      .get("https://api.openbrewerydb.org/breweries")
      .then((res) => {
        const dataArray = res.data
        console.log(dataArray)
        setError(false)
        setFetchedData(dataArray)
      })
      .catch((err) => {
        if (err.res) {
          setError(true)
        } else if (err.request) {
          setError(true)
        } else {
          setError(true)
        }
        console.log(error)
      })
  }, [error])

  function handleSearch(event) {
    setSearch(event.target.value)
  }
  useEffect(
    (h) => {
      setSearchData(
        fetchedData.filter(
          (value) =>
            value.name?.toLowerCase().includes(search.toLowerCase()) ||
            value.postal_code
              ?.toString()
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            value.city?.toLowerCase().includes(search.toLowerCase()) ||
            value.brewery_type?.toLowerCase().includes(search.toLowerCase()) ||
            value.state?.toLowerCase().includes(search.toLowerCase()) ||
            value.country?.toLowerCase().includes(search.toLowerCase())
        )
      )
    },
    [fetchedData, search]
  )

  /* TODO: If page refreshed on any stage, then data is not fetched. Handle the error*/

  return (
    <div>
      {error && <Error />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/breweries" />
        </Route>
        <Route path="/breweries" exact>
          <ShortInfo data={searchData} />
          <Search onChange={handleSearch} value={search} />
          {searchData.length && !error === 0 ? (
            <label>Nothing is found</label>
          ) : (
            ""
          )}
        </Route>
        <Route path="/breweries/:breweryId">
          <DetailedInfo data={fetchedData} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
