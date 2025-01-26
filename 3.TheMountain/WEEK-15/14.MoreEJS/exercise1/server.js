const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

const articles = require("./data/articles")

app.get("/", (req,res) => {
  
  res.render("index", { articles })
})

app.get("/article/:id", (req,res) => {
  const articleId = parseInt(req.params.id)
  const article = articles[articleId]

  if(!article) {
    return res.status(404).send("Article non trouvé")
  }

  res.render("article", { article })
})

app.listen(port, () => {
  console.log(`serveur démarré sur http://localhost:${port}`);
})
