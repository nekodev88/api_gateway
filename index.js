const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;



const db = mysql.createConnection({
    host: '128.199.92.221',       // เปลี่ยนตามการตั้งค่าของคุณ
    user: 'cat_api00',            // ชื่อผู้ใช้ MySQL ของคุณ
    password: 'cK3GnAzDdKt6p4bF',            // รหัสผ่าน MySQL ของคุณ
    database: 'cat_api00', // ชื่อฐานข้อมูลที่ต้องการเชื่อมต่อ
    port: 3596 // กำหนดพอร์ตใหม่ที่นี่
  });

  

  

  
db.connect((err) => {
  if (err) {
    console.error('ไม่สามารถเชื่อมต่อกับฐานข้อมูล:', err);
    return;
  }
  console.log('เชื่อมต่อฐานข้อมูล MySQL สำเร็จ');
});



// สร้าง API เรียกดูข้อมูล
app.get('/setting', (req, res) => {
  const sql = 'SELECT * FROM setting_all'; // แก้ไขตามตารางของคุณ
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});







app.get('/', (req, res) => {
  res.send('Hello World')
})

 



// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`เซิร์ฟเวอร์เริ่มที่ http://localhost:${port}`);
  });