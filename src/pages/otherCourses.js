import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout/mainLayout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import useIsMobile from "../hooks/useIsMobile"

export default function OtherCourses({ location }) {
  const data = useStaticQuery(graphql`
    query {
      oop: file(absolutePath: { regex: "/oop-course.jpeg/" }) {
        childImageSharp {
          fixed(width: 1200, height: 630, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      arch: file(absolutePath: { regex: "/architecture-course.png/" }) {
        childImageSharp {
          fixed(width: 1200, height: 630, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const isMobile = useIsMobile()
  const oopImage = data?.oop?.childImageSharp?.fixed
  const archImage = data?.arch?.childImageSharp?.fixed
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Talks" />
      <center>
        <h1>Other courses</h1>
        <div style={{ height: 20 }}></div>
        <p>Few online courses coordinated with others</p>
        <p>
          <Link to="https://www.skooldio.com/courses/oop-the-right-way">
            {isMobile ? (
              "Oop the right way"
            ) : (
              <Image
                style={{ borderRadius: 12, zIndex: -1 }}
                fixed={oopImage}
                alt="OOP"
                loading="eager"
              />
            )}
          </Link>
        </p>
        <p>
          <Link to="https://www.skooldio.com/courses/software-architecture-design">
            {isMobile ? (
              "Software Architecture Design"
            ) : (
              <Image
                style={{ borderRadius: 12 }}
                fixed={archImage}
                alt="OOP"
                loading="eager"
              />
            )}
          </Link>
        </p>
        <p>
          <Link to="https://www.skooldio.com/courses/tactical-domain-driven-design">
            {isMobile ? (
              "Tactical Domain Driven Design"
            ) : (
              <Image
                style={{ borderRadius: 12 }}
                fixed={archImage}
                alt="TDDD"
                loading="eager"
              />
            )}
          </Link>
        </p>
      </center>
    </Layout>
  )
}
