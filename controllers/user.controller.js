const userModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

//récupérer tous les users

module.exports.getAllUsers = async (req, res) => {
  const users = await userModel.find().select("-password"); // select() permet de ne pas récupérer les éléments passer en objet
  res.status(200).json(users);
};

// récupérer un utilisateur par son ID

module.exports.userInfo = async (req, res) => {
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

// edit de la description du user
module.exports.updateUser = async (req, res) => {
  //console.log("update controller");
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID user inconnue : " + req.params.id);

  try {
    //console.log("update controller try");
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

// delete user

module.exports.deleteUser = async (req, res) => {
  // méthode de mongoose.objectID qui permet de vérifier en DB si l'ID existe
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID user inconnue : " + req.params.id);

  try {
    await userModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "User bien supprimé" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// ajout d'un user follow
module.exports.follow = async (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idToFollow)
  )
    return res.status(400).send("ID user inconnue : " + req.params.id);

  // ajout à "followers" list dans la collection du user

  try {
    await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { followings: req.body.idToFollow },
      },
      {
        new: true,
        upsert: true,
      },
      (err, docs) => {
        if (!err) {
          res.status(201).json(docs);
        } else return res.status(400).json(err);
      }
    );
  } catch (err) {
    //return res.status(500).json({ message: err });
  }

  // ajout à "followers" list dans la collection du user
  try {
    await userModel.findByIdAndUpdate(
      req.body.idToFollow,
      {
        $addToSet: { followers: req.params.id },
      },
      {
        new: true,
        upsert: true,
      },
      (err, docs) => {
        if (!err) {
          // res.status(201).json(docs);
          console.log("query two OK");
        } else return res.status(400).json(err);
      }
    );
  } catch (err) {
    //return res.status(500).json({ message: err });
  }
};

// enlever un user follow
module.exports.unfollow = async (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idToUnfollow)
  )
    return res.status(400).send("ID user inconnue : " + req.params.id);

  //suppression de "followers " list du user
  try {
    await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { followings: req.body.idToUnfollow },
      },
      {
        new: true,
        upsert: true,
      },
      (err, docs) => {
        if (!err) {
          res.status(201).json(docs);
        } else return res.status(400).json(err);
      }
    );
  } catch (err) {
    //return res.status(500).json({ message: err });
  }

  //suppression de "followings " list de la personne suivie

  try {
    await userModel.findByIdAndUpdate(
      req.body.idToUnfollow,
      {
        $pull: { followers: req.params.id },
      },
      {
        new: true,
        upsert: true,
      },
      (err, docs) => {
        if (!err) {
          //res.status(201).json(docs);
        } else return res.status(400).json(err);
      }
    );
  } catch (err) {
    //return res.status(500).json({ message: err });
  }
};
