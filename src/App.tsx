import React from "react"
import "./App.css"

import { CategorySelection } from "./components/CategorySelection"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghibli Films & People</h1>
        <CategorySelection />
      </header>
    </div>
  )
}

export default App
