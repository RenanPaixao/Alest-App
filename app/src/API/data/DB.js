import admin from 'firebase-admin';
import auth from './auth.js';

admin.initializeApp({
	credential: admin.credential.cert(auth),
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATA_BASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
});

const db = admin.firestore();
export default db;
