import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function Homepage({data}) {
console.log(data);


  return (
    <Layout>
 
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulHomepage {
      title
      contentful_id
      description {
        description
      }
      content {
        ... on ContentfulArticle {
          titel
          contentful_id
          updatedAt
          createdAt
        }
      }
    }
  }
`
