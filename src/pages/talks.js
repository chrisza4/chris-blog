import React from "react"
import Layout from "../components/layout/mainLayout"
import { graphql, Link, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import { StyledDiv } from "../components/tools/styled"

const talkImageSize = {
  width: 500,
  height: 400,
}

const TalksCard = StyledDiv({
  style: {
    border: "1px solid #E5E5E5",
    width: 500,
    height: 550,
    marginTop: 10,
  },
})

const EmbeddedVideo = ({ src }) => (
  <iframe
    width={talkImageSize.width}
    height={talkImageSize.height}
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

const EmbeddedTalk = ({ title, detail, embeddedLink }) => (
  <Talk
    title={title}
    detail={detail}
    link={embeddedLinkToYoutubeLink(embeddedLink)}
  >
    <EmbeddedVideo src={embeddedLink} />
  </Talk>
)

const Talk = ({ title, detail, children, link }) => (
  <TalksCard>
    <Link
      target="_blank"
      style={{ color: "inherit", textDecoration: "none" }}
      to={link}
    >
      {children}
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
          gap: 20,
        }}
      >
        <EmbeddedTalk
          title="[EN] Objective and subjective quality of code and system"
          detail="Developer tends to believe that there are such things as objectively good code and system design. There are things such as best practices that can apply to every system regardless of context. This belief, while not completely false, is not completely true."
          embeddedLink="https://www.youtube.com/embed/TUL3ePI_tJY?si=ghXxlxcyIjhx1Qfi"
        />
        <Talk
          title="[EN] Leveraging Domain Driven Design to support Legacy Modernization"
          detail="Many developers learned about domain-driven design but struggle to implement in their project because, let's face it, majority of us is working on legacy code. In this talk, we will explore how to use Domain-driven design to help improve the existing codebase, even when the full practice cannot be adopted."
          link="https://www.thoughtworks.com/en-sg/about-us/events/tech-talks?wvideo=ilhupauhck"
        >
          <img
            src="https://embed-ssl.wistia.com/deliveries/f8177a3f9f1abe4ed6c0059c277fe637.jpg?wistia-ilhupauhck-1-ilhupauhck-video-thumbnail=1&amp;image_play_button_size=2x&amp;image_crop_resized=640x400&amp;image_play_button=1&amp;image_play_button_color=aaaaaae0"
            height={talkImageSize.height}
            width={talkImageSize.width}
            alt=""
          />
        </Talk>
        <EmbeddedTalk
          title="[TH] XConf - Evolutionary Testing in Evolutionary Architecture"
          detail="I gave a talk on how to design unit testing which is not tightly coupled to the class structure, to the point that architectural change is prevented by unit tests. This is a common mistake I found in many codebase and unit testing practitioners."
          embeddedLink="https://www.youtube.com/embed/l2WxQQzvSA4"
        />
        <EmbeddedTalk
          title="[EN] Applying SOLID principle in JavaScript without Class and Object - Javascript Bangkok"
          detail="In order to understand the root of SOLID principle, I present a unique manifestation of the principle, the one without any object nor class"
          embeddedLink="https://www.youtube.com/embed/R3fv__odSbI"
        />
        <EmbeddedTalk
          title="[TH] Microservice: Technical Solution to Management Problem - Coda Mania"
          detail="Explain how we used Microservice to solved an engineering management issue"
          embeddedLink="https://www.youtube.com/embed/olJYsGF-5oI"
        />
        <EmbeddedTalk
          title="[TH] Lesson learned from years of building development team - Code Mania"
          detail="Sharing all lesson learned from building a software development team"
          embeddedLink="https://www.youtube.com/embed/aH-HsqpcJp4"
        />
        <EmbeddedTalk
          title="[TH] State Management in React Apps - React Bangkok 3.0.0"
          detail="Redux, MobX or Pure React? Explain how various types of applications fit can fit into each state management libraries. And why does it can feel overkill or inadequate when you choose the unfit one"
          embeddedLink="https://www.youtube.com/embed/qC-uad_ZBtA"
        />
        <EmbeddedTalk
          title="[TH] Testable React: Patterns and comparison - React Bangkok 2.0.0"
          detail="Share a code pattern that help React application to become more testable"
          embeddedLink="https://www.youtube.com/embed/Y4b9-oMSCyc"
        />
        <EmbeddedTalk
          title="[TH] Software Architect Meetup"
          detail="Host an software architect meetup and talked about how each programming paradigm offer different kind of code tracability"
          embeddedLink="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F168054637378916%2Fvideos%2F196516527866060%2F&show_text=false&width=500"
        />
      </div>
    </Layout>
  )
}

export default Talks
