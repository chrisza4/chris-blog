import React from "react"
import { Article, PublishedDate } from "./uikit/article"

const Talks = () => {
  return (
    <div>
      <h2>Talks</h2>
      <Article>
        <a href="https://www.youtube.com/watch?v=aH-HsqpcJp4">
          Lesson learned from years of building development team - CodeMania
          1001 [TH]
        </a>
      </Article>
      <Article>
        <a href="https://www.youtube.com/watch?v=olJYsGF-5oI">
          Microservies: Technical Solution to Management Problem
        </a>
      </Article>
    </div>
  )
}

export default Talks
