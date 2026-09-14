# Product Selector Project

โปรเจกต์สำหรับคัดเลือกสินค้า (Product Selector) รองรับทั้งการรันแบบ Static Web และ Node.js Server

## โครงสร้างโฟลเดอร์
- `public/` : ไฟล์เว็บหน้าบ้าน (HTML, CSS, JS)
- `data/` : เก็บไฟล์ข้อมูล JSON
- `server.js` : ไฟล์ Server (Express.js) สำหรับปรับแต่ง API/Render
- `start.bat` / `start_web.bat` : สคริปต์รันโปรเจกต์
- `render.yaml` : ไฟล์ตั้งค่าสำหรับการ Deploy ขึ้น Render.com

## การใช้งาน
1. เปิดไฟล์ `public/index.html` บน Browser เพื่อใช้งานแบบ offline
2. หรือใช้สคริปต์ `start.bat` เพื่อรันผ่าน Node.js server
