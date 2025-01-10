const path = require("path");

setTimeout(() => {
  console.log(path.parse(__filename).name);
}, 3000);

