import React from "react"
import CategoryIcon from "./CategoryIcon"

type Props = {
  activeCategory: string
  category: string
  handleChangeCategory: any
}

const CategorySelector: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`flex flex-grow items-center gap-2 py-3 px-6 rounded-xl text-xs font-medium  hover:cursor-pointer ${
        props.activeCategory === props.category
          ? "bg-indigo-600 text-indigo-50 !important dark:bg-indigo-700 dark:text-gray-100"
          : "text-indigo-800 bg-indigo-100 dark:bg-gray-900 dark:text-gray-300"
      }`}
      onClick={() => props.handleChangeCategory(props.category)}
    >
      <CategoryIcon category={props.category} size={20} />
      <div
        className={`${
          props.activeCategory === props.category && "text-indigo-50"
        }`}
      >
        {props.category || "Alla"}
      </div>
    </div>
  )
}

export default CategorySelector
