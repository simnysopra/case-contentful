import { graphql } from "gatsby"
import "moment/locale/sv"
import React, { useEffect } from "react"
import { Mail, Twitter } from "react-feather"
import Card from "../components/card"
import Layout from "../components/layout"

export default function reporter({ data }) {
  useEffect(() => {
    console.log(data.contentfulReporter)
  }, [])

  return (
    <Layout>
      <div className="p-10">
        <div className="mb-10 p-8 rounded-xl bg-gray-100 border-2 shadow-xl dark:bg-gray-900 dark:border-gray-800">
          <div className="flex gap-6 items-center mb-6">
            <img
              className="w-[6.5rem] rounded-full"
              src={data.contentfulReporter.profilePicture.file.url}
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 text-gray-500 dark:text-gray-400">
                <Twitter />
                <Mail />
              </div>
              <h3 className="font-medium">{data.contentfulReporter.name}</h3>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {data.contentfulReporter.biografi.biografi}
          </p>
        </div>
        <h2 className="py-5">Artiklar</h2>
        <div className=" flex items-left flex-wrap gap-4">
          {data.contentfulReporter.article.map((article, i) => {
            return <Card key={i} size="medium" article={article} tag={false} />
          })}
        </div>
      </div>
    </Layout>
  )
}

//ArticleContent($slug: String!) the slug the path varible from gatsby-node createpages pageContext
export const query = graphql`
  query ReporterContent($slug: String!) {
    contentfulReporter(path: { eq: $slug }) {
      name
      path
      article {
        titel
        path
        omslagsBild {
          file {
            url
          }
        }
        firstPublished
      }
      biografi {
        biografi
      }
      profilePicture {
        file {
          url
        }
      }
    }
  }
`
