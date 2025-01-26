const express = require("express");
const path = require("path");

const app = express();
const root = path.join(__dirname, "views");

// Middleware pour protéger la route /secret
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "IAmTheBigBoss") {
    next();
  } else {
    res.status(401).send("Not authorized"); // Ajout du statut 401 Unauthorized
  }
};

// Routes principales
app.get("/", (req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(root, "about.html"));
});

app.get("/secret", verifyPassword, (req, res) => {
  res.sendFile(path.join(root, "secret.html"));
});

// Gestion des routes inconnues (404)
app.use((req, res) => {
  res.status(404).sendFile(path.join(root, "404.html"));
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
