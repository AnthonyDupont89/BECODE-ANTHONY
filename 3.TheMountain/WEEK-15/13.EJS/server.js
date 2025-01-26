const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, "0") // Formate pour toujours avoir 2 chiffres
  const time = `${hours}h${minutes}`

  res.render("index", {currentTime: time})
})

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
})
