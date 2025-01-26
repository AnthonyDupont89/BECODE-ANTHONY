const express = require("express");
const router = express.Router();

// Récupérer tous les posts
router.get("/", (req, res) => {
  res.send("Liste des posts");
});

// Récupérer un post spécifique
router.get("/:id", (req, res) => {
  res.send(`Post avec l'ID ${req.params.id}`);
});

// Ajouter un nouveau post
router.post("/", (req, res) => {
  res.send("Post créé");
});

// Modifier un post
router.put("/:id", (req, res) => {
  res.send(`Post ${req.params.id} mis à jour`);
});

// Supprimer un post
router.delete("/:id", (req, res) => {
  res.send(`Post ${req.params.id} supprimé`);
});

module.exports = router;
