import React, { useState } from "react"
import Movie from "../components/Movie"

const movies_id = [550, 557, 558, 559, 561, 562, 570, 572, 573, 547, 575, 700]

function Movies() {
  return (
    <>
      <h1 className="text-gray-200 text-2xl text-center font-bold m-6">
        All movies
      </h1>
      <div className="flex flex-wrap">
        {movies_id.map((i) => (
          <Movie id={i} key={i} />
        ))}
      </div>
    </>
  )
}

export default Movies
