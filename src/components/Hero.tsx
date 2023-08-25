import { Link } from "gatsby"
import React from "react"

type Props = {
  featuredArticle: any
  moment: any
}

const Hero: React.FC<Props> = ({ featuredArticle, moment }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(https:${featuredArticle.omslagsBild.file.url})`,
      }}
      className={`h-96 bg-cover bg-center rounded-xl`}
    >
      <div className="h-full w-full bg-gray-950/70 backdrop-blur-sm flex flex-col gap-4 justify-center p-10 rounded-xl">
        <span className="w-min text-xs py-1 px-2 rounded-md bg-indigo-200 text-indigo-600 dark:bg-indigo-500/50 dark:text-indigo-50">
          {featuredArticle.kategori[0].titel}
        </span>
        <Link to={featuredArticle.path}>
          <h2 className="text-white font-medium sm:w-2/3">
            {featuredArticle.titel}
          </h2>
        </Link>
        <div className="text-gray-300 flex gap-2 items-center text-sm pt-2">
          <Link
            to={featuredArticle.reporter[0].path}
            className="flex items-center gap-2"
          >
            <img
              className="rounded-full w-8"
              src={featuredArticle.reporter[0].profilePicture.file.url}
            />
            <div>{featuredArticle.reporter[0].name}</div>
          </Link>
          <div>•</div>
          <div>{moment(featuredArticle.firstPublished).calendar()}</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
