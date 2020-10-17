const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello My Friends, Welcome to our API!');
});
app.get('/miwtoo', (req, res) => {
	res.send('Sawaddee, I am miwtoo. Not pokemon!');
});
app.get('/many', (req, res) => {
	res.send('Howdy! I am Many!!!!!');
});
app.get('/kom', (req, res) => {
	res.send("Hello!!!!, I am Kom.")
	res.send({ message: 'hey' })
});

module.exports = app;
