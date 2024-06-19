import {createServer} from 'node:http';

// define request handler



// create http server
const server = createServer((req,res) =>{
    res.writeHead(200, {'Content-Type' :'text/html'});
    res.end ('<h1>We have an HTTP Server</h2>');

});


//Listen for incominf request
server.listen(3000,'127.0.0.1', function() {
    console.log('Server is Running');
});


//Normal Function Vs Arrow Function
function handleRequest(){} //Normal Function
const handleRequest = () =>{} //Arrow Function

// function(){}

() => {}//anonymous Arrow Function