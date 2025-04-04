const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://okekegabriel84:gabe84@mycluster.pwb8o.mongodb.net/resfulAPI')
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch((error) => console.log('Erreur de connexion à MongoDB:', error));

// Routes
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});