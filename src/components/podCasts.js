import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PodCastPost = ({ children }) => (
  <div
    style={{
      display: "inline",
    }}
  >
    {children}
  </div>
)

const Podcasts = () => {
  const data = useStaticQuery(graphql`
    query PodcastQuery {
      allPodcastContentJson {
        nodes {
          title
          url
          id
        }
      }
    }
  `)

  const podcasts = data.allPodcastContentJson.nodes

  return (
    <div>
      <h2>Podcasts</h2>
      <ul>
        {podcasts.map(podcast => {
          return (
            <li key={podcast.id}>
              <PodCastPost>
                <a href={podcast.url}>{podcast.title}</a>
              </PodCastPost>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Podcasts
