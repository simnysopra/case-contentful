import React from "react"
import moment from "moment"
import { Link } from "gatsby"
import "moment/locale/sv"

type Props = {
  tag: boolean
  size: "small" | "medium" | "large"
  article: any
}

const card: React.FC<Props> = ({ tag, size, article }) => {
  switch (size) {
    case "small":
      return (
        <div className="w-52 bg-gray-50 rounded-md drop-shadow flex flex-col flex-grow xl:flex-grow-0">
          <img
            src={article.omslagsBild.file.url}
            alt=""
            className="rounded-t-md min-h-[150px] object-cover"
          />
          <div className="p-4 h-full flex flex-col gap-4">
            <Link to={`/${article.path}`} className="block cursor-pointer">
              <h5 className="font-medium hover:underline">{article.titel}</h5>
            </Link>
            <div className="text-gray-500 flex items-center justify-between text-sm mt-auto pt-2">
              <div>{moment(article.firstPublished).calendar()}</div>
            </div>
          </div>
        </div>
      )
    case "medium":
      return (
        <div className="w-80 bg-gray-50 rounded-md drop-shadow flex flex-col flex-grow xl:flex-grow-0">
          <img
            src={article.omslagsBild.file.url}
            alt=""
            className="rounded-t-md min-h-[200px] object-cover"
          />
          <div className="p-4 h-full flex flex-col gap-4">
            <Link to={`/${article.path}`} className="block cursor-pointer">
              <h3 className="font-medium hover:underline">{article.titel}</h3>
            </Link>
            <div className="text-gray-500 flex items-center justify-between text-sm mt-auto pt-2">
              <div>{moment(article.firstPublished).calendar()}</div>
            </div>
          </div>
        </div>
      )
    case "large":
      return (
        <div className="w-96 bg-gray-50 rounded-md drop-shadow flex flex-col flex-grow xl:flex-grow-0 dark:bg-gray-500 text-white">
          <img
            src={article.omslagsBild.file.url}
            alt=""
            className="rounded-t-md min-h-[200px] object-cover"
          />
          <div className="p-4 h-full flex flex-col gap-4">
          {tag && (
              <span className="w-min text-xs py-1 px-2 rounded-md bg-indigo-100 text-indigo-500">
                {article.kategori[0].titel}
              </span>
            )}
            <Link to={article.path} className="block">
              {" "}
              <h3 className="font-medium hover:underline">{article.titel}</h3>
            </Link>
            <div className="text-gray-500 flex items-center justify-between text-sm mt-auto pt-2 dark:text-white">
              <Link
                to={article.reporter[0].path}
                className="flex items-center gap-2"
              >
                <img
                  className="rounded-full w-8"
                  src={article.reporter[0].profilePicture.file.url}
                />
                <div>{article.reporter[0].name}</div>
              </Link>
              <div>{moment(article.firstPublished).calendar()}</div>
            </div>
          </div>
        </div>
      )
  }
}

export default card
