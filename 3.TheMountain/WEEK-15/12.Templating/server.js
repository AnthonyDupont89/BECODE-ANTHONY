const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
  const pageTitle = "Bienvenue sur notre site!"
  const welcomeMessage = "Ce message est injecté dynamiquement via EJS."

  const items = [
    { name:"Apprendre Node.js", done: true },
    { name: "Maîtriser Express", done: false },
    { name: "Découvrir EJS", done: true },
    { name: "Créer un site dynamique", done: false }
  ]

  res.render("index", { title: pageTitle, message: welcomeMessage, tasks: items})
})

app.get("/profile/:username", (req, res) => {
  const users = {
    "henrique": { name: "Henrique", age: 28, city: "Paris", hobbies: ["Lecture", "Musique", "Voyages"] },
    "lucie": { name: "Lucie", age: 25, city: "Lyon", hobbies: ["Dessin", "Cinéma", "Randonnée"] },
    "max": { name: "Max", age: 30, city: "Marseille", hobbies: ["Jeux vidéo", "Cuisine", "Sport"] }
  }
  const username = req.params.username.toLowerCase()
  const user = users[username]

  if(!user) {
    return res.status(404).render("notfound", { title: "Utilisateur non trouvé" })
  }

  res.render("profile", { title: `Profil de ${user.name}`, user })
})

app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
})

