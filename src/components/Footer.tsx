import { Link } from "gatsby"
import React from "react"
import { Facebook, Twitter, Youtube } from "react-feather"

function Footer() {
  return (
    <footer className="w-full mt-auto flex justify-between items-center p-6 px-8 max-w-7xl mx-auto rounded-t-2xl shadow-2xl">
      <div className="flex flex-col">
        <Link to="/" className="font-bold text-gray-800 tracking-wide">
          🧢 CapNews
        </Link>
        <span className="text-gray-400 text-xs">
          Copyright © 2023 - All right reserved
        </span>
      </div>
      <div className="flex gap-6 text-gray-500 hover:cursor-pointer">
        <Twitter size={20} />
        <Youtube size={20} />
        <Facebook size={20} />
      </div>
    </footer>
  )
}

export default Footer
