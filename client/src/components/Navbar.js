import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex w-full h-24 bg-black items-center">
      <a href="/">
        <img
          className="ml-4 mr-8 w-36 h-20"
          src="/images/navbar/netflix-logo.png"
          alt="netflix logo"
        />
        {/* react start path with "/", default for this path is public floder */}
      </a>
      <NavLink
        className="text-gray-200 m-4"
        activeClassName="text-red-500 font-bold"
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-gray-200 m-4"
        activeClassName="text-red-500 font-bold"
        to="/all_movies"
      >
        Movies
      </NavLink>
      <NavLink
        className="text-gray-200 m-4"
        activeClassName="text-red-500 font-bold"
        to="/all_collection"
      >
        Collection
      </NavLink>
    </nav>
  )
}

export default Navbar
