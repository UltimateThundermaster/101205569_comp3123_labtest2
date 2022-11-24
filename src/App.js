import { useEffect, useState } from "react"
import Card from "./components/Card"
function App() {
  const api_key = "5fbd6483814030ef3e0fdafe66b534c1"
  const [movies, setMovies] = useState([])
  const [input, setInput] = useState()
  const [movie, setMovie] = useState([])
  const [submit, setSubmit] = useState(false)
  const changeHandler = (e) => {
    setInput(e.target.value)
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    fetchMovie()
    setSubmit(true)
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      const data = await response.json()
      setMovies(data.results)
    }catch(err) {
      console.log(err)
    }
    
  }

  const fetchMovie = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${input}`)
      const data = await response.json()
      setMovie(data.results)
      console.log(data)
    }catch(err) {
      console.log(err)
    }
    
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App w-75 m-auto mt-5">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-10">
            <div className="form-group">
              <input type="text" id="search-movie" placeholder="Search Movie" onChange={changeHandler} className="form-control mb-3" />
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary w-100">search</button>
          </div>
          </div>
      </form>
      <div className="row">
        {submit ? <h2>Search: {input}</h2> : <h2>Popular movies</h2>}
        { submit ? movie.map(movie => {
          return <div className="col-4 mb-4">
            <Card movie={movie} />
            </div>
        }):  movies.map(movie => {
          return <div className="col-4 mb-4">
            <Card movie={movie} />
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
