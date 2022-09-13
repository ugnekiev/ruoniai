const express = require("express");
const app = express();
const port = 3003;
//naudojam cors (npm i cors)
const cors = require("cors");
app.use(cors());
//naudojam sql (npm i mysql)
const mysql = require("mysql");
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//conection su duomenu baze
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ruo_nei_ka",
});

app.get('/', (req, res) => {
  res.send('Labas, Bebrai!')
})

app.get('/ate', (req, res) => {
  res.send('Ate, Bebrai!')
})

//READ
// SELECT column1, column2, ...
// FROM table_name;

app.get("/trees/:tipas", (req, res) => {
  const sql = `
  SELECT id, type, title, height
  FROM trees
  WHERE type = ? OR type = ?

`;

  con.query(sql, [req.params.tipas, req.query.sort], (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});


app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto`)
});