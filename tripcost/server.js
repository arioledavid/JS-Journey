const express = require("express");
const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const app = express();

app.use(express);

app.post("/trip", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  console.log(trips);
  trips.insertOne({ name: name }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ err: err });
      return;
    }
    console.log(result);
    res.status(200).json({ ok: true });
  });
});

app.get("/trip", (req, res) => {
  /*  */
});

app.post("/expense", (req, res) => {
  /* */
});

app.get("/expenses", (req, res) => {
  /* */
});

app.listen(3000, () => console.log("Server ready"));

let db, trips, expenses;

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    db = client.db("tripcost");
    trips = db.collection("trips");
    expenses = db.collection("expenses");
  }
);

app.use(express.json());
