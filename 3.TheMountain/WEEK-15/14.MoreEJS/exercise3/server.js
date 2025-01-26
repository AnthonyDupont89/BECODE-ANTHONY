const express = require("express")
const app = express()
const port = 3000

// Configuration EJS
app.set("view engine", "ejs")
// app.use(express.static("public"))

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" })
})

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" })
})

// lance le server
app.listen(port, () => {
  console.log(`serveur démarré sur http://localhost:${port}`);
})