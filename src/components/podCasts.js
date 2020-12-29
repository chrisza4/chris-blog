import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import dayJs from "dayjs"
import { Article, PublishedDate } from "./uikit/article"

const Podcasts = () => {
  const data = useStaticQuery(graphql`
    query PodcastQuery {
      allPodcastContentJson {
        nodes {
          title
          url
          id
          publishedDate
        }
      }
    }
  `)

  const podcasts = data.allPodcastContentJson.nodes

  return (
    <div>
      <h2>Podcasts</h2>
      <p>
        I host a podcast name Mindful Coder. It is about software engineering
        and management.
      </p>

      {podcasts.map(podcast => {
        return (
          <Article key={podcast.id}>
            <a href={podcast.url}>{podcast.title}</a>
            <PublishedDate>
              {dayJs(podcast.publishedDate).fromNow()}
            </PublishedDate>
          </Article>
        )
      })}
    </div>
  )
}

export default Podcasts
