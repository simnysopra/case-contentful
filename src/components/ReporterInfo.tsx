import React from "react"
import { Link } from "gatsby"
import moment from "moment"

type Reporter = {
  path: string
  name: string
  profilePicture: {
    file: {
      url: string
    }
  }
}

type Props = {
  reporter: Reporter[]
  firstPublished: string
  updatedAt: string
}

const ReporterInfo: React.FC<Props> = ({
  reporter,
  firstPublished,
  updatedAt,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500 dark:text-gray-400 gap-4">
      <Link to={`/${reporter[0].path}`} className="flex gap-2 items-center">
        <img
          className="rounded-full w-8"
          src={reporter[0].profilePicture.file.url}
        />
        <p>{reporter[0].name}</p>
        <div>•</div>
        <p> {moment(firstPublished).calendar()}</p>
      </Link>
      <div className="flex gap-2 text-sm items-center">
        <p>Uppdaterad {moment(updatedAt).calendar()} av</p>
        <Link to={`/${reporter[reporter.length - 1].path}`}>
          <img
            className="rounded-full w-6"
            src={reporter[reporter.length - 1].profilePicture.file.url}
          />
        </Link>
      </div>
    </div>
  )
}

export default ReporterInfo
