import React from "react"

const facebookUrl = "https://www.facebook.com/chakrit.likitkhajorn/"
const email = "chakrit.lj@gmail.com"

function ContactLinks() {
  return (
    <>
      <a href={facebookUrl} target="_blank" rel="noreferrer">
        Facebook messenger
      </a>{" "}
      หรือ <a href={`mailto:${email}`}>{email}</a>
    </>
  )
}

export default function CourseFAQ() {
  return (
    <>
      <section>
        <h2>FAQ</h2>
        <p>
          <strong>Q: สามารถออกใบกำกับภาษีหรือไม่</strong>
        </p>
        <p>
          A: สามารถออกใบเสร็จสำหรับองค์กรได้ แต่ออกในนามบุคคล และขอหัก 3% ได้
        </p>
        <p>
          <strong>
            Q: สามารถออกใบเสนอราคาหรือใบแจ้งหนี้ล่วงหน้าได้หรือไม่
          </strong>
        </p>
        <p>
          A: ติดต่อขอใบเสนอราคาได้ทาง <ContactLinks />
        </p>
        <p>
          <strong>
            Q: ถ้าองค์กรส่งมาเรียนและอนุมัติงบแล้ว แต่ต้องรอรอบเบิกจ่าย
            สามารถลงทะเบียนก่อนที่คอร์สจะเต็มได้หรือไม่
          </strong>
        </p>
        <p>
          A: สามารถแจ้งได้ทาง <ContactLinks /> แล้วลงทะเบียนได้ทันที
          ค่อยโอนเงินตามมาทีหลัง
        </p>
      </section>
      <section>
        <h2>สำหรับองค์กร</h2>
        <p>
          สนใจคอร์สนี้สำหรับเทรนภายในขององค์กร ติดต่อได้ทาง <ContactLinks />
        </p>
      </section>
    </>
  )
}
