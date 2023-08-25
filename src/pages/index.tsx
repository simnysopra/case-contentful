import { graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import * as React from "react"
import { Search } from "react-feather"
import CategorySelector from "../components/CategorySelector"
import Hero from "../components/Hero"
import Card from "../components/card"
import Layout from "../components/layout"

export default function Homepage({ data }) {
  const [query, setQuery] = React.useState("")
  const [activeCategory, setActiveCategory] = React.useState("")
  const [searchActive, setSearchActive] = React.useState(false)
  moment.locale("sv")

  const handleChange = (e) => {
    setActiveCategory("")
    setQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchActive(false)
    setQuery("")
  }

  const handleChangeCategory = (category) => {
    clearSearch()
    setActiveCategory(category)
  }

  React.useEffect(() => {
    setSearchActive(query ? true : false)
  }, [query])

  const articles = data.allContentfulArticle.nodes
  const categories = data.allContentfulCategory.nodes
  let filteredArticles

  const allArticles = categories.map((category, i) => {
    return (
      <div key={i}>
        <h2 className="mb-6">{category.titel}</h2>

        <div className="flex gap-6 flex-wrap">
          {articles
            .filter((article) => article.kategori[0].titel === category.titel)
            .map((article, i) => {
              return <Card key={i} size="large" article={article} tag={false} />
            })}
        </div>
      </div>
    )
  })

  const articlesByCategory = (
    <div>
      <h2 className="mb-6">{activeCategory}</h2>

      <div className="flex gap-6 flex-wrap">
        {articles
          .filter((article) => article.kategori[0].titel === activeCategory)
          .map((article, i) => {
            return <Card key={i} size="large" article={article} tag={false} />
          })}
      </div>
    </div>
  )

  const searchedArticles = (
    <div>
      <h2 className="mb-6">Sökresultat</h2>

      <div className="flex gap-6 flex-wrap">
        {
          (filteredArticles = articles
            .filter((article) =>
              article.titel.toLowerCase().includes(query.toLowerCase())
            )
            .map((article, i) => {
              return <Card key={i} size="large" article={article} tag={true} />
            }))
        }
        {filteredArticles.length === 0 && (
          <p className="text-gray-700 dark:text-gray-300">
            Inga artiklar hittades. Prova att söka igen!
          </p>
        )}
      </div>
    </div>
  )

  return (
    <Layout w={"lg"}>
      <Hero
        featuredArticle={data.contentfulHomepage.featuredArticle}
        moment={moment}
      />

      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Sök på artiklar"
          className="w-full text-sm border py-3 px-4 rounded-xl focus:outline-none focus:ring-2 ring-indigo-400 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-900"
          value={query}
          onChange={handleChange}
        />
        <div className="absolute top-0 right-0 mr-6 mt-3 text-gray-500 dark:text-gray-400">
          <Search size={20} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center sm:gap-6">
        <CategorySelector
          category=""
          activeCategory={activeCategory}
          handleChangeCategory={handleChangeCategory}
        />
        {categories.map((category, i) => (
          <CategorySelector
            key={i}
            category={category.titel}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        ))}
      </div>

      {activeCategory && articlesByCategory}
      {searchActive && searchedArticles}
      {!activeCategory && !searchActive && allArticles}
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
