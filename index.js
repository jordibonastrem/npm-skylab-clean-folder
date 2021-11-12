#!/usr/bin/env node
const fs = require("fs");
const rimraf = require("rimraf");
const path = require("path");

const typeOfThing = process.argv[2];
const pathOfThing = process.argv[3];

if (typeOfThing !== "-f" && typeOfThing !== "--folder") {
  console.log("Incorrect command, -f for files --folder for folders.");
} else {
  try {
    if (fs.existsSync(pathOfThing)) {
      if (typeOfThing === "-f") {
        fs.unlinkSync(pathOfThing);
      } else {
        fs.rmdir(pathOfThing, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }

          console.log(`${pathOfThing} is deleted!`);
        });
      }

      // fs.unlinkSync(pathOfThing);
    } else if (typeOfThing === "-f") {
      console.log("file doesnt exist");
    } else {
      console.log("folder doesnt exist");
    }
  } catch (err) {
    console.error(err);
  }
}

// if (typeOfThing !== "-f" || typeOfThing !== "--folder") {
//   console.log("Wrong command");
//   process.exit(0);
// } else {
//   try {
//     if (fs.existsSync(path(pathOfThing))) {
//       console.log(pathOfThing);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
