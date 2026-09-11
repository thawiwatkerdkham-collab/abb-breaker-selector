# ABB Breaker Selector — Real Web App

ระบบนี้แยก Frontend / API / Database แล้ว

- User: `http://localhost:3000/`
- Admin: `http://localhost:3000/admin`
- Database: `data/products.json` (แก้ไขผ่าน Admin ได้ ไม่ต้อง rebuild)
- Password เริ่มต้นใน `start.bat` คือ `admin123` — เปลี่ยนก่อนใช้งานจริง

## วิธีรัน
1. ติดตั้ง Node.js
2. ดับเบิลคลิก `start.bat`
3. เปิด browser ไปที่ `http://localhost:3000`

## Admin ทำอะไรได้
- เพิ่มสินค้า
- แก้ราคา / Current / Icu / Ics / Trip / Order Code
- เปิด/ปิดสินค้า
- ข้อมูลถูกบันทึกถาวรใน database JSON

หมายเหตุ: รุ่นนี้เป็นฐานสำหรับนำขึ้น internal server/cloud ต่อไป หากจะใช้งานหลายคนพร้อมกันในบริษัท แนะนำย้าย database เป็น PostgreSQL และเพิ่มระบบ user/role จริง
