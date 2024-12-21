---
title: Basic ของการแกะลูปนรก
date: "2024-12-21T00:00:00.000"
---

สมมติว่าคุณทำระบบคิด Commission ให้พนักงานขายทุกๆ สิ้นเดือน โดยมีเงื่อนไขว่า

1. พนักงานขายที่เป็นระดับ Junior จะได้ Commission rate 5%
2. พนักงานขายที่เป็นระดับ Senior ได้ Commission rate 7%
3. แต่ถ้าพนักงานขายคนนั้นมีสัญญาจ้างพิเศษที่มีโบนัส ต้องให้เพิ่มตามสัญญาจ้างนั้น
4. แต่ถ้าพนักงานขายสินค้าพิเศษที่อยู่ในรายการที่เรากำลังทำโปร ได้ Commission 20% เสมอสำหรับสินค้าตัวนั้น
5. ถ้าทำยอดรวมเกิน 200,000 บาทแล้ว ให้เพิ่มอีก 3%

หลายๆ ครั้งผมพบว่าคนเริ่มต้นใหม่จะสร้างลูปนรกขึ้นมาแบบนี้

```TypeScript
type SalesPerson = {
  name: string;
  level: "junior" | "senior";
  contracts: Contract[]; // มีหลายสัญญา
};

type Contract = {
  // Field อื่นๆ
  hasBonus: true;
  bonusCommission: number;
};

type SalesLine = {
  productCode: string;
  amount: number;
  price: number;
  totalPrice: number;
};

function calculateCommission(
  salesPerson: SalesPerson,
  lines: SalesLine[],
  specialProductCodes: string[]
) {
  let totalCommission;
  for (const line of lines) {
    const price = line.amount;
    let commission = 0;
    if (salesPerson.level === "junior") {
      commission = price * 0.05;
    } else {
      commission = price * 0.07;
    }
    for (const specialCode of specialProductCodes) {
      if (line.productCode === specialCode) {
        commission = price * 0.2;
      }
    }
    for (const contract of salesPerson.contracts) {
      if (contract.hasBonus) {
        commission *= 1 + contract.bonusCommission;
      }
    }
    totalCommission += commission;
  }
  if (totalCommission > 200000) {
    totalCommission *= 1.03;
  }
  return totalCommission;
}
```

โอเค ลูปนี้มันดูซับซ้อนเนอะ คือผมเขียนตรงไปตรงมาจากลิสต์รายการ Requirement เลย (ซึ่งจริงๆ ผมแอบเซอร์ไพรส์ว่า เจอหลายคนเขียนโปรแกรมแบบนี้เยอะกว่าที่คิดไว้)

เราจะมาแกะลูปนี้ให้มันอ่านง่ายขึ้นกัน

ซึ่งมีหลายวิธีมาก

แต่สำหรับภาคนี้ ผมสาธิตการแกะลูปในสไตล์ Imperative Programming ธรรมดาที่สุดก่อนละกันครับ

บล็อกนี้ผมตั้งใจจะค่อยๆ แนะนำโปรแกรมเมอร์ที่ยังเขียนโปรแกรมแบบ Imperative ให้ค่อยๆ เขียนได้ดีขึ้นก่อนในสไตล์ที่ไม่หลุดจากที่ตัวเองคุ้นเคยมากนักครับ

สาวก OOP, Functional programming อย่าพึ่งโกรธไปนะครับ เรามาคิดซะว่าวันนี้เรามีแค่เครื่องมือที่จำกัด มีแค่ Imperative ปกติให้ใช้ก่อนละกัน

(และส่วนตัวผมเชื่อว่าบางครั้งปัญหาที่โปรแกรมเมอร์เขียนโปรแกรมเก่งขึ้นไม่ได้ซักที เพราะเราไม่สอนสเตปพื้นฐาน เดี๋ยวถ้าจบ Imperative improvement ตรงนี้ คุณจะเห็นเลยว่า ไปต่อจากจุดนี้อีกนิดหน่อยก็ได้ Functional Programming, OOP)

---

เทคนิคที่ใช้ในวันนี้ ไม่มีชื่อภาษาอังกฤษ แต่ขอตั้งชื่อภาษาไทยง่ายๆ ว่า แยกการเตรียมข้อมูล กับการคำนวนออกจากกัน

ที่ลูปนี้มันดูซับซ้อน เพราะเป็นลูปเดียวที่มันรวมหลายๆ Requirement เข้าด้วยกัน 5 ข้อ ถูกรวมอยู่ในลูปเดียวหมด ทุกอย่างปนกันในลูปเดียว

แต่ถ้าเราแยกก่อนล่ะว่า ยอดขายกับ Sales คนไหนอยู่ใน Requirement ไหน

ผมว่ามันจะอ่านง่ายขึ้นมากเลยนะ

งั้น ผมจะเริ่มจากการแยกเคสพิเศษก่อนเลย คือ ใน Requirement นี้จะเห็นว่า ถ้างานขายอยู่ในสินค้าพิเศษ เราจะไม่สนใจ Sales เลยว่าอยู่ระดับไหน

งั้นเราแยกจุดนี้ออกมาก่อนดีกว่า

```Typescript
export type SalesPerson = {
  name: string;
  level: "junior" | "senior";
  contracts: Contract[]; // มีหลายสัญญา
};

export type Contract = {
  // Field อื่นๆ
  hasBonus: boolean;
  bonusCommission: number;
};

export type SalesLine = {
  productCode: string;
  totalPrice: number;
};

function extractLineWithSpecialProduct(
  lines: SalesLine[],
  specialProductCodes: string[]
) {
  const specialProductLines: SalesLine[] = [];
  const otherProductLines: SalesLine[] = [];
  for (const line of lines) {
    if (specialProductCodes.includes(line.productCode)) {
      specialProductLines.push(line);
    } else {
      otherProductLines.push(line);
    }
  }
  return [specialProductLines, otherProductLines];
}

export function calculateCommission(
  salesPerson: SalesPerson,
  lines: SalesLine[],
  specialProductCodes: string[]
): number {
  let totalCommission = 0;
  let totalAmount = 0;

  // แยกส่วนว่าอันไหนเป็นตัวพิเศษ
  const [specialProductLines, normalProductLines] =
    extractLineWithSpecialProduct(lines, specialProductCodes);

  // คิดเฉพาะเคสพิเศษ
  for (const line of specialProductLines) {
    const price = line.totalPrice;
    totalAmount += price;
    let commission = price * 0.2;

    for (const contract of salesPerson.contracts) {
      if (contract.hasBonus) {
        commission += price * contract.bonusCommission;
      }
    }
    for (const contract of salesPerson.contracts) {
      if (contract.hasBonus) {
        commission += price * contract.bonusCommission;
      }
    }
    totalCommission += commission;
  }

  // คิดเฉพาะเคสปกติ
  for (const line of normalProductLines) {
    const price = line.totalPrice;
    totalAmount += price;
    let commission = 0;
    if (salesPerson.level === "junior") {
      commission = price * 0.05;
    } else {
      commission = price * 0.07;
    }
    for (const contract of salesPerson.contracts) {
      if (contract.hasBonus) {
        commission += price * contract.bonusCommission;
      }
    }
    totalCommission += commission;
  }
  if (totalAmount >= 200000) {
    totalCommission *= 1.1;
  }
  return Math.round(totalCommission);
}
```

เทคนิคนี้คือแทนที่เราจะพยายามจัดการทุกอย่างให้เสร็จในลูปใหญ่ลูปเดียว เราพยายามแยกออกมาเป็นลูปย่อย แต่ละลูปแทนหนึ่ง Requirement

ข้อดีของการแยกลูปแบบนี้คือ เราจะรู้เลยว่า ถ้าคนใช้บอกว่า "คอมมิชชั่นพิเศษพังครับ" เราก็จะอ่านแค่ลูปบน แต่ถ้าตนใช้บอกว่า "คอมมิชชั่นปกติพังครับ" เราก็จะอ่านแค่ลูปล่าง

ซึ่งเราสามารถแยกฟังก์ชั่นให้อ่านง่ายขึ้นได้อีกแบบนี้

```Typescript
export type SalesPerson = {
  name: string;
  level: "junior" | "senior";
  contracts: Contract[]; // มีหลายสัญญา
};

export type Contract = {
  // Field อื่นๆ
  hasBonus: boolean;
  bonusCommission: number;
};

export type SalesLine = {
  productCode: string;
  totalPrice: number;
};

function extractLineWithSpecialProduct(
  lines: SalesLine[],
  specialProductCodes: string[]
) {
  const specialProductLines: SalesLine[] = [];
  const otherProductLines: SalesLine[] = [];
  for (const line of lines) {
    if (specialProductCodes.includes(line.productCode)) {
      specialProductLines.push(line);
    } else {
      otherProductLines.push(line);
    }
  }
  return [specialProductLines, otherProductLines];
}

function specialCommission(line: SalesLine, salesPerson: SalesPerson) {
  const price = line.totalPrice;
  let commission = price * 0.2;

  for (const contract of salesPerson.contracts) {
    if (contract.hasBonus) {
      commission += price * contract.bonusCommission;
    }
  }
  return commission;
}

function normalCommission(line: SalesLine, salesPerson: SalesPerson) {
  const price = line.totalPrice;
  let commission = 0;
  if (salesPerson.level === "junior") {
    commission = price * 0.05;
  } else {
    commission = price * 0.07;
  }
  for (const contract of salesPerson.contracts) {
    if (contract.hasBonus) {
      commission += price * contract.bonusCommission;
    }
  }
  return commission;
}

export function calculateCommission(
  salesPerson: SalesPerson,
  lines: SalesLine[],
  specialProductCodes: string[]
): number {
  let totalCommission = 0;
  let totalAmount = 0;

  // แยกส่วนว่าอันไหนเป็นตัวพิเศษ
  const [specialProductLines, normalProductLines] =
    extractLineWithSpecialProduct(lines, specialProductCodes);

  // คิดเฉพาะเคสพิเศษ
  for (const line of specialProductLines) {
    totalAmount += line.totalPrice;
    totalCommission += specialCommission(line, salesPerson);
  }

  // คิดเฉพาะเคสปกติ
  for (const line of normalProductLines) {
    totalAmount += line.totalPrice;
    totalCommission += normalCommission(line, salesPerson);
  }
  if (totalAmount >= 200000) {
    totalCommission *= 1.1;
  }
  return Math.round(totalCommission);
}
```

ทีนี้เราจะเห็นว่าในฟังก์ชั่น calculateCommission นั้น ความเป็นลูปนรกหายไปเยอะมากเลย

จากที่เรามีลูปใหญ่ๆ ที่อ่านยากสูปนึง เรามีลูปง่ายๆ สองลูปแล้ว

แถมถ้าลูกค้าบอกว่า Commission แบบพิฌศษพังครับ เรารู้แล้วว่าจะไปอ่านจากตรงไหนเนอะ เพราะเป็นไปได้สองอย่าง

1. `extractCommission` เราสะกัดข้อมูลที่เข้าเคสมาผิด
2. `specialCommission` ทำงานผิด

ตอนนี้ผมเชื่อว่าเราจะแก้บั๊กได้ง่ายขึ้น

ถัดมาตรงนี้เราจะเห็นว่าใน Special Commission และ Normal Comission เราก็มีส่วนของการต้องคิดเงินพิเศษให้ Sales ที่มีโบนัส เหมือนกันทั้งคู่

เห็นของที่ทั้งหน้าตาเหมือนกันแถมเป็น Concept ในธุรกิจแบบเดียวกันยังงี้ เราก็สามารถแยกเป็นฟังก์ชั่นได้ตามนี้

```Typescript
export type SalesPerson = {
  name: string;
  level: "junior" | "senior";
  contracts: Contract[]; // มีหลายสัญญา
};

export type Contract = {
  // Field อื่นๆ
  hasBonus: boolean;
  bonusCommission: number;
};

export type SalesLine = {
  productCode: string;
  totalPrice: number;
};

function extractLineWithSpecialProduct(
  lines: SalesLine[],
  specialProductCodes: string[]
) {
  const specialProductLines: SalesLine[] = [];
  const otherProductLines: SalesLine[] = [];
  for (const line of lines) {
    if (specialProductCodes.includes(line.productCode)) {
      specialProductLines.push(line);
    } else {
      otherProductLines.push(line);
    }
  }
  return [specialProductLines, otherProductLines];
}

function applyBonusContract(
  originalCommission: number,
  price: number,
  salesPerson: SalesPerson
) {
  let commission = originalCommission;
  for (const contract of salesPerson.contracts) {
    if (contract.hasBonus) {
      commission += price * contract.bonusCommission;
    }
  }
  return commission;
}

function specialCommission(line: SalesLine, salesPerson: SalesPerson) {
  const price = line.totalPrice;
  let commission = price * 0.2;

  commission = applyBonusContract(commission, price, salesPerson);
  return commission;
}

function normalCommission(line: SalesLine, salesPerson: SalesPerson) {
  const price = line.totalPrice;
  let commission = 0;
  if (salesPerson.level === "junior") {
    commission = price * 0.05;
  } else {
    commission = price * 0.07;
  }

  commission = applyBonusContract(commission, price, salesPerson);
  return commission;
}

export function calculateCommission(
  salesPerson: SalesPerson,
  lines: SalesLine[],
  specialProductCodes: string[]
): number {
  let totalCommission = 0;
  let totalAmount = 0;

  // แยกส่วนว่าอันไหนเป็นตัวพิเศษ
  const [specialProductLines, normalProductLines] =
    extractLineWithSpecialProduct(lines, specialProductCodes);

  // คิดเฉพาะเคสพิเศษ
  for (const line of specialProductLines) {
    totalAmount += line.totalPrice;
    totalCommission += specialCommission(line, salesPerson);
  }

  // คิดเฉพาะเคสปกติ
  for (const line of normalProductLines) {
    totalAmount += line.totalPrice;
    totalCommission += normalCommission(line, salesPerson);
  }

  if (totalAmount >= 200000) {
    totalCommission *= 1.1;
  }
  return Math.round(totalCommission);
}

```

จบแล้วครับ

ถ้าเราเทียบกับเวอร์ชั่นแรกที่เป็นลูปนรก เราจะเห็นว่าเวอร์ชั่นใหม่ เรามีลูปง่ายๆ หลายๆ ลูปแทน และแต่ละลูปถูกแยกมาตรงกับ Requirement แต่ละข้อ

แถม Requirement แต่ละข้อ มีฟังก์ชั่นของตัวเองอีกต่างหาก เวลาข้อไหนลูกค้าบ่นว่าพัง เรามีที่แยกให้ดูชัดเจนเป็นระเบียบเลย

เทคนิคง่ายๆ ที่เราใช้ในครั้งนี้มีแค่สองเทคนิค

1. DRY หรือแยกส่วนโค้ดซ้ำๆ ออกมา เราใช้ในตอนที่เราสร้าง `applyContract` ซึ่งอันนี้เป็นเทคนิคปกติ
2. เมื่อเราเจอลูปใหญ่ที่วนลูปข้อมูลชุดนึง แล้วทำหลายๆ Requirement เราสามารถใช้เทคนิค "แยกการเตรียมข้อมูล กับการคำนวนออกจากกัน" ได้ คือเตรียมข้อมูลให้ตรงกับ Requirement ใด Requirement โดยเฉพาะก่อน แล้วแยกเป็นคนละลูป

แล้วโค้ดนอกจากจะอ่านง่ายขึ้นเฉยๆ (ซึ่งตรงนี้อาจจะ Subjective นิดนึง) แล้วยังมีข้อดีคือว่าลูกค้าบ่นมี Bug ใน Requirement ไหน เรามีที่เฉพาะที่หาเจอแล้ว ไม่ต้องไปนั่งไล่อ่านทั้งลูปใหญ่ๆ (ซึ่งตรงนี้ผมว่าเป็นข้อดีชัดเจน ไม่ว่าคุณจะคิดว่าโค้ดเวอร์ชั่นใหม่อ่านง่ายหรือยาก โค้ดชุดใหม่ก็มีข้อดีตรงนี้จริงๆ)

---

ตรงนี้บางคนอาจจะถามว่า แล้ววนลูปสองที รอบแรกคัดแยกข้อมูล รอบหลังเอาข้อมูลคำนวน ไม่เปลือง Performance แย่เหรอ

ผมจะบอกว่า

1. วนลูป Constant time บนข้อมูลแบบนี้ ถ้าไม่ถึหมื่นตัว ผมมองว่าผลน้อยมากๆ ลองวัดผลได้ครับ ดูว่ามีนัยสำคัญมั้ย
2. ถ้ายังบอกว่า ไม่เอา ไม่ชอบ เปลือง ไซส์ข้อมูลใหญ่ เราก็ยังใช้เทคนิคแบบเดียวกันได้ แต่ต้องใช้วิธีการของ Functional Programming ที่เรียกว่า Lazy Evaluation เข้ามาช่วยอีกทีได้ โดยไม่ต้องกลับไปเขียนลูปนรกที่อ่านและไล่ตามบั๊กยากมาก โดยบอกว่า "ก็มันเร็วกว่า ลูปทีเดียว" แต่ผมขอละเรื่อง Lazy Evaluation ไว้ในโอกาสหน้าครับ

---

ผมขอ Generalized เทคนิคนี้ออกมาเป็นหลักการนิดนึง

หลักการคือ ถ้าคุณมี Loop นรกที่มีหน้าตาคล้ายๆ ยังงี้

```Typescript
for (const element of list) {
  if (condition(element)) {
    // ทำอะไรที่ซับซ้อน ลูปข้างใน if ข้างในอีกเยอะ
  } else {
    // ทำอีกอย่างนึงที่ซับซ้อนพอกัน
  }
}
```

เราสามารถแก้เป็นเป็นแบบนี้ได้เสมอ

```TypeScript

const listToDoThisThing = []
const listToDoThatThing = []
for (const elemet of list) {
  if (condition(element)) {
    listToDoThisThing.push(element)
  } else {
    listToDoThatThing.push(element)
  }
}

for (const element of listToDoThisThing) {
 // ทำอะไรที่ซับซ้อน ลูปข้างใน if ข้างในอีกเยอะ
}

for (const element of listToDoThatThing) {
 // ทำอีกอย่างนึงที่ซับซ้อนพอกัน
}
```

เราแยกลูปที่ยากซับซ้อน if, for ข้างในเยอะแยะไปหมด ออกมาเป็นสองลูปที่ง่ายขึ้นได้ตามนี้ครับ

และยิ่งถ้าการทำแต่ละอย่างเป็นเงื่อนไขของ Requirement คนละข้อกัน ยิ่งเราแยกยังงี้ เรายิ่งไล่ตามปัญหาเวลาผู้ใช้บ่นหรือด่า ได้ง่ายขึ้นเยอะครับ
