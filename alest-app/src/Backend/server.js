const express = require('express');
const app = require('./functions.js');

app.listen(3001, () => {
	console.log('vem pra http://localhost:3001');
});
