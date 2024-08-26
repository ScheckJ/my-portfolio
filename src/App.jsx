import React from "react"
import SideNav from "./components/SideNav"
import Main from "./components/Main"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {

  return (
      <div>
        <SideNav />
        <Main />
        <Projects />
        <Work />
        <Contact />
      </div>
   
  )
}

export default App
