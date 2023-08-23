import { Link, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import * as React from "react"
import Layout from "../components/layout"

export default function Homepage({ data }) {
  moment.locale("sv")

  const content = data.contentfulHomepage.content.map((content, i) => {
    return (
      <div key={i}>
        <h2>{content.titel}</h2>
        {content.article?.map((article, i) => {
          return (
            <div key={i}>
              <Link to={article.path}>
                {" "}
                <h4>{article.titel}</h4>
              </Link>
              <div>
                <div>
                  <img
                    src={
                      article.reporter[0].profilePicture.gatsbyImageData.images
                        .fallback.src
                    }
                  />
                  <div>{article.reporter[0].name}</div>
                </div>
                <div>{moment(article.updatedAt).calendar()}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  })

  return <Layout>{content}</Layout>
}

export const query = graphql`
  {
    contentfulHomepage(title: { eq: "Homepage" }) {
      content {
        ... on ContentfulCategory {
          titel
          article {
            path
            titel
            updatedAt
            reporter {
              name
              profilePicture {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
