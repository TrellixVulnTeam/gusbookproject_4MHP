const userModel = require("../models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const { uploadErrors } = require("../utils/errors.utils");

const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      req.file.detectedMimeType !== "image/jpg" &&
      req.file.detectedMimeType !== "image/png" &&
      req.file.detectedMimeType !== "image/jpeg"
    ) {
      throw Error("format invalide");
    }
    if (req.file.size > 500000) {
      throw Error("fichier trop volumineux");
    }
  } catch (err) {
    console.log("err " + err);
    const errors = uploadErrors(err);
    return res.status(201).json(errors);
  }

  const filename = req.body.name + ".jpg";

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../client/public/uploads/profil/${filename}`
    )
  );

  try {
    await userModel.findByIdAndUpdate(
      req.body.userId,
      {
        $set: { image: "./uploads/profil/" + filename },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(500).send({ message: err });
      }
    );
  } catch (error) {
    //return res.status(500).send({ message: error });
  }
};
