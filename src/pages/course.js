import React from "react"

import * as styles from "../components/course/course.module.css"
import Layout from "../components/layout/mainLayout"
import SEO from "../components/seo"
import titleImage from "../components/course/title-image.png"

const programId = 2

const reviews = [
  {
    label: "Review#1",
    url:
      "https://www.facebook.com/kanin.kearpimy56/posts/pfbid0SK6i7N5w459WDy9xcp2mjtuUGqYJ8kjqCSfeT8wjbknsVhJZtpXdZEhWJQkM8KYBl?__cft__[0]=AZX_VxKVkYUmMMjm8AHrZrYJWlxF_Hogm53otdXqyysW3NMV0Hq9772Ta8tWHvkb6ADsWunyUbRhoqLO2XiQFeyw0vQ_FZjmEFh8I1qRGNeh5saf1zDgQo7L9q1Snrf-mII&__tn__=%2CO%2CP-R",
  },
  {
    label: "Review#2",
    url:
      "https://www.facebook.com/Sikiryl/posts/pfbid09vXxBLsaXPTasVg4yQ3FyNQh89iRUbtDBoDV7b2QhbHgzPo5Y6mipH8Xcpj6uJUql",
  },
  {
    label: "Review#3",
    url:
      "https://www.facebook.com/ratixoxo/posts/pfbid02QLs6E9jWYgWUyeU44TN5eqc2V2cPR5aqt9BAm2Pu4fYmPa5iMiZGNggR6fUu7sAbl",
  },
  {
    label: "Review#4",
    url:
      "https://medium.com/@thikonwachiraarunwong/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81-humanistic-architecture-89f73a334ff3?fbclid=IwAR2Li7ciRMztwqsvmu_C1Ut81mzS_SlXAgqLH30IZMFCzmMZiLA_Uo7cR_g",
  },
  {
    label: "Review#5",
    url: "https://knowlats.dev/posts/review-course-humanistic-software-architecture",
  },
  {
    label: "Review#6",
    url:
      "https://sarunyhot.medium.com/%E0%B8%9A%E0%B8%B1%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-humanistic-architecture-5a47b0b488e5",
    note: "อันนี้ละเอียดมาก",
  },
  {
    label: "Review#7",
    url:
      "https://naiwaen.debuggingsoft.com/2023/03/%e0%b8%9a%e0%b8%b1%e0%b8%99%e0%b8%97%e0%b8%b6%e0%b8%81-humanistic-software-architecture/?fbclid=IwAR1OdnaqfoM7rbtB7WtTJZpTZTmrJgIvnfgYrdyaYnQLuiPKhPm_EDZnT34",
  },
  {
    label: "Review#8",
    url:
      "https://www.facebook.com/natechawin.suthison/posts/pfbid02KFuwPWHooJS4fm3T1A8ZPGgXH4y1eUqgtow2dSmBAamVKMiqnZKgYVNQaupz9ctxl",
  },
  {
    label: "Review#9",
    url: "https://www.facebook.com/share/p/1DKr5J4ycU/",
  },
  {
    label: "Review#10",
    url: "https://www.facebook.com/share/p/1DeFg9SSms/",
  },
  {
    label: "คำโปรยแรก",
    url:
      "https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid02UETwFp5SptBqWr14EXpVn5yGGsrXQrgFhZr2QhpKH8Bo9us35W8u1NSsy6QwGEkxl?__cft__[0]=AZXS11dgQsmKjc-UOjjJxMAZP9u8LVLqACCAKD2WJlcwNH00-jzor8QJl8abLWObMtQa5GdjxwmMi7MrsTrp_cvuaMnCRLmGuOz4HEpZbUVc3VJKmxq0ZEe3ceJt9z0q_uI&__tn__=%2CO%2CP-R",
  },
  {
    label: "Teaser",
    url:
      "https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid02XWvnJVyVk5AXMB9yQ9vfKUNZdRGahUCxYa2uNuyPRp1zGoAZM1gFidFBX3Mj8Ccql",
  },
  {
    label: "คำโปรยสอง",
    url:
      "https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid0nEWpLYF3URBMAUWStpwPL92KvKxMiyL9ZzPv2g1Be14K6uqJxRDhzRX4Ybxj9bVal",
  },
]

const recommendProfiles = [
  "เคยทำงานมาแล้วอย่างน้อย 2 ปี มีประสบการณ์ในการทำงาน",
  "เคยจับ Framework, Architecture มากว่า 1 แบบขึ้นไป",
  "มีประสบการณ์ที่ต้องร่วมตัดสินใจเลือกรูปแบบการทำงานหรือ Architecture, Framework, Library ให้ทีม",
  "คอร์สจะ Assume ความรู้พื้นฐานเหล่านี้ Dependency Injection, IoC container, Unit testing, Object oriented Programming, Functional programming, MVC Architecture, Event and Observer Pattern อย่างน้อยพอรู้ว่ามันคืออะไรนิดๆ หน่อยๆ ไม่ต้องสันทัดมากก็ได้",
]

export default function CoursePage({ location }) {
  return (
    <Layout location={location} title="Humanistic Architecture">
      <SEO
        title="Humanistic Architecture"
        description="เข้าใจศาสตร์ความเป็นมนุษย์ในงานออกแบบ Software Architecture"
      />
      <div className={styles.coursePage}>
        <div
          className={styles.bigImage}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${titleImage})`,
          }}
        >
          <div className={styles.container}>
            <h1 className={styles.heading}>Humanistic Architecture</h1>
            <h2 className={styles.subheading}>
              เข้าใจศาสตร์ความเป็นมนุษย์ในงานออกแบบ Software Architecture
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
            คอร์ส the art of humanistic architecture design
            ที่จะสอนเรื่องการออกแบบ software architecture
            โดยใช้ศาสตร์ความเป็นมนุษย์เข้ามาเสริม
            เพื่อให้งานออกแบบที่ได้ตอบโจทย์ได้ดีขึ้น
            เนื้อหาจะแบ่งเป็นสองส่วนหลัก
            ช่วงแรกเราจะเรียนการเข้าใจจิตวิทยาเบื้องต้นผ่านการทำงานกับตัวเอง
            และจึงเริ่มการนำมาประยุกต์ใช้ในการตัดสินใจทางเทคนิค
          </p>
          <p>
            การตัดสินใจทางเทคนิคหลายๆ
            ครั้งมีเรื่องของมนุษย์เข้ามาเกี่ยวข้องเกินไปกว่าปัญหาทางเทคนิค เช่น
            การเลือกภาษาที่ช่วยให้ทีมทำงานง่าย แล้วคำว่าง่ายคืออะไร มาจากไหน
            การเลือก Protocol การสื่อสารระหว่าง REST, Rpc, SOAP, JSON
            ทั้งหมดนี้ตอบโจทย์ทางเทคนิคได้หมด
            แต่ก็มีบางอันที่มนุษย์ที่ทำงานด้วยมองว่าอันนึงซับซ้อนยาก
            อีกอันสะดวกรวดเร็วดี และก็มีคนไม่เห็นด้วย แรงขับพวกนี้มาจากไหน
            เราจะมาเข้าใจพื้นฐานกันเพื่อนำมาใช้เป็นสมการในการเลือกและตัดสินใจ
          </p>
          <p>
            คอร์สนี้สร้างจากประสบการณ์ผมเองที่ synthesize
            ศาสตร์จิตวิทยาความเป็นมนุษย์ (humanistic psychology) อย่าง Satir,
            enneagram และ Programming เพื่อให้ออกแบบ เขียนโค้ด
            และสื่อสารกับเพื่อนร่วมทีมและเพื่อนร่วมงานทั้งหลายอย่างเข้าอกเข้าใจ
            ทำให้มีโอกาสสร้างระบบที่ตรงความปรารถนา (Yearning)
            ของเจ้าของโจทย์ได้มากกว่าเดิม
            ไม่ว่าเจ้าของโจทย์นั้นจะเป็นตัวเราเองหรือคนอื่นก็ตาม
          </p>
          <p>
            (สำหรับคนที่ติดตามผู้สอนมาซักพัก คอร์สนี้จะเปิดเผยว่าเนื้อหา Talk
            ต่างๆ ที่ผมเคยพูด งานสอนอื่นๆ ที่ผมทำมาจากพื้นฐานเบื้องลึกอย่างไร
            ทำไมหลายๆ อาจจะมองว่าผมพูดเข้าใจง่าย มาจากเลนส์มุมมองอย่างไรกันแน่
            แล้วจะเข้าใจทั้งฐานคิดและวิธีสื่อสารเพื่อนำปรับไปใช้กับทีมของคุณได้)
          </p>
        </section>

        <section>
          <h2>เหมาะสำหรับใคร</h2>
          <p>
            คอร์สนี้เหมาะสำหรับคนที่มีประสบการณ์การทำงานมาระดับนึง
            และอยู่ในจุดที่รับโจทย์มาแล้วต้องเลือก Solution
            ที่ดีที่สุดจากความเป็นไปได้หลายรูปแบบ ไม่ว่าจะเป็นการเลือกภาษา
            เลือกเฟรมเวิร์ค เลือก Coding Standard หรือเลือก Collaboration Scheme
            ในระดับองค์กร และเราต้องการ &quot;ออกแบบ&quot;
            สิ่งที่เหมาะที่สุดสำหรับบริบทนั้น
          </p>
          <p>
            คอร์สนี้เหมาะมากเป็นพิเศษกับคนที่ต้องตัดสินใจเรื่อง Architecture
            ให้คนอื่น ไม่ว่าชื่อตำแหน่งคุณจะเป็น Senior, Lead, Principal, Staff,
            Architect, VP, CTO ถ้างานของคุณประกอบไปด้วยการที่ต้องตัดสินใจออกแบบ
            Architecture ให้เพื่อนร่วมงานใช้ คอร์สนี้จะเหมาะกับคุณมาก
            เราจะเจาะปัญหาพวกนี้เป็นหลัก
          </p>
          <p>
            คอร์สนี้ไม่เหมาะกับโปรแกรมเมอร์ที่ต้องการหา Solution
            ท่าอะไรซักท่ามาตอบโจทย์ของลูกค้าให้ได้
            คอร์สจะไม่ค่อยได้เจาะเรื่องนั้น เราจะเรียนกันในสถานการณ์ที่การหา
            Solution อันนึงเป็นเรื่องไม่ยากนัก
            เราสามารถคิดท่าได้มากมายหลายท่าในการแก้ปัญหา
            และเราสนใจใคร่รู้ว่าท่าไหนจะเหมาะที่สุด
          </p>
          <h3>Recommend profile:</h3>
          <ul>
            {recommendProfiles.map(profile => (
              <li key={profile}>{profile}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>เนื้อหา</h2>

          <div>
            <h3>Day 1</h3>
            <p>
              วันแรกจะเน้นเนื้อหาเรื่องแรงขับของมนุษย์
              โดยทำความเข้าใจกับปรารถนาของมนุษย์ที่อยู่ภายใต้ปัญหาต่างๆ
              โดยเริ่มจากการทำงานกับตัวเอง
            </p>
            <ul>
              <li>
                <strong>
                  Prelude: Anatomy of Problem &amp; Disappointment
                </strong>{" "}
                Anatomy ของ &quot;ปัญหา&quot; และ &quot;ความไม่พอใจ&quot;
              </li>
              <li>
                <strong>Episode 1: Satir</strong>{" "}
                การใช้ซาเทียร์ในการทำความเข้าใจปราถนาต่างๆ ที่อยู่ใต้
                &quot;ปัญหา&quot; ที่เราแก้ไข
              </li>
              <li>
                <strong>Episode 2: Three center of intelligence</strong>{" "}
                การเข้าถึงหลักการปัญญา 3 ศูนย์ เพื่อสร้างและออกแบบโครงร่าง
                Architecture Vision ที่สอดคล้องกับแรงขับของมนุษย์
                ทั้งของคนที่ตั้งโจทย์ให้เราและคนที่รับงานจากเราไปต่อ
              </li>
            </ul>
          </div>

          <div>
            <h3>Day 2</h3>
            <p>การประยุกต์ใช้แรงขับของมนุษย์ในการออกแบบ</p>
            <ul>
              <li>
                <strong>Prelude: Congruency</strong>{" "}
                ทำความรู้จักเป้าหมายของใช้จิตวิทยามนุษย์
                ซึ่งจะเป็นเป้าหมายของการออกแบบที่ดีเช่นกัน
              </li>
              <li>
                <strong>Episode 3: Abstraction</strong> การออกแบบ Abstraction
                และการเลือก Abstraction ที่คนอื่นออกแบบใน Framework และ Design
                Pattern ต่างๆ มาใช้และปรับปรุง
              </li>
              <li>
                <strong>Episode 4: Case studies</strong>{" "}
                นำเอาสิ่งที่เรียนมาทั้งหมดมาวิเคราะห์ Case study
                ของการออกแบบต่างๆ ให้เราเลือกใช้และเลือกออกแบบอย่างเข้าใจ
                และผสมผสานประยุกต์ได้ตามความเหมาะสมของบริบท
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>เวลาเรียน</h2>
          <p>
            <strong>รอบที่ 9: วันที่ 28-29 มีนาคม 2026 เวลา 9.00-18.00</strong>
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
          <p>รับผู้เรียนทั้งหมดจำนวน 19 คน</p>
          <p>ราคา: 8,000 บาท</p>
          <p>โอนเงินจองได้ที่ Promptpay 0879337879 นายชาคริต ฤทธาคนี</p>
          <p>
            แจ้งโอนเงินได้ที่{" "}
            <a
              href="https://humanarch.fly.dev/registrations/register"
              target="_blank"
              rel="noreferrer"
            >
              เว็บไซต์นี้
            </a>
          </p>
        </section>

        <section>
          <h2>Reviews &amp; Teaser</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.url}>
                <a href={review.url} target="_blank" rel="noreferrer">
                  {review.label}
                </a>
                {review.note ? ` ${review.note}` : ""}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
