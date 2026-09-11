# ABB Breaker Selector — Web Prototype

นี่คือเวอร์ชัน Web ของ ABB Breaker Selector Prototype v4
- เปิด `public/index.html` ได้โดยตรงใน browser
- หรือวางโฟลเดอร์ `public` ไว้บน static web hosting ได้
- ฐานข้อมูลสินค้ายังฝังอยู่ในหน้าเว็บเหมือน Prototype เดิม

## ถ้าจะทำเป็นระบบจริง
ขั้นถัดไปควรแยก:
Frontend → Backend/API → Database
และเพิ่ม Admin Panel สำหรับ:
- เพิ่ม/แก้/ปิดการใช้งานสินค้า
- อัปเดตราคา
- Import Excel/CSV
- เก็บประวัติราคา
- จัดการสิทธิ์ Admin/User

เวอร์ชันนี้ยังไม่มีระบบ Login/Database/แก้ข้อมูลจากหน้า Admin
