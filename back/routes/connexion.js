// Mise en place de la route concernant la connexion
var express = require('express');
var router = express.Router();
const db = require('../models/bdd');
const UserModel = require('../models/schema');


// Import des modules concernant le cryptage du mot de passe

var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");


  router.get('/connexion', (req, res, next) => {
    // Demande de recherche si l'utilisateur n'est pas présent dans la collection 
  UserModel.findOne(
    { mail: req.query.mail.toLowerCase() })
    .exec(function (err, user) {
      if(user){
        var hash = SHA256(req.query.password + user.salt).toString(encBase64);
         if (hash === user.password) {
            console.log("okok", login);
           res.json({ login: true, user })
           }
      } else {
         console.log("mauvais email", login);
         res.json({login: false });
       }
     })

    });







module.exports = router;
