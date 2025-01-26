const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Fonction pour servir un fichier HTML
const servePage = (res, file) => {
    res.sendFile(path.join(__dirname, file));
};

// Route pour "/"
app.get("/", (req, res) => {
    servePage(res, "index.html");
});

// Route pour "/about"
app.get("/about", (req, res) => {
    servePage(res, "about.html");
});

// Route pour "/secret"
app.get("/secret", (req, res) => {
    const password = req.query.password;

    if (password === "IAmTheBigBoss") {
        servePage(res, "secret.html");
    } else {
        res.status(403).send("<h1>403 Forbidden</h1><p>Access Denied</p>");
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
