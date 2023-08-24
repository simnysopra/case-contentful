import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
import Layout from "../components/layout"
import Card from "../components/card"

export default function reporter({ data }) {
  useEffect(() => {
    console.log(data.contentfulReporter.article)
  }, [])

  return (
    <Layout>
      <div className="p-10">
        <div className="p-4 border-2 border-gray-200 rounded-md">
          <div className="flex gap-6 items-center">
            <img
              className="w-[6.5rem] rounded-full"
              src={data.contentfulReporter.profilePicture.file.url}
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter-filled text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail-filled text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h3>{data.contentfulReporter.name}</h3>
            </div>
          </div>
          <div className="w-[620px] dark:text-white">
            {data.contentfulReporter.biografi.biografi}
          </div>
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
