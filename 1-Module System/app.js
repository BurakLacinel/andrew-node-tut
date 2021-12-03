// paketler "install" sonrasında, paket adı "require" edilerek projeye dahil edilir. (node js "import"u henüz desteklemiyor.Bu sebepten "require" kullanıyoruz.)
const validator = require("validator");
const notes = require("./notes.js");

const msg = notes();

console.log(msg);

console.log(validator.isEmail("andrew@example.com"));
console.log(validator.isURL("https://google.com"));

//// NPM
// Projenin "root" dizininde, "npm init" komuduyla (sonrasında default değerlere bağlı kalarak, birkaç kere "enter"a basacağız.İşlem sonunda "package.json"(hangi paketlerin kullanıldığı bilgisi yer alır) oluşacak.), "npm" kullanmaya başlayabiliriz.
// (email-validation vs gibi işler yaptığımız da tekerleği yeniden icat etmek yerine, mpn ile paketler yükleriz.)
// "npm i validator@10.8.0" komuduyla "validator.js" adlı pakeedi yükledik.
// Pakedi yüklediğimizde iki şey olur;
// 1- node-modules oluşur; Yüklediğimiz paketler buraya eklenir. Manuel olarak kurcalanmamalıdır. (silinir ise veya olması gerekirken yok ise, "npm install" komuduyla yeniden oluşturulur.)
// 2- package-lock.json oluşur; npm'i daha hızlı ve güvenli yapar. Yüklediğimiz paketlerin versiyon bilgileri burada yer alır. Bu dosya'da manuel olarak kurcalanmamalıdır.
