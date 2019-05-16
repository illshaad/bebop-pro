
// Mise en place de la connection à la BDD
const mongoose = require('mongoose');


/* ----- Your DB ------ */
const dbUrl = 'mongodb://bebop:azerty11@ds155916.mlab.com:55916/probebop';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...')
  }
});

module.exports = {
  mongoose: mongoose,
}
