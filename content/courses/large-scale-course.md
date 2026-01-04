---
title: "Designing large scale system: The fundamentals"
description: เข้าใจพื้นฐานของการออกแบบระบบขนาดใหญ่
---

## Summarized

เข้าใจพื้นฐานการออกแบบระบบขนาดใหญ่ ศัพท์ต่างๆ และแนวคิดที่จำเป็น เพื่อให้ระบบมีโอกาสล่มน้อย (Fault tolerance) และมีประสิทธิภาพที่ยอมรับได้ มีข้อผิดพลาดน้อย

หลายๆ ครั้งผมพบว่าการออกแบบระบบขนาดใหญ่ที่สอนกันในเมืองไทยมักจะสอนเรื่องการใช้เทคโนโลยีเฉพาะทาง เช่น Cloud, Database, Queue, etc. ทำให้การออกแบบมักจะยึดคิดที่เทคโนโลยี คอร์สนี้ตั้งใจจะสอนเรื่องหลักคิดและ Primitive ต่างๆ ที่สำคัญในการออกแบบ Large scale distributed system เพื่อให้เราสามารถออกแบบได้โดยไม่ยึดติดกับเทคโนโลยีโดยเฉพาะ

คลาสนี้จะสอนให้เข้าใจว่าประเด็นในการออกแบบระบบสเกลใหญ่มันมีประเด็นหลักๆ อะไรบ้าง แล้วเวลาที่เราเลือกเทคโนโลยี เราจะอ่าน Design Documentation ของระบบต่างๆ เช่น Load Balancer, Database, Memory Cache, Cluster Management อย่างไรเพื่อให้ได้ประโยชน์ในการออกแบบระบบเรา และพอเราเข้าใจแล้ว เราสามารถได้ข้อดี และเข้าใจวิธีการเตรียมพร้อมรับมือ Trade-offs และ Downside ต่างๆ ของระบบเหล่านั้นได้ ซึ่งการจะเข้าใจจุดนี้ได้เราจำเป็นต้องเข้าใจ Primitive และ Pattern ของ Large scale distributed system เช่น Atomicity, Monotonicity, Replication, Consensus, Partitioning, etc. ซึ่งผมตั้งใจจะสอนให้มากพอที่คุณจะไปใช้ต่อได้ และยกตัวอย่างให้เห็นว่าเทคโนโลยีที่เป็นที่นิยมในปัจจุบันใช้ทฤษฎีพวกนี้เหมือนหรือต่างกันอย่างไรบ้าง

## เหมาะสำหรับ

- คนเรียนที่เคยเขียนโปรแกรมมา 3-5 ปีและเริ่มสนใจการออกแบบระบบขนาดใหญ่
- Architect, Engineering manager ที่จำเป็นต้องมีส่วนร่วมในการออกแบบระบบขนาดใหญ่ หรือรีวิว

## เนื้อหาโดยคร่าว (อาจเปลี่ยนแปลงได้)

1. What is scalable? เข้าใจประเด็นและความหมายของ Scalability เช่น Latency vs. Throughput, Naive scaling model, Scaling time, Theory of constraint

2. Concurrent state, the root of all problems เข้าใจความยุ่งยากและประเด็นละเอียดอ่อนเวลาที่มีข้อมูลที่ต้องได้รับการ Access พร้อมๆ กันเป็นจำนวนมาก และ Primitive ที่ใช้ในการโมเดล เช่น Process, Thread, Stateless, Stateful, Atomiticy, Mutex, Semaphore, Isolation level, Deadlock Detection, Message passing (which is original purpose of OOP) เพื่อให้สามารถออกแบบระบบที่มีคนเข้าถึงข้อมูลพร้อมๆ กันเป็นจำนวนมาก แต่ไม่มีข้อผิดพลาดในข้อมูลได้

3. Distributed system: Fault tolerance รู้จักการออกแบบระบบที่ทนทานต่อความล้มเหลวเป็นส่วนๆ เช่น Server บางตัวพัง และทฤษฎีที่จำเป็น เข้าใจ Two-general problems, CAP, Idempotency, Ordering problem, Single point of failure, Monotonicity, Consensus

4. Common scaling patterns and principle: แชร์วิธีคิดเบื้องต้นที่ใช้เวลาออกแบบระบบขนาดใหญ่ ว่าจะเริ่มคิดจากจุดไหนดี
