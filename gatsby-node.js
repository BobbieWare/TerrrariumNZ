const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const terrariumComponent = path.resolve(`./src/components/pageTemplates/Terrarium.js`)
  const allTerrariums = await graphql(
      `
      {
        allContentfulTerrarium {
          edges {
            node {
              id
              terraNumber
            }
          }
        }
      }
    `
  )

  if (allTerrariums.errors) {
    throw allTerrariums.errors
  }

  const terrariums = allTerrariums.data.allContentfulTerrarium
  terrariums.edges.forEach((edge) => {

    console.log('adding page')
    console.log(edge.node.terraNumber)
    console.log(edge.node.id)
    createPage({
      path: '/terrarium/' + edge.node.terraNumber,
      component: terrariumComponent,
      context: {
        id: edge.node.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}