import React from "react"
import dayJs from "../lib/dayJs"
import { useStaticQuery, graphql } from "gatsby"
import SmallLabel from "../components/uikit/smallLabel"

const DevToPost = ({ children }) => (
  <div
    style={{
      display: "inline",
    }}
  >
    {children}
  </div>
)

const PublishedDate = ({ children }) => (
  <SmallLabel style={{ marginLeft: 10 }}>{children}</SmallLabel>
)

const DevTo = () => {
  const data = useStaticQuery(graphql`
    query DevToQuery {
      allDevtoContentJson {
        nodes {
          title
          canonical_url
          id
          published_at
        }
      }
    }
  `)

  const devToPosts = data.allDevtoContentJson.nodes

  return (
    <div>
      <h2>Blogs in dev.to</h2>
      <ul>
        {devToPosts.map(devToPost => {
          return (
            <li key={devToPost.id}>
              <DevToPost>
                <a href={devToPost.canonical_url}>{devToPost.title}</a>
                <PublishedDate>
                  {dayJs(devToPost.published_at).fromNow()}
                </PublishedDate>
              </DevToPost>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DevTo
