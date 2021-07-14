import React, { useState, useEffect } from "react"
import axios from "axios"

function Movie(props) {
  const { id } = props // movie id

  // --------------------------- get movie from server ---------------------------

  async function fetchMovie() {
    const res = await axios.get(`/api/movies/allmovies/${id}`)
    setMovie(res.data)
  }
  const [movie, setMovie] = useState(null)

  useEffect(() => fetchMovie(), [])

  // --------------------------- end of get movie from server ---------------------------

  let movieElement = null
  if (movie) {
    movieElement = (
      <div className="relative">
        <a href={movie.url}>
          <img src={movie.img} alt="movie cover" />
        </a>
        <a
          className="text-gray-50 bg-gray-900 p-2 rounded-full absolute left-0 bottom-0"
          href={movie.url}
        >
          {movie.name}
        </a>
      </div>
    )
  }

  return <div className="w-1/5 m-0.5">{movieElement}</div>
}

export default Movie
