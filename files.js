const fs = require("fs-extra");
const path = require("node:path");

const dir = "../prout/";

fs.ensureDir(dir, (err) => {
  for (var i = 0; i < 2; i++) {
    const fs = require("fs-extra");
    const crypto = require("crypto");

    const hash = crypto.createHash("sha256");
    hash.update(i.toString());

    const hashValue = hash.digest("hex");

    const dirPath = path.join(__dirname, "data", `${hashValue}`);

    fs.ensureDirSync(dirPath);

    const image = Buffer.alloc(16);
    fs.outputFileSync(path.join(dirPath, "image.png"), image);

    fs.outputFileSync(path.join(dirPath, "toto.txt"), hashValue);
  }
});
