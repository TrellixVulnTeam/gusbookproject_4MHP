const userModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

//récupérer tous les users

module.exports.getAllUsers = async (req, res) => {
  const users = await userModel.find().select("-password"); // select() permet de ne pas récupérer les éléments passer en objet
  res.status(200).json(users);
};

// récupérer un utilisateur par son ID

module.exports.userInfo = (req, res) => {
  // méthode de mongoose.objectID qui permet de vérifier en DB si l'ID existe
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID user inconnue : " + req.params.id);
  else
    userModel
      .findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Id user inconnue : " + err);
      })
      .select("-password");
};

module.exports.updateUser = async (req, res) => {
  console.log("update controller");
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID user inconnue : " + req.params.id);

  try {
    console.log("update controller try");
    await userModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          description: req.body.description,
        },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      },
      (err, docs) => {
        if (!err) {
          console.log("update controller ok");

          return res.send(docs);
        }
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    console.log("update controller erro" + err);
    //return res.status(500).json({ message: err }); errorMongooseError : Query was already executed
  }
};
