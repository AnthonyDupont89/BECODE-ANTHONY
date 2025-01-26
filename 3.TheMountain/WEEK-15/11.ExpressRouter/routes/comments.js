const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
  res.send("Liste des commentaires")
})

router.get("/:id", (req,res) => {
  res.send(`Commentaire ${req.params.id} récupéré`)
})

router.post("/", (req,res) => {
  res.send("Commentaire enregistré")
})

router.put("/:id", (req,res) => {
  res.send(`Commentaire ${req.params.id} modifié`)
})

router.delete("/:id", (req, res) => {
  res.send(`Commentaire ${req.params.id} supprimé`)
})

module.exports = router