import { Link } from "gatsby"
import React from "react"

function Nav() {
  return (
    <nav className="flex justify-between items-center p-6 px-8 mb-4 max-w-7xl mx-auto rounded-b-2xl shadow-lg">
      <Link to="/" className="font-bold text-gray-800 tracking-wide">
        🧢 CapNews
      </Link>
      <span className="text-gray-500 text-sm">
        AI Generated News for Your Pleasure
      </span>
    </nav>
  )
}

export default Nav
