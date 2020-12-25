import express from 'express';
import artworks from './data/artworks.js';

const app = express(artworks);

app.get('/', (req, res) => {
	res.send('API IS RUNNING');
});

app.get('/api/artworks', (req, res) => {
	res.send(artworks);
});

app.listen(5000, console.log('Server running on port 5000'));
