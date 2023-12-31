import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import "moment/locale/sv"
import * as React from "react"
import CategoryList from "../components/CategoryList"
import ReporterInfo from "../components/ReporterInfo"
import Card from "../components/card"
import Layout from "../components/layout"

export default function Article({ data }) {
  const Text = ({ children }) => (
    <p className="leading-relaxed mt-2 mb-6 text-gray-600 dark:text-gray-400">
      {children}
    </p>
  )
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: () => (
        <img
          src={data.contentfulArticle.brodText.references[0].file.url}
          alt=""
          className="rounded-xl mb-6"
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  const relatedArticles = data.allContentfulArticle.nodes.filter(
    (article) =>
      article.kategori[0].titel == data.contentfulArticle.kategori[0].titel &&
      article.titel != data.contentfulArticle.titel
  )
  const limitRelatedArticles = relatedArticles.slice(
    Math.max(relatedArticles.length - 3, 0)
  )
  return (
    <Layout w="sm">
      <div className="flex flex-col gap-4">
        <CategoryList categories={data.contentfulArticle.kategori} />
        <h2>{data.contentfulArticle.titel}</h2>
        <ReporterInfo
          firstPublished={data.contentfulArticle.firstPublished}
          updatedAt={data.contentfulArticle.updatedAt}
          reporter={data.contentfulArticle.reporter}
        />

        <img
          src={data.contentfulArticle.omslagsBild.file.url}
          alt="articleImg"
          className="rounded-md mb-4"
        />
        <div className="mb-10">
          {documentToReactComponents(
            JSON.parse(data.contentfulArticle.brodText.raw),
            options
          )}
        </div>
        <h3 className="">Relaterade Nyheter</h3>
        <div className="flex flex-wrap gap-2">
          {limitRelatedArticles?.map((article, i) => {
            return <Card key={i} size="small" article={article} tag={false} />
          })}
        </div>
      </div>
    </Layout>
  )
}

//ArticleContent($slug: String!) the slug the path varible from gatsby-node createpages pageContext

export const query = graphql`
  query ArticleContent($slug: String!) {
    contentfulArticle(path: { eq: $slug }) {
      titel
      brodText {
        raw
        references {
          ... on ContentfulAsset {
            file {
              url
            }
          }
        }
      }
      kategori {
        titel
      }
      omslagsBild {
        file {
          url
        }
      }
      updatedAt
      firstPublished
      reporter {
        name
        path
        profilePicture {
          file {
            url
          }
        }
      }
    }

    allContentfulArticle {
      nodes {
        titel
        path
        firstPublished
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
