import { Link } from "gatsby"
import React from "react"
import {Helmet} from 'react-helmet'
import {Sun, Moon} from "react-feather"


function Nav() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <>
    <Helmet>
    <html className={`${isDarkMode ? "dark" : ""}`}/>
  </Helmet>
  <nav className="flex justify-between items-center p-6 px-8 mb-4 max-w-7xl mx-auto rounded-b-2xl shadow-lg dark:bg-gray-600">
        <Link to="/" className="font-bold text-gray-800 tracking-wide dark:text-white">
          🧢 CapNews
        </Link>
        <div className="flex gap-2 items-center">
        {isDarkMode ? <Moon className="text-gray-300" onClick={() => setIsDarkMode(!isDarkMode)}/> : <Sun className="text-gray-500" onClick={() => setIsDarkMode(!isDarkMode)}/>}
        <span className="text-gray-500 text-sm dark:text-white">
          AI Generated News for Your Pleasure
        </span>
        </div>
      </nav>
    </>
  )
}

export default Nav
