import * as React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

interface LayoutProps {
  children?: React.ReactNode
  w?: string
}

const Layout: React.FC<LayoutProps> = ({ w, children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div
        className={`mx-auto p-4 flex flex-col gap-10 ${
          w === "lg" ? "max-w-7xl" : "max-w-3xl"
        }`}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
