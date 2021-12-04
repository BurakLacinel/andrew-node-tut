const chalk = require("chalk");
const notes = require("./notes.js");

const command = process.argv[2];

if (command === "add") {
  console.log("Adding Note!");
} else if (command === "remove") {
  console.log("Removing note!");
}

// "node app.js add --title="This is my title"" komuduyla "argument" olarak "title" ekleyebiliriz.
// eklediğimiz "argument"ın 3.index te döndüğünü görürüz.
// "parsed"(çözümlenmeden) olmadan döner. String'i parse'lamak için npm ile "library" yükleyeceğiz.
console.log(process.argv);
