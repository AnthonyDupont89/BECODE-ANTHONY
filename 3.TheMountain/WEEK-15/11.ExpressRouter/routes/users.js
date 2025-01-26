const express = require("express")
const router = express.Router() // création du router

// route pour récupérer tous les utilisateurs
router.get("/", (req, res) => {
  res.send("Liste des utilisateurs")
})

// route pour récupérer un utilisateur spécifique
router.get("/:id", (req,res) => {
  res.send (`Utilisateur avec l'ID ${req.params.id}`)
})

// route pour créer un utilisateur
router.post("/", (req, res) => {
  const newUser = req.body; // Récupère les données envoyées en JSON
  res.send(`Utilisateur créé avec les infos : ${JSON.stringify(newUser)}`);
})

// route pour mettre à jour un utilisateur
router.put("/:id", (req,res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.send(`Utilisateur ${userId} mis à jour avec : ${JSON.stringify(updatedData)}`);
})

// route pour supprimer un utilisateur
router.delete("/:id", (req, res) => {
  res.send(`Utilisateur ${req.params.id} supprimé`)
})

module.exports = router