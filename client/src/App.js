import React from "react"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all_movies" component={Movies} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
}

export default App
