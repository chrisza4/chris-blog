import React from "react"
import dayJs from "../lib/dayJs"
import { useStaticQuery, graphql } from "gatsby"
import { Article, PublishedDate } from "./uikit/article"

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
      <p>I wrote an engineering focus article here</p>
      {devToPosts.map(devToPost => {
        return (
          <Article>
            <a href={devToPost.canonical_url}>{devToPost.title}</a>
            <PublishedDate>
              {dayJs(devToPost.published_at).fromNow()}
            </PublishedDate>
          </Article>
        )
      })}
    </div>
  )
}

export default DevTo
