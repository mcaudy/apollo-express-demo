import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Babel Working!'));

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000`)
);
