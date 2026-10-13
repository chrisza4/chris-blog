import React from "react"

import * as styles from "../components/course/course.module.css"
import CourseFAQ from "../components/course/course-faq"
import Layout from "../components/layout/mainLayout"
import SEO from "../components/seo"
import titleImage from "../components/course/title-image.png"

const programId = 4
const title = "Designing large scale system: The fundamentals"
const description = "เข้าใจพื้นฐานของการออกแบบระบบขนาดใหญ่"

export default function LargeScaleCoursePage({ location }) {
  return (
    <Layout location={location} title={title}>
      <SEO title={title} description={description} />
      <div className={styles.coursePage}>
        <div
          className={styles.bigImage}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${titleImage})`,
          }}
        >
          <div className={styles.container}>
            <h1 className={styles.heading}>{title}</h1>
            <h2 className={styles.subheading}>{description}</h2>
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
            เข้าใจพื้นฐานการออกแบบระบบขนาดใหญ่ ศัพท์ต่างๆ และแนวคิดที่จำเป็น
            สำหรับการออกแบบระบบขนาดใหญ่ให้ไม่มีข้อผิดพลาด
            และมีประสิทธิภาพที่ยอมรับได้ มีข้อผิดพลาดน้อย
          </p>
          <p>
            หลายๆ
            ครั้งผมพบว่าการออกแบบระบบขนาดใหญ่ที่สอนกันในเมืองไทยมักจะสอนเรื่องการใช้เทคโนโลยีเฉพาะทาง
            เช่น Cloud, Database, Queue, etc.
            ทำให้การออกแบบมักจะยึดคิดที่เทคโนโลยี
            คอร์สนี้ตั้งใจจะสอนเรื่องหลักคิด หลักการพื้นฐาน และ Primitive ต่างๆ
            ที่สำคัญในการออกแบบ Large scale system
            เพื่อให้เราสามารถออกแบบได้โดยไม่ยึดติดกับเทคโนโลยีโดยเฉพาะ
          </p>
          <p>
            คลาสนี้เป็นคลาสที่ปูเบื้องต้นในการออกแบบตั้งแต่ Concurrent
            programming ให้ไม่มีปัญหา Bug ที่ไม่คาดฝันต่างๆ
            และเข้าใจพื้นฐานตั้งแต่การควบคุมระดับ Concurrent / Distributed
            computing ตั้งแต่ระดับ CPU หลาย Core ไปจนถึงระบบหลายเครื่อง
            แล้วพอเราเห็น Pattern เดียวกัน
            เราจะเข้าใจถ่องแท้ว่าพื้นฐานแนวคิดการออกแบบมันไม่ต่างกันมากนัก
            แล้วพอเข้าใจหลักคิดพื้นฐานแล้วเราจะเอาพื้นฐานพวกนั้นมาเลือกออกแบบได้โดยไม่ต้องยึดกับเทคโนโลยีใดๆ
          </p>
        </section>

        <section>
          <h2>ผู้สอน</h2>
          <p>Chris Chakrit Riddhagni</p>
          <ul>
            <li>ปัจจุบันทำงานเป็น Lead Consultant ที่ Thoughtworks</li>
            <li>
              หนึ่งใน Technology Advisory Board to CTO ในการคัดกรอง Technology
              ที่น่าสนใจในโลกนี้สำหรับ Thoughtworks Tech Radar
            </li>
            <li>Former Vice President of Engineering at Taskworld</li>
            <li>Former Engineering Lead at Omise</li>
            <li>
              เป็นที่ปรึกษาในการปรับปรุงทีมและระบบต่างๆ
              ทั้งในเมืองไทยและนอกประเทศ
            </li>
          </ul>
        </section>

        <section>
          <h2>Learning goals</h2>
          <ul>
            <li>
              แยกแยะระหว่างระบบเร็ว (Performant) ระบบที่เหมาะสมกับงานขนาดใหญ่
              (Scalable) ได้
            </li>
            <li>
              สามารถอ่านคู่มือ Tech Stack, Framework ต่างๆ รู้เรื่อง
              ไม่ต้องอ่านทีเดียวหมด เลือกประเด็นสำคัญ
              แล้วเลือกให้เหมาะกับงานที่ทำได้
            </li>
            <li>
              สามารถนำบริบททางธุรกิจมาใช้ในการออกแบบ System design ได้
              สกัดประเด็นทางธุรกิจที่สำคัญต่อการออกแบบระบบมาได้พอดี
              ไม่ถามเยอะเกินหรือน้อยเกินไป
            </li>
            <li>
              ตรวจสอบรีวิวงานออกแบบต่างๆ ได้
              โดยเข้าใจประเด็นสำคัญที่ต้องตรวจสอบเพื่อให้ระบบทำงานไม่ผิดพลาด
              (บางครั้งตั้งแต่ดูแค่ API ก็รู้แล้วว่า Race condition มีแน่นอน)
            </li>
            <li>
              ออกแบบระบบบน Incremental design ได้ รู้ว่าอะไรต้องถูกแต่แรก
              อะไรที่เป็นประเด็นเติมทีหลัง ทั้ง Read heavy, write heavy
            </li>
            <li>
              ใช้ Message queue เป็น ใช้แก้ปัญหาที่เหมาะสม ไม่ใช้ฟุ่มเฟือยเกินไป
            </li>
          </ul>
        </section>

        <section>
          <h2>วันเวลาเรียน</h2>
          <p>
            <strong>รอบที่ 1: วันที่ 29-30 สิงหาคม 2026 เวลา 9.00-17.30</strong>
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
          <p>รับผู้เรียนทั้งหมดจำนวน 24 คน</p>
          <p>ราคา: 10,000 บาท</p>
          <p>Early bird ที่จองล่วงหน้า 9,000 บาทภายในวันที่ 5 สิงหาคม 2026</p>
        </section>

        <section>
          <h2>เหมาะสำหรับ</h2>
          <ul>
            <li>
              คนเรียนที่เคยเขียนโปรแกรมมา 3-5
              ปีและเริ่มสนใจการออกแบบระบบขนาดใหญ่
            </li>
            <li>
              Architect, Engineering manager
              ที่จำเป็นต้องมีส่วนร่วมในการออกแบบระบบขนาดใหญ่ และรีวิวงานดีไซน์
              จะได้ประโยชน์มาก
              เพราะผมออกแบบจากมุมคนที่ต้องคอยรีวิวงานโดยอ่านโค้ดทุกบรรทัดไม่ไหว
              จะมั่นใจได้ยังไงว่าระบบรับโหลดได้นะ แล้วทำงานถูกต้องนะ
            </li>
          </ul>
        </section>

        <section>
          <h2>เนื้อหาโดยคร่าว</h2>
          <ol>
            <li>Scalability, Performant, Latency and Throughput</li>
            <li>
              Concurrent primitive ตั้งแต่ CPU (SIMD, CAS), OS (Processes,
              Thread), Runtime (Green thread, async)
            </li>
            <li>
              Basic of concurrent programming and Race condition in depth:
              เขียนยังไงให้ทำงานถูก ไม่เจอบั๊กแปลกๆ เวลาสเกล
            </li>
            <li>
              CAP Theorem and Scaling model: เข้าใจข้อจำกัดพื้นฐานในการสเกล
            </li>
            <li>Scaling Read and Scaling write จากหลักคิดพื้นฐาน</li>
            <li>Message queue and buffering จากหลักคิดพื้นฐาน</li>
            <li>
              Minimal and incremental design principle วิธีการค่อยๆ
              ออกแบบไปทีละเปราะ
              ออกแบบเท่าที่จำเป็นแต่ก็ไม่ต้องรื้อใหม่เวลาต้องเพิ่มเติม
            </li>
          </ol>
        </section>

        <section>
          <h2>หมายเหตุ</h2>
          <p>
            คอร์สนี้อาจจะยังไม่ได้ลง Fault-tolerance ลึกมากนัก พวก Consensus,
            Ordering Guarantee, Monotonicity property ถ้าสนใจลงเรียนต่อได้นะ
            แค่ตอนออกแบบคอร์สแล้ว
            ผมคิดว่าปูพื้นฐานเรื่องตามเนื้อหาในคอร์สให้หมดก่อนแล้วค่อยไปตรงนั้นดีกว่า
            เอา Fault tolerance พื้นฐานก่อนเท่าที่ผมพบว่าใช้ในชีวิตการทำงานบ่อยๆ
            ก่อน
          </p>
          <p>
            ถ้าสนใจอยากเรียน Advance ขึ้นพวกทฤษฎ๊ Fault-tolerance
            อยากให้ลงคอร์สนี้เพื่อปูพื้นฐานก่อน
          </p>
        </section>

        <section>
          <h2>การเตรียมตัว</h2>
          <p>ผู้เรียนต้องมี Notebook นำมาใช้</p>
          <p>
            คอร์สนี้จะมีการอ่านโค้ดหลายภาษา ปกติจะใช้ TypeScript เป็นภาษาหลัก
            70% ในการสอน แต่บางคอนเซปต์ต้องลงลึกขึ้น จะมี Java, C# และ Rust
            บ้างประปราย
          </p>
          <p>ก่อนเรียนจะส่ง Github ที่ใช้ในการเรียนและการเตรียมตัวให้</p>
          <p>
            แต่เน้นอ่านโค้ดกับออกแบบมากกว่าเขียนโค้ดครับ
            แค่บางอย่างการให้อ่านโค้ดมันชัดเจนและรันได้เล่นกับมันได้มากกว่ามานั่งอ่าน
            Diagram และผมเชื่อว่าการเรียนให้เข้าใจ ต้องสามารถเล่นนกับเนื้อหาได้
            ไม่ใช่จำอย่างเดียว
          </p>
        </section>

        <CourseFAQ />
      </div>
    </Layout>
  )
}
