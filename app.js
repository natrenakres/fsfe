const http = require('http');


const server = http.createServer(function (req, res){
	res.write('My Personel web app');
	res.end();
});


server.listen(3000);


console.log('Server started on port 3000');
