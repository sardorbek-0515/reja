//Backend tili            Single-thread , Multi-thread ga bolinadi

//  Single-thread - nodejs -> (Single-thread) hissoblanadi = bir xonali degani Event loop orqali ko‘p vazifalarni navbat bilan bajaradi.

//  Multi-thread - kop xonali NodeJS o‘zining Worker Threads modulidan foydalansa, bir nechta oqimda kodni bajarish mumkin.
//Bu CPU-intensiv hisob-kitoblar uchun foydali, chunki bitta thread sekinlashtirishi mumkin.

//node bu nechta odam bolsa ham hamma  requestga bitta eshik ochilib hammani talabini qondiradi  resulsga nisbatan kam harajatli emas

//PHP da esa har bir requestga alohida php ochiladi resulsga nisbatan kop harajatli emas

// ================ CALLBACK FUNCTION ========
//CALLBACK bizga malumotlarni band qilmaslik uchun kerak

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va ko'proq hato qiling", // 20-30
//   "o'zingizga ishlashni boshlang", // 30-40
//   "yoshlarga investitsiya qiling", // 40-50
//   "endi dam oling, natijangizdan rohatlaning", //60
// ];
// function maslahatBering(a, callback) {
//   if (typeof a !== "number")
//     callback("insert a number", null); //buyerda 1 qism xatolikka tegishli insert a namber yani raqam kiriting ,2 qism qaytarmoqchi bolgan resultga tegishli null
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }
// //CALLBACK FUNCTION chaqirishda parametr sifatida function ishga tushadi
// maslahatBering(60, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

//==================ms:calback setInterval davomiy chiqadi==========================

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va ko'proq hato qiling", // 20-30
//   "o'zingizga ishlashni boshlang", // 30-40
//   "yoshlarga investitsiya qiling", // 40-50
//   "endi dam oling, natijangizdan rohatlaning", //60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number")
//     callback("insert a number", null); //buyerda 1 qism xatolikka tegishli insert a namber yani raqam kiriting ,2 qism qaytarmoqchi bolgan resultga tegishli null
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[4]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passsed here 1");
//===============================================

//================ Asynchronous functionlarni qo'llash=============
// Asynchronous function  synchronous function ishga tushib bolgach ishga tushadi,shuning un bizning  Single-thread umuman bant qilmasdan  operatsiyalarni (event loop orqali) street poolga tashlayveradi

// console.log("Jack Ma maslahatlari");
// const list1 = [
//   "yahshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va ko'proq hato qiling", // 20-30
//   "o'zingizga ishlashni boshlang", // 30-40
//   "yoshlarga investitsiya qiling", // 40-50
//   "endi dam oling, natijangizdan rohatlaning", //60
// ];
// //*define*/
// async function maslahatBeri(a) {
//   if (typeof a !== "number")
//     throw new Error("insert a number"); /// throw new Error hatolik xosil qil bizga erorr kere bolsa
//   else if (a <= 20) return list1[0];
//   else if (a > 20 && a <= 30) return list1[1];
//   else if (a > 30 && a <= 40) return list1[2];
//   else if (a > 40 && a <= 50) return list1[3];
//   else if (a > 50 && a <= 60) return list1[4];
//   else {
//return list[5];
// =============== async functionda setTimeout ishlamaydi
// setTimeout(function () {
//   return list1[5];
// }, 5000);
//==============================================

// lekin PROMISE= ni ichida (setTimeout)ishlaydi//vs endi har bir call dan kn 5 sekunt kutib kn request keladi
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list1[4]);
//       }, 5000);
//     });
//   }
// }
// (setInterval)= bunda 1 sekuntda ishga tushadi lekn bir marta,agar biz   collback orqali setInterval bn yozganimizada  qachon javob kelsa osha javobni qayta qayta olaveradi
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list1[5]);
//       }, 1000);
//     });
//   }
// }

//define qiasmda = Asynchronous ishlatib,
//call qilishni 2 xil usuli bor 1* then /catch, 2* asyn va await

// /*call, then va catch */
// // then va catch ichma ich yozish kerak ,catch bu tutib olish degadi
// console.log("passed here 0");
// maslahatBeri(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// //===============================================
// // //asyn va await bu qisqa chaqirish

// async function run() {
//   let javob = await maslahatBeri(25);
//   console.log(javob);
//   javob = await maslahatBeri(65);
//   console.log(javob);
//   javob = await maslahatBeri(41);
//   console.log(javob);
// }
// run();

//============================ MITASK-A==================================

function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("e", "engineer"));
console.log(countLetter("n", "engineer"));
console.log(countLetter("r", "engineer"));

//============================ MITASK-b==================================

function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
//natija 7
