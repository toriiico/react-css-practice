import React from "react"
import Typography from "@material-ui/core/Typography"

import CustomButton from "./components/CustomButton"
import ClassNames from "./components/ClassNames"
import logo from "./logo.svg"
import "./App.scss"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Typography className="ganbaruzoi">今日も１日がんばるぞい</Typography>
      <ClassNames />
      <CustomButton />
    </div>
  )
}

export default App
