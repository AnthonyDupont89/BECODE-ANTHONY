const express = require("express")
const { v4: uuidv4 } = require("uuid")
const app = express()

// Middleware pour parser JSON
app.use(express.json())

// Port d'écoute du serveur
const port = 3000

let users = []

app.get("/api/users", (req,res) => {
    res.json(users)
})

app.post("/api/users", (req,res) => {
    const { api_key } = req.query // Vérification de l'api_key
    if (api_key !== "blabla") {
        return res.status(403).json({ message: "Forbidden: Invalid API Key" })
    }

    const { username, firstName, lastName, age, isAdmin } = req.body

    // Vérifier que tous les champs sont bien remplis
    if (!username || !firstName || !lastName || age === undefined || isAdmin === undefined) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const newUser = {
        id: uuidv4(),
        username,
        firstName,
        lastName,
        age,
        isAdmin
    }

    // Ajouter l'utilisateur à notre tableau
    users.push(newUser)

    // Retourner l'utilisatuer ajouté
    res.status(201).json(newUser)
})

app.put("/api/users/:id", (req, res) => {
    const { api_key } = req.query
    if (api_key !=="blabla") {
        return res.status(403).json({ message: "Forbiden: Invalid API Key"})
    }

    const { id } = req.params
    const { username, firstName, lastName, age, isAdmin } = req.body

    // Vérifier si l'utilisateur existe
    const userIndex = users.findIndex(u => u.id === id)
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    // Vérifier que tous les champs sont bien remplis
    if(!username || !firstName || !lastName || age === undefined || isAdmin === undefined) {
        return res.status(400).json({ message: "All fields are required"})
    }

    // Mettre à jour l'utilisateur
    users[userIndex] = {id, username, firstName, lastName, age, isAdmin }

    res.json(users[userIndex])
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})