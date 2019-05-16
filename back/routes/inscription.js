// Mise en plce de la route concernant l'inscriptions
var express = require('express');
var router = express.Router();
const db = require('../models/bdd');
const UserModel = require('../models/schema');

// importation des module pour la mise en place du cryptage de mot de passe
var uid2 = require("uid2");
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");


router.post('/inscription', function(req, res, next) {
  UserModel.findOne(
    {mail:req.body.mail},function(err,user){
      if(!user){
        // Mise en plce du sel pour le cryptage du mot de passe
        var salt= uid2(32);
        const newUser = new UserModel({
          nom: req.body.nom,
          prenom: req.body.prenom,
          siret : req.body.siret,
          entreprise : req.body.entreprise,
          role : req.body.role,
          mail: req.body.mail.toLowerCase(),
          phone : req.body.phone,
          password: SHA256(req.body.password + salt).toString(encBase64),
          token: uid2(32),
          salt : salt,
          id: req.body._id
        });
        // if(req.body.prenom === '' && req.body.nom === '' && req.body.siret ==='' && req.body.mail ==='' && req.body.password === '' && req.body.tel === ''){
        //   return false
        // }
        newUser.save(function(error, user) {
          console.log(user);
          res.json({result: true, user});
        });
      }else{
        console.log("user already exist");
      res.redirect('/')
      }
    })
// console.log('Signup is running...',SHA256(req.body.password + salt).toString(encBase64));
});

module.exports = router;
