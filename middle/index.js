var admin = require("firebase-admin");

var serviceAccount = require("../capstonedesign-firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
