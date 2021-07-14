import React, { useState, useEffect } from "react"
import axios from "axios"

function Movie(props) {
  const { id } = props // movie id

  // --------------------------- get movie from server ---------------------------

  const [movie, setMovie] = useState(null)

  async function fetchMovie() {
    const res = await axios.get(`/api/allmovies/${id}`)
    setMovie(res.data)
  }

  useEffect(() => fetchMovie(), [movie])

  let movieElement = null
  if (movie) {
    movieElement = (
      <div className="relative">
        <a href={movie.url}>
          <img src={movie.img} />
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
