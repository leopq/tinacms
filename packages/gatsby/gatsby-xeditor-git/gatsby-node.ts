import { router as gitRouter } from '@tinacms/api-git'

exports.onCreateNode = ({ node, actions }: any) => {
  let pathRoot = process.cwd()

  if (node.internal && node.internal.type === 'MarkdownRemark') {
    actions.createNodeField({
      node,
      name: 'fileRelativePath',
      value: node.fileAbsolutePath.replace(pathRoot, ''),
    })
    actions.createNodeField({
      node,
      name: 'rawFrontmatter',
      value: node.frontmatter,
    })
  }
}

exports.onCreateDevServer = ({ app }: { app: any }) => {
  app.use('/___tina', gitRouter())
}
