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


// app.listen(port, () => {
//   console.log(`Bebras klauso ${port} porto`)
// });

// app.get("/trees/:tipas", (req, res) => {

//     // console.log(req.query.sort);

//     const sql = `
//     SELECT id, type, title, height
//     FROM trees
//     WHERE type = ? OR type = ?
//     `;
//     con.query(sql, [req.params.tipas, req.query.sort], (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

//INNER JOIN

app.get("/get-it/inner-join", (req, res) => {
  const sql = `
  SELECT *
  FROM clients AS c
  INNER JOIN phones AS p
  ON c.id = p.clients_id 
  `;
  con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});
// SELECT column_name(s)
// FROM table1
// INNER JOIN table2
// ON table1.column_name = table2.column_name;


// READ
app.get("/trees", (req, res) => {
  const sql = `
  SELECT id, type, title, height
  FROM trees
  `;
  con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/trees", (req, res) => {
  const sql = `
  INSERT INTO trees (title, height, type)
  VALUES (?, ?, ?)
  `;
  con.query(sql, [req.body.title, req.body.height, req.body.type], (err, result) => {
      if (err) throw err;
      res.send(result);
  });

});


//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/trees/:id", (req, res) => {
  const sql = `
  DELETE FROM trees
  WHERE id = ?
  `;
  con.query(sql, [req.params.id], (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

//EDIT
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put("/trees/:id", (req, res) => {
  const sql = `
  UPDATE trees
  SET title = ?, height = ?, type = ?
  WHERE id = ?
  `;
  con.query(sql, [req.body.title, req.body.height, req.body.type, req.params.id], (err, result) => {
      if (err) throw err;
      res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto!`)
});