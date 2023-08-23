import * as React from "react";
import { graphql } from "gatsby"
import moment from "moment"
import "moment/locale/sv"
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
    <div className="p-10 flex flex-col gap-4">
    {data.contentfulArticle.kategori.map(kategori => (
      <h3 className="">{kategori.titel}</h3>
    ))}
    <h2 className="">{data.contentfulArticle.titel}</h2>
    <div className="flex text-gray-500 flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-8" src={data.contentfulArticle.reporter[0].profilePicture.file.url}/>
          <p>{data.contentfulArticle.reporter[0].name}</p>
        </div>
    <div className="flex gap-2 items-center">
      <div>Uppdaterad {moment(data.contentfulArticle.updatedAt).calendar()}</div>
      <div>|</div>
      <div>Publicerad {moment(data.contentfulArticle.firstPublished).calendar()}</div>
      </div>
      
    </div>
    <img src={data.contentfulArticle.omslagsBild.file.url} alt="articleImg" />
    <div>
                    {documentToReactComponents(JSON.parse(data.contentfulArticle.brodText.raw), options)}
                </div>
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
      firstPublished
      reporter {
        name
        profilePicture {
          file {
            url
          }
        }
      }
    }
  }
`;