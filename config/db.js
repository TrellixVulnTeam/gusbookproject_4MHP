const mongoose = require("mongoose");

let options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.oqpou.mongodb.net/gusbookproject",
    options
  )
  .then(() => console.log("Connexion à MongoDB ok! "))
  .catch((err) => console.log("Echec de la connexion à MongoDB", err));
