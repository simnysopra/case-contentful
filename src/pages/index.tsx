import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function Homepage({ data }) {

  const content = data.contentfulHomepage.content.map((content, i) => {
      return (
        <div key={i}>
          <h2>{content.titel}</h2>
          {content.article?.map((article, i) => {
            return (
              <div key={i}>
                <Link to={article.path}> <h4>{article.titel}</h4></Link>
                <div>{article.updatedAt}</div>
              </div>
            );
          })}
        </div>
      )
  });

  return <Layout>{content}</Layout>;
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
          }
        }
      }
    }
  }
`;
