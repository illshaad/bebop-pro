const db = require('./bdd');

// Mise en place du schéma User
const UserSchema = db.mongoose.Schema({
  nom: { type: String, required: true },
  prenom:{ type: String, required: true },
  siret: { type: Number, required: true },
  entreprise : String,
  role: String,
  mail : { type: String, required: true },
  phone:{ type: Number, required: true },
  password: { type: String, required: true },
  token: String,
  salt: String,
  id: String

});

const UserModel = db.mongoose.model('users', UserSchema);

module.exports = UserModel;
