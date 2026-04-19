console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
// backend serverni qurishda node expresslardan foydalandik
//bosqichlarni qurishni 4 bosqichi bor

//1  // KIRISH CODE
// expressga kirib kelayotgan malumotlarga bogliq bolgan code lar yoziladi
app.use(express.static("public")); // har qanday brauwuzerdan kelayotgan zaproslar un public foulderi ochiq degani ,google expressga request qilayotgan payti public cleantlarga ochiq kn css ni styli shuning ichiga qoshiladi

app.use(express.json()); // kirib kelayotgan json formatidagi datani obj ga ozgartirib beradi /cleant vs server ortasidagi aloqa json korinishida vs express obj ogirib beradi

app.use(express.urlencoded({ extended: true }));
//agar bu code ni yozmasak html formdan post qilingan narsalarni express qabul qilmaydi ignor qiladi
/////////////////////////////////////

//2: Session CODE // Session tegishli express codelari
//////////////////////////////////////

//3 Views code
// backenda views yasaymiz yani Frontentni, ejs foulder orqali html frontentni backend ichida
app.set("views", "views");
app.set("view engine", "ejs");
//////////////////////////////////////

//4 Routing code
// backendni ichida Frontent ni yasaymiz
app.get("/hello", function (req, res) {
  res.end("<h1>Hello World</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1> Siz sovgalar bolimidasiz</h1>");
});

// pass qilamiz
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running seccessfully on port: ${PORT}`);
});
//YANI SERVER 3- portda muvofaqiyatli ishlayabdi degan port chiqadi

//Expressni 4 ta bolimda shakillantirib va serverga yukladik
// va localhost(3000) ni tersak , HELLO WORLD chiqadi (localhost bu bzining komp  saytlarni ochib beradigan ichki tizim)

// !! node: npm startga ruxsat beradi lekin
//     dev: npm run start  deb chaqiramiz ekan
