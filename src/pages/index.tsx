import { Link, graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import * as React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
export default function Homepage({ data }) {
  moment.locale("sv")

  console.log(data.allContentfulCategory)

  const content = data.allContentfulCategory.nodes.map((category, i) => {
    return (
      <div key={i} className="my-20">
        <div className="flex items-center mb-6 gap-4">
          <h2>{category.titel}</h2>
          <div className="px-3 py-1 rounded-md bg-indigo-500 text-white font-semibold text-sm">
            {category.article.length}
          </div>
        </div>

        <div className="flex gap-6 flex-wrap">
          {category.article.map((article, i) => {
            return (
              <Card key={i} size="large" article={article} tag={false}/>
            )
          })}
        </div>
      </div>
    )
  })

  return <Layout w={"lg"}>{content}</Layout>
}

export const query = graphql`
  {
    allContentfulCategory(sort: { createdAt: ASC }) {
      nodes {
        titel
        article {
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
        }
      }
    }
  }
`
