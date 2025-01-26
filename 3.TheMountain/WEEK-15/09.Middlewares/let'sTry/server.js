const express = require('express');
const app = express();




// Middleware pour parser les données x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(req.query); // { name: 'Anthony' }
  res.send('Données reçues');
});

app.post('/', (req, res) => {
    console.log(req.body); // Maintenant, req.body ne sera plus undefined
    res.send('Reçu !');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
