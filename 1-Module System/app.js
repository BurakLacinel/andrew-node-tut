const chalk = require("chalk");

const notes = require("./notes.js");

// terminal'de dosyayı çalıştırmak için "node app" yerine, "node app.js burak" komudunu girersek; aşağıdaki kod'dan "burak" argument'ı döner.
console.log(process.argv[2]);
