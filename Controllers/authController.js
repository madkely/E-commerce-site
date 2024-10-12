const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const utilisateur = require("../models/utilisateur");

exports.signup = async (req, res) => {
  const { nom, email, mot_passe } = req.body;
  try {
    const utilisateur = await utilisateur.create({ nom, mot_passe, email });
    res
      .status(201)
      .json({ message: "Utilisateur créé avec succès", utilisateur });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la création de l’utilisateur" });
  }
};

exports.login = async (req, res) => {
  const { email, mot_passe } = req.body;
  try {
    const utilisateur = await utilisateur.findOne({ where: { email } });
    if (!utilisateur) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    const isMatch = await bcrypt.compare(mot_passe, utilisateur.mot_passe);
    if (!isMatch) {
      return res.status(400).json({ error: "Mot de passe incorrect" });
    }
    const token = jwt.sign(
      { id: utilisateur.id_utilisateur },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
};
