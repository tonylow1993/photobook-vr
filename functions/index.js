// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const express = require('express');
const cors = require('cors')

let app = express();
// Automatically allow cross-origin requests
app.use(cors());

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.send('get'));
app.post('/', (req, res) => res.send('post'));
app.put('/:id', (req, res) => res.send('put'));
app.delete('/:id', (req, res) => res.send('delete'));

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);