/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const map = require('lodash/map')
const replace = require('lodash/replace')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/post.jsx`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            allMongodbMonolithPosts {
              edges {
                node {
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const { edges } = result.data.allMongodbMonolithPosts
        map(edges, ({ node }) => {
          const { title } = node
          const url = replace(title, ' ', '-')
          console.log(`/blog/${url}`)
          createPage({
            path: `/blog/${url}`, // required
            component: blogPostTemplate,
            context: {
              dummy: 'hello world',
            },
          })
        })

        return
      })
    )
  })
}
