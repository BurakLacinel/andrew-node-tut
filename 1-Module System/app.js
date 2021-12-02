const fs = require("fs");

fs.writeFileSync("notes.txt", "My Name is Burak.");

fs.appendFileSync("notes.txt", " I live in Istanbul.");
