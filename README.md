# ABB Product Price List 2026 — Search Interface

เว็บค้นหาราคาผลิตภัณฑ์ ABB จากไฟล์ **Price List 2026 - Low Voltage Products Thailand**

## โครงสร้าง

```text
abb-product-price-list-2026/
├── data/
│   ├── products.json
│   └── Price list ABB 2026.pdf
├── public/
│   └── index.html
├── README.md
├── server.js
├── start.bat
├── render.yaml
└── .gitignore
```

## Run บนเครื่อง

ต้องมี Node.js 18+ แล้วรัน:

```bash
node server.js
```

จากนั้นเปิด `http://localhost:3000`

หรือดับเบิลคลิก `start.bat`

## Deploy บน Render

1. สร้าง GitHub repository ใหม่
2. Upload ไฟล์ทั้งหมดในโฟลเดอร์นี้
3. ใน Render เลือก **New → Web Service**
4. เลือก repository นี้
5. Runtime: Node
6. Build Command: เว้นว่าง
7. Start Command: `node server.js`
8. Deploy

`render.yaml` มีค่าพร้อมใช้สำหรับ Blueprint deployment ด้วย

## หมายเหตุข้อมูล

- `products.json` เป็นข้อมูลที่สกัดจากตารางราคาที่อ่านได้จาก PDF เพื่อใช้ค้นหาในหน้าเว็บ
- หน้าเว็บแสดงเลขหน้า PDF ของแต่ละรายการ และมีปุ่มเปิด PDF ต้นฉบับไปยังหน้านั้น
- ราคาคือราคาที่ปรากฏใน Price List 2026 และควรตรวจสอบ PDF ต้นฉบับอีกครั้งก่อนใช้สั่งซื้อจริง
