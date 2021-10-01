const signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email"))
    errors.email = "Email incorrect ou déjà pris";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Cet pseudo existe déjà";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email existe déjà";

  return errors;
};

const signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";

  return errors;
};

const uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("format invalide"))
    errors.format = "Format incompatible";

  if (err.message.includes("fichier trop volumineux"))
    errors.maxSize = "fichier dépasse 500ko";
  return errors;
};

module.exports = { signUpErrors, signInErrors, uploadErrors };
