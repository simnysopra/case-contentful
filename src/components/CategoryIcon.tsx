import React from "react"
import { Cpu, DollarSign, Film, Globe, Layers } from "react-feather"

type Props = {
  category: string
  size: number
}

const CategoryIcon: React.FC<Props> = ({ category, size }) => {
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
      activeIcon = <Layers size={size} />
      break
  }

  return <>{activeIcon}</>
}

export default CategoryIcon
