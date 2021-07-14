// ================================ this file for run server ================================

const express = require("express")
const axios = require("axios")
const movieRouter = require("./router/movie")
const PORT = process.env.PORT || 3001
const app = express()

app.use("/api/movies", movieRouter)

app.listen(PORT, () => console.log(`server start at PORT ${PORT}...`))
