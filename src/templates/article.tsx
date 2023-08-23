import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Article({data}) {
  const options = {
    renderNode: {
      'embedded-asset-block': node => (
        <img
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.title || ''}
        />
      ),
    },
  };
  return <Layout>
    <h3>{data.contentfulArticle.titel}</h3>
    <div>{data.contentfulArticle.updatedAt}</div>
    <img src={data.contentfulArticle.omslagsBild.file.url} alt="articleImg" />
    <div>
                    {documentToReactComponents(JSON.parse(data.contentfulArticle.brodText.raw), options)}
                </div>
  </Layout>;
}

//ArticleContent($slug: String!) the slug the path varible from gatsby-node createpages pageContext
export const query = graphql`
  query ArticleContent($slug: String!) {
    contentfulArticle(path: { eq: $slug }) {
      titel
      brodText{
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
    }
  }
`;