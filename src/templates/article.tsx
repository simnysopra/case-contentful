import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default function Article({data}) {

  return <Layout>
    <h3>{data.contentfulArticle.titel}</h3>
    <div>{data.contentfulArticle.updatedAt}</div>
    <img src={data.contentfulArticle.omslagsBild.file.url} alt="articleImg" />
  </Layout>;
}

//ArticleContent($slug: String!) the slug the path varible from gatsby-node createpages pageContext
export const query = graphql`
  query ArticleContent($slug: String!) {
    contentfulArticle(path: { eq: $slug }) {
      titel
      kategori {
        titel
      }
      omslagsBild {
        file {
          url
        }
      }
      updatedAt
    }
  }
`;