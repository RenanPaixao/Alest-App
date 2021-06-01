import app from '../app/app.js';

app.listen(process.env.PORT || 5000, () => {
	console.log(
		`http://localhost:${process.env.PORT}\n
		https://console.firebase.google.com/u/0/project/app-alest/firestore/data~2FCursos~2Fasda?hl=pt-br`
	);
});
