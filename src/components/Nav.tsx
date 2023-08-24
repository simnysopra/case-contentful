import { Link } from "gatsby"
import React from "react"
import { Moon, Sun } from "react-feather"
import { Helmet } from "react-helmet"

function Nav() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  return (
    <>
      <Helmet>
        <html className={`${isDarkMode ? "dark" : ""}`} />
      </Helmet>
      <nav className="flex justify-between items-center py-4 px-8 mb-4 max-w-7xl mx-auto rounded-b-2xl shadow-lg dark:bg-gray-950">
        <Link
          to="/"
          className="font-bold text-gray-800 tracking-wide dark:text-gray-100"
        >
          🧢 CapNews
        </Link>
        <div className="flex gap-10 items-center">
          <span className="text-gray-500 text-sm dark:text-gray-300">
            AI Generated News for Your Pleasure
          </span>
          {isDarkMode ? (
            <Moon
              size={38}
              className="text-gray-300 p-2 hover:cursor-pointer hover:bg-gray-800 rounded-full"
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          ) : (
            <Sun
              size={38}
              className="text-gray-500 p-2 hover:cursor-pointer hover:bg-gray-100 rounded-full"
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          )}
        </div>
      </nav>
    </>
  )
}

export default Nav
