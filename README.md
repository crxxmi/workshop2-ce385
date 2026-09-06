ข้อ 1 Functions
สร้างฟังก์ชันสำหรับตรวจสอบและคำนวณคะแนน ได้แก่
- `isValidScore(score)` ตรวจสอบว่าคะแนนเป็นตัวเลขและอยู่ระหว่าง 0-100
- `toGrade(score)` แปลงคะแนนเป็นเกรด A, B+, B, C+, C, D+, D และ F
- `calculateWorkshopScore(raw, full, weight)` แปลงคะแนนดิบเป็นคะแนนตามน้ำหนัก
- `calculateTotal(...)` คำนวณคะแนนรวมจากคะแนน 5 ส่วน
มีการทดสอบข้อมูลนักศึกษา 3 คน และทดสอบค่า default ของ `calculateWorkshopScore()`

ข้อ 2 Collection
สร้างข้อมูลนักศึกษา 6 คน โดยเก็บข้อมูล id, name, major, score และ contact
ฟังก์ชันที่สร้าง ได้แก่
- `findById()` ค้นหานักศึกษาจาก ID
- `findByMajor()` ค้นหานักศึกษาตามสาขา
- `hasFailingStudent()` ตรวจสอบว่ามีนักศึกษาที่สอบตกหรือไม่
- `getEmail()` ดึง email โดยใช้ optional chaining `?.` และ nullish coalescing `??`

ข้อ 3 Transform
ใช้ `map`, `filter` และ `reduce` ในการประมวลผลข้อมูล
ฟังก์ชันที่สร้าง ได้แก่
- `getNames()` ดึงรายชื่อนักศึกษา
- `getPassedStudents()` หานักศึกษาที่สอบผ่าน
- `getTotalScore()` คำนวณคะแนนรวม
- `getAverageScore()` คำนวณคะแนนเฉลี่ย
- `countByGrade()` นับจำนวนนักศึกษาแต่ละเกรด
- `getTopStudent()` หานักศึกษาที่ได้คะแนนสูงสุด
ข้อ 3 ไม่ใช้ `for` หรือ `while`
