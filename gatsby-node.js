const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// To be refactor out of this file: Logic about markdown

function isBlogContent(markdown) {
  return markdown.fields.contentType === "blog"
}

function isCourseContent(markdown) {
  return markdown.fields.contentType === "course"
}

function getMarkdownContentType(markdownNode) {
  const regExpForCourseFolder = /.*\/courses\/.+/
  return regExpForCourseFolder.test(markdownNode.fileAbsolutePath)
    ? "course"
    : "blog"
}

// === End ===

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const course = path.resolve("./src/components/course/course.js")

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
          nodes {
            id
            fields {
              slug
              contentType
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const allMarkdowns = result.data.allMarkdownRemark.nodes
  const coursesMarkdown = allMarkdowns.filter(markdown =>
    isCourseContent(markdown)
  )
  const blogsMarkdown = allMarkdowns.filter(markdown => isBlogContent(markdown))

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (blogsMarkdown.length > 0) {
    blogsMarkdown.forEach((markdown, index) => {
      const previousPostId = index === 0 ? null : blogsMarkdown[index - 1].id
      const nextPostId =
        index === blogsMarkdown.length - 1 ? null : blogsMarkdown[index + 1].id

      createPage({
        path: markdown.fields.slug,
        component: blogPost,
        context: {
          id: markdown.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  if (coursesMarkdown.length > 0) {
    coursesMarkdown.forEach(markdown => {
      createPage({
        path: markdown.fields.slug,
        component: course,
        context: {
          id: markdown.id,
          previousPostId: null,
          nextPostId: null,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    // Check if it's a blog or course
    createNodeField({
      name: "contentType",
      node,
      value: getMarkdownContentType(node),
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
