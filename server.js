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

app.use(cors({ origin: "http://localhost:5173" }));


app.get("/getUser", (req, res) => {
  const email = req.query.mail;
  
  const sql = `SELECT * FROM user WHERE mail = ?`;
  connection.query(sql, [email], (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/getPayment', (req, res) => {
  const id = req.query.id;
  const sql = `SELECT * FROM PAYMENT WHERE id = ? ORDER BY timeStamp DESC`;

  connection.query(sql, [id], (error, result) => {
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

  const sql = `INSERT INTO PAYMENT(id, note, money) VALUES(?, ?, ?)`

  connection.query(sql, [id, note, money], (error, result) => {
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

  const sql = `DELETE FROM PAYMENT WHERE timeStamp = ?`;

  connection.query(sql, [timeStamp], (error) => {
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

  const sql = `UPDATE user SET partnerName = ? WHERE id = ?`;

  connection.query(sql, [partnerName, id], (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: 'Partner name updated' });
    }
  });
});

app.get('/registerUser', (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const icon = req.query.icon;

  const sql = `INSERT INTO user(name, mail, icon) VALUES(?, ? ,?)`;

  connection.query(sql, [name, email, icon], (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: 'User registered' });
    }
  });
});

app.get('/getPartner', (req, res) => {
  const userId = req.query.userId;

  const sql = `SELECT * FROM PARTNER WHERE userId = ?`;
  connection.query(sql, [userId], (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/addPartner', (req, res)=> {
  const userId = req.query.userId;
  const partnerName = req.query.partnerName;

  const sql = `INSERT INTO PARTNER(userId, partnerName) VALUES(?, ?)`

  connection.query(sql, [userId, partnerName], (error, result) => {
    if (error) {
      console.log(error)
      res.status(500).json({ message: 'Failed to add' });
    } else {
      res.status(200).json(result);
    }
  });
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});