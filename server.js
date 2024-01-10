import express from 'express';
import mysql from "mysql2";
import cors from "cors";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: '0319',
  database: 'duplo',
});


const app = express();
const port = 3000;

app.use(cors({ origin: "https://storied-cendol-9a6ceb.netlify.app" }));


app.get("/getUser", (req, res) => {
  const email = req.query.mail;
  
  const sql = `SELECT * FROM user WHERE mail = '${email}'`;
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/getPayment', (req, res) => {
  const id = req.query.id;
  const sql = `SELECT * FROM PAYMENT WHERE id = ${id} ORDER BY timeStamp DESC`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json(result);
    }
  });
});


app.get('/addPayment', (req, res)=> {
  const id = req.query.id;
  const note = req.query.note;
  const money = req.query.money;

  const sql = `INSERT INTO PAYMENT(id, note, money) VALUES(${id}, ${note}, ${money})`

  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: 'Failed to add' });
    } else {
      res.status(200).json(result);
    }
  });
})

app.get('/deletePayment', (req, res) => {
  const timeStamp = req.query.timeStamp;
  console.log(timeStamp);

  const sql = `DELETE FROM PAYMENT WHERE timeStamp = '${timeStamp}'`;

  connection.query(sql, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: 'Payment deleted' });
    }
  });
});

app.get('/updatePartnerName', (req, res) => {
  const id = req.query.id;
  const partnerName = req.query.partnerName;

  const sql = `UPDATE user SET partnerName = '${partnerName}' WHERE id = ${id}`;

  connection.query(sql, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: 'Partner name updated' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});