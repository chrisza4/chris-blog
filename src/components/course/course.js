import React from "react"
import { graphql } from "gatsby"

import * as styles from "./course.module.css"
import Layout from "../layout/mainLayout"
import SEO from "../seo"

const Course = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className={styles.coursePage}>
          <div className={styles.bigImage}>
            <div className={styles.container}>
              <h1 className={styles.heading}>{post.frontmatter.title}</h1>
              <h2 className={styles.subheading}>
                {post.frontmatter.description}
              </h2>
              <a
                href="https://humanarch.fly.dev/registrations/register"
                target="_blank"
                rel="noreferrer"
                className={styles.ctaButton}
              >
                <span className={styles.buttonLabel}>สมัครเลย</span>
              </a>
            </div>
          </div>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </Layout>
    </>
  )
}

export default Course

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
