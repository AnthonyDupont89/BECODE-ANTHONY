const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));


const members = []; // Tableau qui stockera les membres ajoutés


app.get("/", (req,res) => {
  res.render("index", { members })
})

app.get("/add", (req, res) => {
  res.render("add")
})

app.post("/add", (req, res) => {
  
  const { firstName, lastName, age } = req.body;

  // Ajouter les données au tableau
  members.push({ firstName, lastName, age });

  console.log("Membre ajouté :", { firstName, lastName, age });
  res.redirect("/"); // Redirige vers la page d'accueil après soumission
});

app.listen(port, () => {
  console.log(`serveur démarré sur http://localhost:${port}`);
})