import React from "react"
import ReactDOM from "react-dom"

import EvolveyeAvatar from "./EvolveyeAvatar.js"
import GithubRepos from "./GithubRepos.js"
import FavTechs from "./FavTechs.js"

import "./normalize.css"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <div className="fav_techs-wrapper">
      <h2>My favourite programming languages</h2>
      <FavTechs
        JavaScript="because is simple and is everywhere"
        Java="because is simple and employers require it"
        Rust="because is simple and fast"
      />
      <small  className="fav_techs-addition">
        Other propositions are not a problem,
        but they are not simple as technologies above,
        or they are not giving me much fun.
      </small>
    </div>
    <GithubRepos />
    <EvolveyeAvatar />
  </React.StrictMode>,
  document.getElementById( `content` )
)
