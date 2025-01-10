const fs = require('fs');

const readStream = fs.createReadStream("./hugeText.html");
const writeStream = fs.createWriteStream("./newText.html");

// readStream.on("data", (chunk) => {
//   console.log("--------- NEW CHUNK --------");
//   console.log(chunk);

//   writeStream.write("\n NEW CHUNK \n");
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Data has been written successfully.');
});