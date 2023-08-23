import { Link, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import * as React from "react"
import Layout from "../components/layout"

export default function Homepage({ data }) {
  moment.locale("sv")

  console.log(data.contentfulHomepage)

  const content = data.contentfulHomepage.content.map((content, i) => {
    return (
      <div key={i} className="my-12">
        <div className="flex items-center mb-6 gap-4">
          <h2>{content.titel}</h2>
          {content.article && (
            <div className="px-3 py-1 rounded-md bg-indigo-500 text-white font-semibold text-sm">
              {content.article.length}
            </div>
          )}
        </div>
        <div className="flex gap-6">
          {content.article?.map((article, i) => {
            return (
              <div
                key={i}
                className="w-96 bg-gray-50 rounded-md drop-shadow flex flex-col"
              >
                <img
                  src={article.omslagsBild.file.url}
                  alt=""
                  className="rounded-t-md"
                />
                <div className="p-4 h-full flex flex-col gap-4">
                  <Link to={article.path} className="block">
                    {" "}
                    <h3 className="font-medium">{article.titel}</h3>
                  </Link>
                  <div className="text-gray-500 flex items-center justify-between text-sm mt-auto pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        className="rounded-full w-8"
                        src={article.reporter[0].profilePicture.file.url}
                      />
                      <div>{article.reporter[0].name}</div>
                    </div>
                    <div>{moment(article.updatedAt).calendar()}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
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
          }
        }
      }
    }
  }
`
