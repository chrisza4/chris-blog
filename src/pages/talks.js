import React from "react"
import Layout from "../components/layout/mainLayout"
import { graphql, Link, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import { StyledDiv } from "../components/tools/styled"

const TalksCard = StyledDiv({
  style: {
    border: "1px solid #E5E5E5",
    width: 500,
    height: 550,
    marginRight: 20,
    marginTop: 10,
  },
})

const TalkImage = ({ src }) => (
  <iframe
    width="500"
    height="400"
    src={src}
    title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
)

function embeddedLinkToYoutubeLink(embeddedLink) {
  // Only work for youtube.
  return embeddedLink.replace(
    "https://www.youtube.com/embed/",
    "https://www.youtube.com/watch?v="
  )
}

const Talk = ({ title, detail, embeddedLink }) => (
  <TalksCard>
    <TalkImage src={embeddedLink} />
    <Link
      style={{ color: "inherit", textDecoration: "none" }}
      to={embeddedLinkToYoutubeLink(embeddedLink)}
    >
      <div style={{ padding: 10, fontSize: 12 }}>
        <strong style={{ fontSize: 14 }}>{title}</strong>
        <p style={{ marginTop: 5 }}>{detail}</p>
      </div>
    </Link>
  </TalksCard>
)

const Talks = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My Talks" />
      <center>
        <h1>Talks</h1>
      </center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Talk
          title="[EN] Applying SOLID principle in JavaScript without Class and Object - Javascript Bangkok"
          detail="In order to understand the root of SOLID principle, I present a unique manifestation of the principle, the one without any object nor class"
          embeddedLink="https://www.youtube.com/embed/R3fv__odSbI"
        />
        <Talk
          title="[TH] Microservice: Technical Solution to Management Problem - Coda Mania"
          detail="Explain how we used Microservice to solved an engineering management issue"
          embeddedLink="https://www.youtube.com/embed/olJYsGF-5oI"
        />
        <Talk
          title="[TH] Lesson learned from years of building development team - Code Mania"
          detail="Sharing all lesson learned from building a software development team"
          embeddedLink="https://www.youtube.com/embed/aH-HsqpcJp4"
        />
        <Talk
          title="[TH] State Management in React Apps - React Bangkok 3.0.0"
          detail="Redux, MobX or Pure React? Explain how various types of applications fit can fit into each state management libraries. And why does it can feel overkill or inadequate when you choose the unfit one"
          embeddedLink="https://www.youtube.com/embed/qC-uad_ZBtA"
        />
        <Talk
          title="[TH] Testable React: Patterns and comparison - React Bangkok 2.0.0"
          detail="Share a code pattern that help React application to become more testable"
          embeddedLink="https://www.youtube.com/embed/Y4b9-oMSCyc"
        />
        <Talk
          title="[TH] Software Architect Meetup"
          detail="Host an software architect meetup and talked about how each programming paradigm offer different kind of code tracability"
          embeddedLink="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F168054637378916%2Fvideos%2F196516527866060%2F&show_text=false&width=500"
        />
      </div>
    </Layout>
  )
}

export default Talks
