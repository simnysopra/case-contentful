
//https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulArticle {
        nodes {
          path
        }
      }
    }
  `)
  data.allContentfulArticle.nodes.forEach((node) => {
    const slug = node.path
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/article.tsx`),
      context: { slug: slug },
    })
  })
}
