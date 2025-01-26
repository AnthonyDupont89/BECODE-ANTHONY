const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/posts", (req, res) => {
  const posts = require("./data/posts")
  res.render("posts", {posts})
})

app.listen(port, () => {
  console.log(`serveur démarrer sur http://localhost:${port}`);
})