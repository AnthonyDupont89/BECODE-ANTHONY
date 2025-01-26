const express = require("express");
const app = express();
const usersRoutes = require("./routes/users"); 
const postsRoutes = require("./routes/posts"); // Ajout des posts
const commentsRoutes = require("./routes/comments");

const PORT = 3000;

app.use(express.json()); // Middleware pour JSON
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes); // Connexion des routes posts
app.use("/comments", commentsRoutes);

app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});
