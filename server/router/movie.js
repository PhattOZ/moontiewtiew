const express = require("express")
const axios = require("axios")
const router = express.Router()

router.get("/allmovies/:id", async (req, res) => {
  const { id } = req.params
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a37cb3a56d48c5debfd0631c19840bc5`
  )
  const data = {
    name: movie.data.original_title,
    url: movie.data.homepage,
    description: movie.data.overview,
    img: `https://image.tmdb.org/t/p/w500${movie.data.backdrop_path}`,
  }
  res.json(data)
})

module.exports = router
