// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
// const path = require('path')
// const map = require('lodash/map')
// const replace = require('lodash/replace')
// // const forEach = require('lodash/forEach')
// const { createRemoteFileNode } = require('gatsby-source-filesystem')
// const data = require('./src/data/website.json')

// exports.onCreateNode = async ({
//   node,
//   actions,
//   store,
//   cache,
//   createNodeId,
// }) => {
//   const { createNode, createNodeField } = actions
//   if (node.internal.type === 'mongodbDb01Blog') {
//     const { cover, gallery } = node

//     let imageNode = await createRemoteFileNode({
//       url: cover,
//       cache,
//       store,
//       createNode,
//       createNodeId,
//       ext: '.jpg',
//     })

//     if (imageNode) {
//       await createNodeField({
//         node,
//         name: `localFile___NODE`,
//         value: imageNode.id,
//       })
//     }

//     await createNodeField({
//       node,
//       name: 'galleryLength',
//       value: gallery.length,
//     })

//     for (let i = 0; i < gallery.length; i += 1) {
//       imageNode = await createRemoteFileNode({
//         url: gallery[i],
//         cache,
//         store,
//         createNode,
//         createNodeId,
//         ext: '.jpg',
//       })

//       if (imageNode) {
//         await createNodeField({
//           node,
//           name: `gallery${i}___NODE`,
//           value: imageNode.id,
//         })
//       }
//     }

//     // console.log(node)
//   }
// }

// const fragment = `
// childImageSharp {
//   fluid(
//     maxWidth: 2400
//     quality: 80
//     srcSetBreakpoints: [
//       200
//       400
//       600
//       800
//       1000
//       1200
//       1600
//       2000
//       2400
//     ]
//   ) {
//     base64
//     tracedSVG
//     aspectRatio
//     src
//     srcSet
//     srcWebp
//     srcSetWebp
//     sizes
//     originalImg
//     originalName
//     presentationWidth
//     presentationHeight
//   }
// }
// `

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage, createNode, createNodeId, createNodeField } = actions
//   return new Promise((resolve, reject) => {
//     const blogPostTemplate = path.resolve(`src/templates/post.jsx`)
//     // Query for markdown nodes to use in creating pages.
//     resolve(
//       graphql(
//         `
//           query {
//             allMongodbDb01Blog(filter: {projectContext: {eq: "${
//               data.app.projectContext
//             }"}}) {
//               edges {
//                 node {
//                   id
//                   pageTitle
//                   pageContent
//                   createdAt
//                   fields {
//                     localFile {
//                       ${fragment}
//                     }
//                     gallery0 {
//                       ${fragment}
//                     }
//                     gallery1 {
//                       ${fragment}
//                     }
//                     gallery2 {
//                       ${fragment}
//                     }
//                     gallery3 {
//                       ${fragment}
//                     }
//                   }
//                 }
//               }
//             }
//             image1: file(relativePath: { eq: "srim.jpg" }) {
//               ${fragment}
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }
//         const { edges } = result.data.allMongodbDb01Blog
//         map(edges, async ({ node }) => {
//           const { id } = node
//           const url = replace(id, ' ', '-')

//           await createPage({
//             path: `/updates/${url}`, // required
//             component: blogPostTemplate,
//             context: {
//               ...node,
//               image1: result.data.image1,
//             },
//           })
//         })

//         return
//       })
//     )
//   })
// }
