import React from "react"
import { BookOpen, Cpu, DollarSign, Film, Globe } from "react-feather"

function CategoryIcon({ category, size }) {
  let activeIcon

  switch (category) {
    case "Nöje":
      activeIcon = <Film size={size} />
      break
    case "Finans":
      activeIcon = <DollarSign size={size} />
      break
    case "Tech":
      activeIcon = <Cpu size={size} />
      break
    case "Nyheter":
      activeIcon = <Globe size={size} />
      break
    default:
      activeIcon = <BookOpen size={size} />
      break
  }

  return <>{activeIcon}</>
}

export default CategoryIcon
