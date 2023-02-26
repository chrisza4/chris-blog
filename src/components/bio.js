/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const WhereIWorkSection = ({ children }) => (
  <div style={{ marginTop: 20 }}>{children}</div>
)

const AuthorSection = ({ children }) => (
  <div style={{ marginLeft: 50, display: "flex", flexDirection: "column" }}>
    {children}
  </div>
)

const AuthorNameSection = ({ children }) => (
  <h2 style={{ display: "block", marginTop: 0 }}>{children}</h2>
)

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/my-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 130, height: 130, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <AuthorSection
          style={{ marginLeft: 50, display: "flex", flexDirection: "column" }}
        >
          <div>
            <AuthorNameSection>Hi. I'm {author.name}.</AuthorNameSection>
          </div>
          <div>{author?.summary || null}</div>
          <WhereIWorkSection>
            I am currently working at{" "}
            <a href="https://www.thoughtworks.com/">ThoughtWorks</a>
          </WhereIWorkSection>
        </AuthorSection>
      )}
    </div>
  )
}

export default Bio
