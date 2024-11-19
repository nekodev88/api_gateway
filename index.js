const express = require('express');
//const mysql = require('mysql');

const app = express();
const port = 3000;

 

 


app.get('/', (req, res) => {
  res.send('Hello World cat 555')
})

 



// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`เซิร์ฟเวอร์เริ่มที่ http://localhost:${port}`);
  });
