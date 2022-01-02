import axios from "axios"
import { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
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
      })
  }, [error])

  function handleSearch(event) {
    setSearch(event.target.value)
  }
  useEffect(() => {
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
  }, [fetchedData, search])

  function clearSearch() {
    if (search !== "") {
      setSearch("")
      setSearchData([])
    }
  }

  return (
    <div>
      {error && <Error />}
      <Switch>        
        <Route path="/" exact>
          <ShortInfo data={searchData} clearSearch={clearSearch} />
          <Search onChange={handleSearch} value={search} />
          {!error && searchData.length === 0 ? (
            <label>Nothing is found</label>
          ) : (
            ""
          )}
        </Route>
        <Route path="/:breweryId">
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
