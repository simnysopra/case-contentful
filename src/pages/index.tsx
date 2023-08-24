import { Link, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import * as React from "react"
import { Search } from "react-feather"
import Layout from "../components/layout"
import Card from "../components/card"
export default function Homepage({ data }) {
  const [query, setQuery] = React.useState("")
  const [searchActive, setSearchActive] = React.useState(false)
  moment.locale("sv")

  const handleChange = (e) => setQuery(e.target.value)

  React.useEffect(() => {
    setSearchActive(query ? true : false)
  }, [query])

  const featuredArticle = data.contentfulHomepage.featuredArticle
  const articles = data.allContentfulArticle.nodes
  console.log(featuredArticle)

  const content = data.allContentfulCategory.nodes.map((category, i) => {
    return (
      <div key={i} className="">
        <h2 className="mb-6">{category.titel}</h2>

        <div className="flex gap-6 flex-wrap">
          {articles
            .filter((article) => article.kategori[0].titel === category.titel)
            .map((article, i) => {
              return (
                <Card size="large" article={article} tag={false} />
              )
            })}
        </div>
      </div>
    )
  })

  const hero = (
    <div
      style={{
        backgroundImage: `url(https:${featuredArticle.omslagsBild.file.url})`,
      }}
      className={`h-96 bg-cover bg-center rounded-xl`}
    >
      <div className="h-full w-full bg-gray-950/70 backdrop-blur-sm flex flex-col gap-4 justify-center p-10 rounded-xl">
        <span className="w-min text-xs py-1 px-2 rounded-md bg-indigo-200 text-indigo-600">
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

  const searchResults = (
    <div className="">
      <h2 className="mb-6">Sökresultat</h2>

      <div className="flex gap-6 flex-wrap">
        {articles
          .filter((article) =>
            article.titel.toLowerCase().includes(query.toLowerCase())
          )
          .map((article, i) => {
            return (
              <Card key={i} size="large" article={article} tag={true}/>
            )
          })}
      </div>
    </div>
  )

  return (
    <Layout w={"lg"}>
      {hero}
      <div className="mb-2 relative">
        <input
          type="text"
          placeholder="Sök på artiklar"
          className="w-full text-sm border py-3 px-4 rounded-xl focus:outline-none focus:ring-2 ring-indigo-400"
          value={query}
          onChange={handleChange}
        />
        <div className="absolute top-0 right-0 mr-6 mt-3">
          <Search color="gray" size={20} />
        </div>
      </div>
      {!searchActive ? content : searchResults}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulArticle(sort: { firstPublished: DESC }) {
      nodes {
        titel
        firstPublished
        path
        reporter {
          name
          path
          profilePicture {
            file {
              url
            }
          }
        }
        omslagsBild {
          file {
            url
          }
        }
        kategori {
          titel
        }
      }
    }
    allContentfulCategory(sort: { createdAt: ASC }) {
      nodes {
        titel
      }
    }
    contentfulHomepage(title: { eq: "Home" }) {
      featuredArticle {
        titel
        firstPublished
        path
        reporter {
          name
          path
          profilePicture {
            file {
              url
            }
          }
        }
        omslagsBild {
          file {
            url
          }
        }
        kategori {
          titel
        }
      }
    }
  }
`

// {
//   allContentfulCategory(
//     sort: { createdAt: ASC }
//   ) {
//     nodes {
//       titel
//       article {
//         titel
//         firstPublished
//         path
//         reporter {
//           name
//           path
//           profilePicture {
//             file {
//               url
//             }
//           }
//         }
//         omslagsBild {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// }
