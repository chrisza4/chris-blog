import React from "react"
import SmallLabel from "./smallLabel"

const Article = ({ children }) => (
  <div
    style={{
      marginTop: 10,
    }}
  >
    {children}
  </div>
)
const PublishedDate = ({ children }) => (
  <SmallLabel style={{ marginLeft: 10 }}>{children}</SmallLabel>
)

export { Article, PublishedDate }
