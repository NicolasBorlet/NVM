const fs = require("fs-extra");
const path = require("node:path");

const dir = "../prout/";

fs.ensureDir(dir, (err) => {
  for (var i = 0; i < 2; i++) {
    const fs = require("fs-extra");
    const crypto = require("crypto");

    const data = "some data to hash";

    const hash = crypto.createHash("sha256");
    hash.update(data + i);

    const filePath = path.join(__dirname, "./");

    const hashValue = hash.digest("hex");

    fs.mkdirSync(hashValue);

    const image = Buffer.alloc(16);
    fs.writeFileSync(filePath, `image.png`);

    const text = "This is a text file";
    fs.writeFileSync(filePath, `toto.txt`);
  }
});
