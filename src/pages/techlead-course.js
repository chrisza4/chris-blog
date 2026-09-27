import React from "react"

import * as styles from "../components/course/course.module.css"
import Layout from "../components/layout/mainLayout"
import SEO from "../components/seo"
import titleImage from "../components/course/title-image.png"

import review1 from "../../content/assets/reviews/tl2.png"
import review2 from "../../content/assets/reviews/tl3.png"
import review3 from "../../content/assets/reviews/tl1.png"

const programId = 3

const motivationPosts = [
  {
    label: "โพสต์แรงจูงใจ 1",
    url:
      "https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid02HKynyrnBreevimf59FguEkcLhHi7WpEXcjzXEZiydFBZ1cqZA7yoh4dnsLqyVCANl?__cft__[0]=AZXJBg2fM__ttaqEbQ695gW9dxDr3OBreoe5OqhDWPtAkUwYb4JkUW1JGp51n5SPd9WYKX3WKyoaiP0CIIU1PXjVsxi0JVGlatbFDIukhCT7gMJleTm479ur5mLEmiXp7FYPnqn_HBpugOnRmTwkHAB7&__tn__=%2CO%2CP-R",
  },
  {
    label: "โพสต์แรงจูงใจ 2",
    url:
      "https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid05trg4UvpEASP1pLdrqnzCGdCyuG8fVZ8ifeRHXA7KJWhAkoqckGwwkP6Do759Gyel?__cft__[0]=AZV3uBJtPxQV-7zjqRO75EzPNKUDUaXvATFCJJVsMNGKUNMvWqrcSThzNta_C8lD-yuNVS78FEtfb_5-Xa-JaGYj6khTPtK437O7YEbpdMpRyuoXmoxu6GuzZoV187HLYQpgIiP3RzDxStGRqsIRboru&__tn__=%2CO%2CP-R",
  },
  {
    label: "โพสต์แรงจูงใจ 3",
    url:
      "https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid02gTBwCpgPAUW2BPwYTZ5zZ7ZZj2pYifbDyq1RqkPwmjnvKkiR3B5LAn2cFZahFBBWl?__cft__[0]=AZXMaufYcV7t9lzonr_X3CLgNceldFceDOWRiV_EyFrw8ec_U7F_BXHwm4ImE91z_bnLUgTQWl3CIduPlP4zO2Lkyqw0cO1GQSR3e0xfQ4wPnoikl4kXNujmLmbJwGvdU9Y&__tn__=%2CO%2CP-R",
  },
]

const recommendProfiles = [
  "คนที่ทำงานในวงการ IT และต้องทำงานในตำแหน่งผู้นำ",
  "Tech lead มือใหม่ที่พึ่งถูกโปรโมตมาให้ทำ ไปจนถึงมือกลางที่มีประสบการณ์บ้างเล็กน้อย 1-3 ปี",
  "เคยมีประสบการณ์การคุมทีมหรือเป็นผู้นำบ้าง หรือกำลังทำอยู่",
]

const reviews = [
  {
    image: review1,
    url: "https://www.facebook.com/share/p/1Bco1bgFwY/",
  },
  {
    image: review2,
    url: "https://www.facebook.com/share/p/1GzkW9L3ai/",
  },
  {
    image: review3,
    url: "https://www.facebook.com/share/p/1CsjtvVnLp/",
  },
]

const moreReviews = [
  { label: "Round 3", url: "https://www.facebook.com/share/p/15ttqL3G5t/" },
  { label: "Round 4", url: "https://www.facebook.com/share/p/16gkKnyJUC/" },
  { label: "Round 5", url: "https://www.facebook.com/share/p/1DkoMdtfKn/" },
]

const feedbacks = [
  "ขอเป็นกำลังใจให้ทำคอร์สดี ๆ แบบนี้ต่อไป ชอบที่สอนแบบใช้จริง ๆ ไม่อิงตำรา มีจิตวิทยาและความเป็นมนุษย์ในนั้น หาคอร์สแบบนั้นได้ยาก",
  "ขอบคุณมากค่ะ คาดหวังเนื้อหาที่ได้จากการตกผลึกมาแล้วก็ได้ตามนั้นจริงๆ คิดว่าเนื้อหาเรียบเรียงมาเป็นระเบียบดีค่ะ มีจุดที่แสดงให้เห็น dynamic ว่าทีมไม่ได้อยู่กับที่ แล้วเวลาเอามาเข้า model ต่างๆ มันเมคเซ้น ไม่ใช้ทฤษฎีเปล่าๆ ที่พอจะเอาไปเข้า context แล้วจะแปลกๆ ชอบที่เน้นย้ำว่าจุดประสงค์แต่ละ workshop ต้องการออะไร ทำให้โฟกัสถูกจุด ได้ผลลัพธ์ดี",
]

export default function TechLeadCoursePage({ location }) {
  return (
    <Layout location={location} title="Tech Leadership Course">
      <SEO
        title="Tech leadership: Building culture 101"
        description="เข้าใจพื้นฐานของการออกแบบและสร้าง Culture ในทีม ไม่ว่าจะชอบ Culture แบบไหนก็ตาม"
      />
      <div className={styles.coursePage}>
        <div
          className={styles.bigImage}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${titleImage})`,
          }}
        >
          <div className={styles.container}>
            <h1 className={styles.heading}>
              Tech leadership: Building culture 101
            </h1>
            <h2 className={styles.subheading}>
              เข้าใจพื้นฐานของการออกแบบและสร้าง Culture ในทีม ไม่ว่าจะชอบ
              Culture แบบไหนก็ตาม
            </h2>
            <a
              href={`https://humanarch.fly.dev/registrations/program/${programId}`}
              target="_blank"
              rel="noreferrer"
              className={styles.ctaButton}
            >
              <span className={styles.buttonLabel}>สมัครเลย</span>
            </a>
          </div>
        </div>

        <section>
          <h2>Summarized</h2>
          <p>
            คอร์ส Tech leadership นี้เป็นคอร์สที่สอนเรื่องพื้นฐานในการสร้าง
            Culture สำหรับทีมที่อยู่ในวงการ Tech และ IT โดยจะเน้นเรื่องการสร้าง
            &quot;ทีม&quot; ที่เป็นทีม และการสร้าง Culture ภายในทีม
          </p>
          <p>
            คอร์สนี้จะเน้นเรื่องพื้นฐานตั้งแต่ต้นเลยว่า เรามีทีมไปทำไม
            ทีมแตกต่างอย่างไรกับคนรวมกลุ่มกันทำงาน แล้วเรามี Culture ไปทำไม
            แค่ทำงานให้เสร็จๆ ไปเป็นโปรเจ๊กต์ๆ ไม่ได้เหรอ
            ซึ่งพอเข้าใจพื้นฐานตรงนี้
            จะได้มาคุยต่อว่าเราจะสร้างวัฒนธรรมการทำงานในทีมที่เหมาะสมกับสถานการณ์ได้อย่างไรบ้าง
            เราจะบริหารจัดการวัฒนธรรมการทำงานอย่างไร
            และสุดท้ายไปจนถึงการจัดการบริหารคน การจัดการ Roles &amp;
            Resonsibility ไปจนถึง Performance management จังหวะใช้พระเดชพระคุณ
          </p>
          <p>
            คอร์สนี้สร้างขึ้นจากประสบการณ์ส่วนตัวของผู้สอน ที่ได้ร่วมทีมและสร้าง
            Culture หลายรูปแบบมาแล้ว ตั้งแต่ทีมที่เน้นการมีส่วนร่วมของทุกคน
            เน้นการ Empower คนทำงานให้มีความคิดสร้างสรรค์ ทีมที่ Move fast break
            things ทีมที่เน้นความถูกต้องแม่นยำไม่ผิดพลาด
            และก็มีทีมที่เน้นการตัดสินใจที่เด็ดขาดรวดเร็ว ทีมที่เน้น Face to
            face communication และทีมที่เน้น Async communication
            จนพอจะจับทางได้จากประสบการณ์ว่าสิ่งสำคัญในการเซ็ต Culture
            ภายในทีมมีอะไรบ้าง ไม่ว่าจะอยากได้ Culture แบบไหน ดังนั้น
            คอร์สนี้จะไม่ได้เป็นคอร์สที่สอนว่า Culture
            ที่ดีต้องเป็นแบบใดแบบหนึ่ง แต่จะสอนตั้งแต่การออกแบบ Culture
            ที่เหมาะสมกับตัวคุณเอง ตัวทีม และตัวงาน ไปจนการสร้างและดูแลรับ
          </p>
          <ul>
            {motivationPosts.map(post => (
              <li key={post.url}>
                <a href={post.url} target="_blank" rel="noreferrer">
                  {post.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>เหมาะสำหรับใคร</h2>
          <ul>
            {recommendProfiles.map(profile => (
              <li key={profile}>{profile}</li>
            ))}
          </ul>
          <p>
            คอร์สนี้ตัวอย่างที่ใช้ Case Study อาจจะเน้นไปในทาง Developer
            เป็นหลัก แต่ตัวเนื้อหาสามารถปรับใช้ได้กับทุกตำแหน่งในวงการ IT ครับ
          </p>
        </section>

        <section>
          <h2>เนื้อหา</h2>

          <div>
            <h3>Day 1: Designing your &quot;team&quot;</h3>
            <p>ออกแบบทีมและเข้าใจพื้นฐานของ Culture ในการทำงาน</p>
            <ul>
              <li>
                <strong>Define your team:</strong> ทีมของคุณเป็นอย่างไร
                และการนิยามทีมขึ้นมาต้องพิจารณาอะไรบ้าง
              </li>
              <li>
                <strong>Write your culture book:</strong> สร้าง Culture book
                ที่ไม่ได้เป็นแค่สโลแกนสวยๆ แต่มีประโยชน์ต่อการใช้งานจริง
              </li>
              <li>
                <strong>Team lead role &amp; Team maturity model:</strong>{" "}
                เข้าใจบทบาทของผู้นำ และระดับความสามารถของทีม
              </li>
            </ul>
          </div>

          <div>
            <h3>Day 2: Practical guide</h3>
            <p>
              การเคลื่อนไหวและ Action พื้นฐานที่ใช้ในการดูแลและทำงานร่วมกันทีม
            </p>
          </div>
        </section>

        <section>
          <h2>เวลาเรียน</h2>
          <p>
            <strong>รอบที่ 7: วันที่ 17-18 ตุลาคม เวลา 9.00-17.00</strong>
          </p>
          <p>
            สถานที่:{" "}
            <a
              href="https://maps.app.goo.gl/owLr4YMri4Faghry6"
              target="_blank"
              rel="noreferrer"
            >
              Abloom Exclusive Serviced Apartments
            </a>{" "}
            ใกล้บริเวณ BTS สนามเป้า
          </p>
          <p>รับผู้เรียนทั้งหมดจำนวน 22 คน</p>
          <p>ราคา: 10,000 บาท</p>
        </section>

        <section>
          <h2>Some review &amp; Testimonial</h2>
          <div className={styles.reviewGallery}>
            {reviews.map((review, i) => (
              <a
                key={review.url}
                href={review.url}
                target="_blank"
                rel="noreferrer"
                className={styles.reviewImageLink}
              >
                <img
                  src={review.image}
                  alt={`Review ${i + 1}`}
                  className={styles.reviewImage}
                />
              </a>
            ))}
          </div>
          <p>
            More reviews:{" "}
            {moreReviews.map((review, i) => (
              <React.Fragment key={review.url}>
                {i > 0 && " · "}
                <a href={review.url} target="_blank" rel="noreferrer">
                  {review.label}
                </a>
              </React.Fragment>
            ))}
          </p>
          <h3>จาก Feedback นักเรียน</h3>
          {feedbacks.map(feedback => (
            <blockquote key={feedback}>&quot;{feedback}&quot;</blockquote>
          ))}
        </section>
      </div>
    </Layout>
  )
}
