import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default function Page(props) {
  const { page } = props.data

  console.log(page);
  
  return (
    <Layout>
   
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      titel
    }
  }
`
