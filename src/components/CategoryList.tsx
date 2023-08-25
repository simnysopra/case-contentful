import React from 'react'

type Category = {
    titel: string;
  };

type Props = {
    categories: Category[];
}

const CategoryList: React.FC<Props> = ({categories}) => {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((kategori, i) => (
        <h3
          key={i}
          className="uppercase tracking-widest font-normal text-gray-500 dark:text-gray-500"
        >
          {kategori.titel}
        </h3>
      ))}
    </div>  )
}

export default CategoryList;