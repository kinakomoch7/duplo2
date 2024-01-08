import express from 'express';
import mysql from "mysql2";
import cors from "cors";

const connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: 'Gurimu14',
  database: 'duplo',
});


const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));


app.get("/", (req, res) => {
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

app.get('/get', (req, res) => {
  const id = req.query.id;
  const sql = `SELECT * FROM PAYMENT WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json(result);
    }
  });
});


app.get('/add', (req, res)=> {
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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});