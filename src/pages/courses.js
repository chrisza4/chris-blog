import React from "react"
import NavBar from "../components/layout/navBar"
import Image from "gatsby-image"
import SEO from "../components/seo"
import { StyledDiv } from "../components/tools/styled"

const CoursesCard = StyledDiv({
  style: {
    border: "1px solid #E5E5E5",
    width: 200,
    height: 250,
    marginRight: 20,
    marginTop: 10,
  },
})

const CourseImage = () => (
  <img
    style={{
      width: 200,
      height: 100,
      borderBottom: "#E5E5E5 solid 1px",
      objectFit: "contain",
    }}
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    alt="react"
  />
)

const Courses = () => {
  return (
    <div style={{}}>
      <NavBar />
      <SEO title="My Courses" />
      <div style={{ margin: "0px 100px", padding: "40px 20px" }}>
        <h1>Courses</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <CoursesCard>
            <CourseImage />
            <div style={{ padding: 10 }}>
              <strong>React Courses</strong>
              <p>สวัสดีครับ</p>
            </div>
          </CoursesCard>
          <CoursesCard>
            <CourseImage />
            <div style={{ padding: 10 }}>
              <strong>React Courses</strong>
              <p>สวัสดีครับ</p>
            </div>
          </CoursesCard>
          <CoursesCard>
            <CourseImage />
            <div style={{ padding: 10 }}>
              <strong>React Courses</strong>
              <p>สวัสดีครับ</p>
            </div>
          </CoursesCard>
          <CoursesCard>
            <CourseImage />
            <div style={{ padding: 10 }}>
              <strong>React Courses</strong>
              <p>สวัสดีครับ</p>
            </div>
          </CoursesCard>
          <CoursesCard>
            <CourseImage />
            <div style={{ padding: 10 }}>
              <strong>React Courses</strong>
              <p>สวัสดีครับ</p>
            </div>
          </CoursesCard>
          <CoursesCard>
            <CourseImage />
            <div style={{ padding: 10 }}>
              <strong>React Courses</strong>
              <p>สวัสดีครับ</p>
            </div>
          </CoursesCard>
        </div>
      </div>
    </div>
  )
}

export default Courses
