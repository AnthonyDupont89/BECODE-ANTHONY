const express = require("express")
const path = require("path")
const app = express()
const port = 3000

// app.use(express.urlencoded( {extended: true} ))
// app.use(express.json())


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

const obj = {
  school: "BeCode",
  year: 2023,
};

app.post("/", (req, res) => {
  res.json(obj);
});



app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "/404.html"));
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)  
})

