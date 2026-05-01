// dars reja
//1 ssr uslubida Frontendimizni quramiz
//2 bootstrap css frameswork
//3 post methodi api requestni hosil qilish

console.log("Web Serverni boshlash");
const express = require("express"); //obcet
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//Mongo DB chaqirish

const db = require("./server").db();
const mongodb = require("mongodb");

//backend serverni qurishda node expresslardan foydalandikss
// qurishni 4 bosqichi bor
/////////////////////////////////////////////////////////////

1; // KIRISH CODE

app.use(express.static("public"));
//expressga kirib kelayotgan malumotlarga bogliq bolgan code lar yoziladi
// har qanday brauwuzerdan kelayotgan zaproslar un public foulderi ochiq degani ,google expressga request qilayotgan payti public cleantlarga ochiq kn css ni styli shuning ichiga qoshiladi
/////////////////////////////////////

//2: Session CODE // Session tegishli express codelari
//////////////////////////////////////
app.use(express.json());
// kirib kelayotgan json formatidagi datani obj ga ozgartirib beradi /cleant vs server ortasidagi aloqa json korinishida vs express obj ogirib beradi

app.use(express.urlencoded({ extended: true }));
//agar bu code ni yozmasak html formdan post qilingan narsalarni express qabul qilma
////////////////////

//3 Views ejs code
//backenda views yasaymiz yani Frontentni, ejs foulder orqali html frontentni backend ichida
app.set("views", "views");
app.set("view engine", "ejs");
// ////////////////////////////////////

//4 Routing code
//backendni ichida Frontent ni yasaymiz
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  //(req) uzini bersak butun jamoani korish mumkin
  //post malumotni uzi bn olib keladi va database yozadi
  //TODO: code with db here

  // console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

//=========== DATABASEDAN MALUMOTLARNI O'QITISH
app.get("/", function (req, res) {
  console.log("user enyered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("nimadur xatolik bo'ldi");
      } else {
        res.render("reja", { items: data });
      }
    });
});

//== get: database dan malumotni olish uchun ishlatiladi
app.get("/", function (req, res) {
  res.render("reja");
});

//=== author
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;