const admin = require('firebase-admin');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

var serviceAccount = require('./autorization.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = app;
