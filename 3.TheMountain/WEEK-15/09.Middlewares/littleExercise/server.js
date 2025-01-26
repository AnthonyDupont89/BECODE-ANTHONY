const express = require("express");
const app = express();


const root = __dirname;

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  res.on("finish", () => { // Quand la réponse est terminée
    console.log(`${req.method} ${req.url} ${res.statusCode}`);
  });
  next(); // Passe à la prochaine route
});

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// Route POST "/" qui renvoie un JSON
const obj = {
  school: "BeCode",
  year: 2023,
};

app.post("/", (req, res) => {
  res.json(obj);
});

// Middleware pour gérer les routes inexistantes (404)
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
