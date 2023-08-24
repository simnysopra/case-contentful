import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { Link, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import * as React from "react"
import Layout from "../components/layout"

export default function Article({ data }) {
  const Text = ({ children }) => <p className="leading-relaxed">{children}</p>

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => (
        <img
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.title || ""}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }
  return (
    <Layout w="sm">
      <div className="p-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {data.contentfulArticle.kategori.map((kategori, i) => (
            <h3 key={i} className="uppercase tracking-wider font-medium text-gray-500">
              {kategori.titel}
            </h3>
          ))}
        </div>
        <h2>{data.contentfulArticle.titel}</h2>
        <div className="flex text-gray-500 flex-col gap-4">
          <Link
            to={`/${data.contentfulArticle.reporter[0].path}`}
            className="flex gap-4 items-center"
          >
            <img
              className="rounded-full w-8"
              src={data.contentfulArticle.reporter[0].profilePicture.file.url}
            />
            <p>{data.contentfulArticle.reporter[0].name}</p>
          </Link>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <p>Uppdaterad: {moment(data.contentfulArticle.updatedAt).calendar()} av</p>
              <Link to={`/${data.contentfulArticle.reporter[data.contentfulArticle.reporter.length -1].path}`}><img className="rounded-full w-8" src={data.contentfulArticle.reporter[data.contentfulArticle.reporter.length -1].profilePicture.file.url}/></Link>
            </div>
            <div>|</div>
            <div>
              Publicerad:{" "}
              {moment(data.contentfulArticle.firstPublished).calendar()}
            </div>
          </div>
        </div>
        <img
          src={data.contentfulArticle.omslagsBild.file.url}
          alt="articleImg"
          className="rounded-md mb-4"
        />
        <div>
          {documentToReactComponents(
            JSON.parse(data.contentfulArticle.brodText.raw),
            options
          )}
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
  }
`
