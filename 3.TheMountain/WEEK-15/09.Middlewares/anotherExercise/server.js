const app = require("express")();

app.use((req, res, next) => {
  console.log("Inside the middleware");

  if (req.get("Authorization") === "123") {
    next();
  } else {
    res.send("Not authorized");
    // console.log("Not authorized");
  }
});

app.post("/", (req, res) => {
  res.send("Hello World");
  // console.log("Authorization");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
