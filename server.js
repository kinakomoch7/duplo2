import express, { Router } from "express";
import serverless from "serverless-http";
import mysql from "mysql2";
import cors from "cors";

const api = express();
const router = Router();

const connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: 'Gurimu14',
  database: 'duplo',
});

api.use(cors({ origin: "http://localhost:5173" }));


router.get("/getUser", (req, res) => {
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

router.get("/getPayment", (req, res) => {
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

router.get("/addPayment", (req, res)=> {
  const id = req.query.id;
  const note = req.query.note;
  const money = req.query.money;

  const sql = `INSERT INTO PAYMENT(id, note, money) VALUES(${id}, '${note}', ${money})`;

  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: 'Failed to add' });
    } else {
      res.status(200).json(result);
    }
  });
});

api.use("/api", router);

export const handler = serverless(api);
