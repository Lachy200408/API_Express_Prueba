import express from "express";
import fs from "node:fs";

const app = express();

app.get('/', (req, res)=>{
	fs.readFile('./index.html', 'utf-8', (err, data)=>{
		if(err){
			res.writeHead(404, 'Resource not found');
			res.send('Resource not found.');
			return;
		}

		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(data);
	});
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');