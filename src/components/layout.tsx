import * as React from "react"

interface LayoutProps {
  children?: React.ReactNode
  w?: string
}

const Layout: React.FC<LayoutProps> = ({ w, children }) => {
  return (
    <div className={`mx-auto p-4 ${w === "lg" ? "max-w-7xl" : "max-w-3xl"}`}>
      {children}
    </div>
  )
}

export default Layout
