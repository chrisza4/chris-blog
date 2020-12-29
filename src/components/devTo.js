import React from "react"
import dayJs from "../lib/dayJs"
import { useStaticQuery, graphql } from "gatsby"
import SmallLabel from "../components/uikit/smallLabel"

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
              <div
                style={{
                  display: "inline",
                  alignContent: "baseline",
                  alignItems: "baseline",
                }}
              >
                <a href={devToPost.canonical_url}>{devToPost.title}</a>
                <SmallLabel style={{ marginLeft: 10 }}>
                  {dayJs(devToPost.published_at).fromNow()}
                </SmallLabel>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DevTo
