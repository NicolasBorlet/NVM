const path = require("node:path");
const fs = require("fs-extra");
const crypto = require("crypto");

const tab = [];

for (var i = 0; i < 500; i++) {
  tab.push(i);
}

const main = async () => {
  console.time("timer");

  await Promise.all(
    tab.map(async (i) => {
      const hash = crypto.createHash("sha256");
      hash.update(i.toString());

      const hashValue = hash.digest("hex");
      const dirPath = path.join(__dirname, "data", `${hashValue}`);

      await fs.ensureDir(dirPath);
      const image = Buffer.alloc(16);

      await Promise.all([
        fs.outputFile(path.join(dirPath, "image.png"), image),
        fs.outputFile(path.join(dirPath, "toto.txt"), hashValue),
      ]);
    })
  );
  console.timeEnd("timer");
};

main();
