---
title: Humanistic Architecture
---

## Summarized

คอร์ส the art of humanistic architecture design ที่จะสอนเรื่องการออกแบบ software architecture โดยใช้ศาสตร์ความเป็นมนุษย์เข้ามาเสริม เพื่อให้งานออกแบบที่ได้ตอบโจทย์ได้ดีขึ้น เนื้อหาจะแบ่งเป็นสองส่วนหลัก ช่วงแรกเราจะเรียนการเข้าใจจิตวิทยาเบื้องต้นผ่านการทำงานกับตัวเอง และจึงเริ่มการนำมาประยุกต์ใช้ในการตัดสินใจทางเทคนิค

การตัดสินใจทางเทคนิคหลายๆ ครั้งมีเรื่องของมนุษย์เข้ามาเกี่ยวข้องเกินไปกว่าปัญหาทางเทคนิค เช่น การเลือกภาษาที่ช่วยให้ทีมทำงานง่าย แล้วคำว่าง่ายคืออะไร มาจากไหน การเลือก Protocol การสื่อสารระหว่าง REST, Rpc, SOAP, JSON ทั้งหมดนี้ตอบโจทย์ทางเทคนิคได้หมด แต่ก็มีบางอันที่มนุษย์ที่ทำงานด้วยมองว่าอันนึงซับซ้อนยาก อีกอันสะดวกรวดเร็วดี และก็มีคนไม่เห็นด้วย แรงขับพวกนี้มาจากไหน เราจะมาเข้าใจพื้นฐานกันเพื่อนำมาใช้เป็นสมการในการเลือกและตัดสินใจ

คอร์สนี้สร้างจากประสบการณ์ผมเองที่ synthesize ศาสตร์จิตวิทยาความเป็นมนุษย์ (humanistic psychology) อย่าง Satir, enneagram และ Programming เพื่อให้ออกแบบ เขียนโค้ด และสื่อสารกับเพื่อนร่วมทีมและเพื่อนร่วมงานทั้งหลายอย่างเข้าอกเข้าใจ ทำให้มีโอกาสสร้างระบบที่ตรงความปรารถนา (Yearning) ของเจ้าของโจทย์ได้มากกว่าเดิม ไม่ว่าเจ้าของโจทย์นั้นจะเป็นตัวเราเองหรือคนอื่นก็ตาม

(สำหรับคนที่ติดตามผู้สอนมาซักพัก คอร์สนี้จะเปิดเผยว่าเนื้อหา Talk ต่างๆ ที่ผมเคยพูด งานสอนอื่นๆ ที่ผมทำมาจากพื้นฐานเบื้องลึกอย่างไร ทำไมหลายๆ อาจจะมองว่าผมพูดเข้าใจง่าย มาจากเลนส์มุมมองอย่างไรกันแน่ แล้วจะเข้าใจทั้งฐานคิดและวิธีสื่อสารเพื่อนำปรับไปใช้กับทีมของคุณได้)

## เหมาะสำหรับใคร

คอร์สนี้เหมาะสำหรับคนที่มีประสบการณ์การทำงานมาระดับนึง และอยู่ในจุดที่รับโจทย์มาแล้วต้องเลือก Solution ที่ดีที่สุดจากความเป็นไปได้หลายรูปแบบ ไม่ว่าจะเป็นการเลือกภาษา เลือกเฟรมเวิร์ค เลือก Coding Standard หรือเลือก Collaboration Scheme ในระดับองค์กร และเราต้องการ "ออกแบบ" สิ่งที่เหมาะที่สุดสำหรับบริบทนั้น

คอร์สนี้เหมาะมากเป็นพิเศษกับคนที่ต้องตัดสินใจเรื่อง Architecture ให้คนอื่น ไม่ว่าชื่อตำแหน่งคุณจะเป็น Senior, Lead, Principal, Staff, Architect, VP, CTO ถ้างานของคุณประกอบไปด้วยการที่ต้องตัดสินใจออกแบบ Architecture ให้เพื่อนร่วมงานใช้ คอร์สนี้จะเหมาะกับคุณมาก เราจะเจาะปัญหาพวกนี้เป็นหลัก

คอร์สนี้ไม่เหมาะกับโปรแกรมเมอร์ที่ต้องการหา Solution ท่าอะไรซักท่ามาตอบโจทย์ของลูกค้าให้ได้ คอร์สจะไม่ค่อยได้เจาะเรื่องนั้น เราจะเรียนกันในสถานการณ์ที่การหา Solution อันนึงเป็นเรื่องไม่ยากนัก เราสามารถคิดท่าได้มากมายหลายท่ามากในการแก้ปัญหา และเราสนใจใคร่รู้ว่าท่าไหนจะเหมาะที่สุด

Recommend profile:

- เคยทำงานมาแล้วอย่างน้อย 2 ปี มีประสบการณ์ในการทำงาน
- เคยจับ Framework, Architecture มากกว่า 1 แบบขึ้นไป
- มีประสบการณ์ที่ต้องร่วมตัดสินใจเลือกรูปแบบการทำงานหรือ Architecture, Framework, Library ให้ทีม
- คอร์สจะ Assume ความรู้พื้นฐานเหล่านี้ Dependency Injection, IoC container, Unit testing, Object oriented Programming, Functional programming, MVC Architecture, Event and Observer Pattern อย่างน้อยพอรู้ว่ามันคืออะไรนิดๆ หน่อยๆ ไม่ต้องสันทัดมากก็ได้

## เนื้อหา

#### Day 1

วันแรกจะเน้นเนื้อหาเรื่องแรงขับของมนุษย์ โดยทำความเข้าใจกับปรารถนาของมนุษย์ที่อยู่ภายใต้ปัญหาต่างๆ โดยเริ่มจากการทำงานกับตัวเอง

- **Prelude: Anatomy of Problem & Disappointment** Anatomy ของ "ปัญหา" และ "ความไม่พอใจ"
- **Episode 1: Satir** การใช้ซาเทียร์ในการทำความเข้าใจปราถนาต่างๆ ที่อยู่ใต้ "ปัญหา" ที่เราแก้ไข
- **Episode 2: Three center of intelligence** การเข้าถึงหลักการปัญญา 3 ศูนย์ เพื่อสร้างและออกแบบโครงร่าง Architecture Vision ที่สอดคล้องกับแรงขับของมนุษย์ ทั้งของคนที่ตั้งโจทย์ให้เราและคนที่รับงานจากเราไปต่อ

#### Day 2

การประยุกต์ใช้แรงขับของมนุษย์ในการออกแบบ

- **Prelude: Congruency** ทำความรู้จักเป้าหมายของใช้จิตวิทยามนุษย์ ซึ่งจะเป็นเป้าหมายของการออกแบบที่ดีเช่นกัน
- **Episode 3: Abstraction** การออกแบบ Abstraction และการเลือก Abstraction ที่คนอื่นออกแบบใน Framework และ Design Pattern ต่างๆ มาใช้และปรับปรุง
- **Episode 4: Case studies** นำเอาสิ่งที่เรียนมาทั้งหมดมาวิเคราะห์ Case study ของการออกแบบต่างๆ ให้เราเลือกใช้และเลือกออกแบบอย่างเข้าใจ และผสมผสานประยุกต์ได้ตามความเหมาะสมของบริบท

## เวลาเรียน

**รอบที่ 5: วันที่ 24-25 กุมภาพันธ์ 2024 เวลา 9.00-18.00**

สถานที่: [Clazy Cafe](https://maps.app.goo.gl/hzxPpnwFG7gRDQtq7) ห้อง B

ลง BTS สนามเป้าทางออก 1 เดินประมาณ 700 เมตร อยู่ที่ Season mall

รับผู้เรียนทั้งหมดจำนวน 18 คน

ราคา: 8,000 บาท

โอนเงินจองได้ที่ Promptpay 0879337879 นายชาคริต ลิขิตขจร

แจ้งโอนเงินได้ที่ [เว็บไซต์นี้](https://humanarch.fly.dev/registrations/register)

# Reviews & Teaser

- [Review#1](https://www.facebook.com/kanin.kearpimy56/posts/pfbid0SK6i7N5w459WDy9xcp2mjtuUGqYJ8kjqCSfeT8wjbknsVhJZtpXdZEhWJQkM8KYBl?__cft__[0]=AZX_VxKVkYUmMMjm8AHrZrYJWlxF_Hogm53otdXqyysW3NMV0Hq9772Ta8tWHvkb6ADsWunyUbRhoqLO2XiQFeyw0vQ_FZjmEFh8I1qRGNeh5saf1zDgQo7L9q1Snrf-mII&__tn__=%2CO%2CP-R)
- [Review#2](https://www.facebook.com/Sikiryl/posts/pfbid09vXxBLsaXPTasVg4yQ3FyNQh89iRUbtDBoDV7b2QhbHgzPo5Y6mipH8Xcpj6uJUql)
- [Review#3](https://www.facebook.com/ratixoxo/posts/pfbid02QLs6E9jWYgWUyeU44TN5eqc2V2cPR5aqt9BAm2Pu4fYmPa5iMiZGNggR6fUu7sAbl)
- [Review#4](https://medium.com/@thikonwachiraarunwong/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81-humanistic-architecture-89f73a334ff3?fbclid=IwAR2Li7ciRMztwqsvmu_C1Ut81mzS_SlXAgqLH30IZMFCzmMZiLA_Uo7cR_g)
- [Review#5](https://knowlats.dev/review-course-humanistic-software-architecture/)
- [Review#6](https://sarunyhot.medium.com/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-humanistic-architecture-5a47b0b488e5) อันนี้ละเอียดมาก
- [Review#7](https://naiwaen.debuggingsoft.com/2023/03/%e0%b8%9a%e0%b8%b1%e0%b8%99%e0%b8%97%e0%b8%b6%e0%b8%81-humanistic-software-architecture/?fbclid=IwAR1OdnaqfoM7rbtB7WtTJZpTZTmrJgIvnfgYrdyaYnQLuiPKhPm_EDZnT34)
- [Review#8](https://www.facebook.com/natechawin.suthison/posts/pfbid02KFuwPWHooJS4fm3T1A8ZPGgXH4y1eUqgtow2dSmBAamVKMiqnZKgYVNQaupz9ctxl)
- [คำโปรยแรก](https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid02UETwFp5SptBqWr14EXpVn5yGGsrXQrgFhZr2QhpKH8Bo9us35W8u1NSsy6QwGEkxl?__cft__[0]=AZXS11dgQsmKjc-UOjjJxMAZp9u8LVLqACCAKD2WJlcwNH00-jzor8QJl8abLWObMtQa5GdjxwmMi7MrsTrp_cvuaMnCRLmGuOz4HEpZbUVc3VJKmxq0ZEe3ceJt9z0q_uI&__tn__=%2CO%2CP-R)
- [Teaser](https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid02XWvnJVyVk5AXMB9yQ9vfKUNZdRGahUCxYa2uNuyPRp1zGoAZM1gFidFBX3Mj8Ccql)
- [คำโปรยสอง](https://www.facebook.com/chakrit.likitkhajorn/posts/pfbid0nEWpLYF3URBMAUWStpwPL92KvKxMiyL9ZzPv2g1Be14K6uqJxRDhzRX4Ybxj9bVal)

**คอร์สที่จบไปก่อนหน้านี้**

- รอบที่ 1 (จบไปแล้ว): วันที่ 4-5 กุมภาพันธ์ 2023 เวลา 9.00-16.30
- รอบที่ 2 (จบไปแล้ว): วันที่ 25-26 มีนาคม 2023 เวลา 9.00-17.00
- รอบที่ 3 (จบไปแล้ว): วันที่ 27-28 พฤษภาคม 2023 เวลา 9.00-17.00
- รอบที่ 4 (จบไปแล้ว): วันที่ 7-8 ตุลาคม 2023 เวลา 9.00-17.00
