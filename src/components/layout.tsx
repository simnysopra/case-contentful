import { Link } from "gatsby"
import * as React from "react"

interface LayoutProps {
  children?: React.ReactNode
  w?: string
}

const Layout: React.FC<LayoutProps> = ({ w, children }) => {
  return (
    <>
      <nav className="flex justify-between items-center p-6 px-8 max-w-7xl mx-auto rounded-b-2xl shadow-lg">
        <Link to="/" className="font-bold text-gray-800 tracking-wide">
          🧢 CapNews
        </Link>
        <span className="text-gray-500 text-sm">
          AI Generated News for Your Pleasure
        </span>
      </nav>
      <div className={`mx-auto p-4 ${w === "lg" ? "max-w-7xl" : "max-w-3xl"}`}>
        {children}
      </div>
    </>
  )
}

export default Layout
