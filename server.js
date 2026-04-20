// dars reja
//1 ssr uslubida Frontendimizni quramiz
//2 bootstrap css frameswork
//3 post methodi api requestni hosil qilish

// console.log("Web Serverni boshlash");
// const express = require("express");
// const app = express();
// const http = require("http");
// // const fs = require("fs");
// backend serverni qurishda node expresslardan foydalandik
//bosqichlarni qurishni 4 bosqichi bor

//1  // KIRISH CODE
// expressga kirib kelayotgan malumotlarga bogliq bolgan code lar yoziladi
// app.use(express.static("public")); // har qanday brauwuzerdan kelayotgan zaproslar un public foulderi ochiq degani ,google expressga request qilayotgan payti public cleantlarga ochiq kn css ni styli shuning ichiga qoshiladi

// app.use(express.json()); // kirib kelayotgan json formatidagi datani obj ga ozgartirib beradi /cleant vs server ortasidagi aloqa json korinishida vs express obj ogirib beradi

// app.use(express.urlencoded({ extended: true }));
//agar bu code ni yozmasak html formdan post qilingan narsalarni express qabul qilmaydi ignor qiladi
/////////////////////////////////////

//2: Session CODE // Session tegishli express codelari
//////////////////////////////////////

//3 Views code
// backenda views yasaymiz yani Frontentni, ejs foulder orqali html frontentni backend ichida
// app.set("views", "views");
// app.set("view engine", "ejs");
//////////////////////////////////////

//  4 Routing code
// backendni ichida Frontent ni yasaymiz
// app.get("/", function (req, res) {
//   res.render("harid");
// });
// // pass qilamiz
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running seccessfully on port: ${PORT}`);
// });
//YANI SERVER 3- portda muvofaqiyatli ishlayabdi degan port chiqadi

//Expressni 4 ta bolimda shakillantirib va serverga yukladik
// va localhost(3000) ni tersak , HELLO WORLD chiqadi (localhost bu bzining komp  saytlarni ochib beradigan ichki tizim)

// !! node: npm startga ruxsat beradi lekin
//     dev: npm run start  deb chaqiramiz ekan

console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

///1kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///////////////3
app.set("views", "views");
app.set("view engine", "ejs");

////4
app.post("/create-item", (req, res) => {
  //(req) uzini bersak butun jamoani korish mumkin
  //post malumotni uzi bn olib keladi va database yozadi
  console.log(req.body);
  res.json({ test: "seccess" });
});

app.get("/", function (req, res) {
  //(get)databas dan malumotni olishda
  res.render("harid");
});
// pass qilamiz
const server = http.createServer(app);
let PORT = 3007;
server.listen(PORT, function () {
  console.log(`The server is running seccessfully on port: ${PORT}`);
});
