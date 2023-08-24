import { Link } from "gatsby"
import React from "react"
import { Facebook, Twitter, Youtube } from "react-feather"

function Footer() {
  return (
    <footer className="flex justify-between items-center p-6 px-8 mt-10 max-w-7xl mx-auto rounded-t-2xl shadow-2xl">
      <Link to="/" className="font-bold text-gray-800 tracking-wide">
        🧢 CapNews
      </Link>
      <div className="flex gap-6 text-gray-500 hover:cursor-pointer">
        <Twitter />
        <Youtube />
        <Facebook />
      </div>
      <span className="text-gray-500 text-sm">
        Copyright © 2023 - All right reserved
      </span>
    </footer>
  )
}

export default Footer
