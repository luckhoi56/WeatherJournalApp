// Setup empty JS object to act as endpoint for all routes
projectData = {};
const m_data = [];
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//* Dependencies */
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/*Initialize the main project folder */
app.use(express.static('website'));

const port = 3000;
/*Spin up the servers */
const server = app.listen(port,()=>{
    console.log(`running on local host: ${port}`);
});

//GET route
app.get('/all',(request,response)=>{
    console.log(m_data);
    response.send(m_data);
});

//POST route to check if post worked
app.post('/add',(request,response)=>{
    response.send('POST received ');
});

//POST data
app.post('/user', (request,response)=>{
    console.log('Data received on server side');
    
    m_data.push(request.body);
    console.log(m_data);
    response.send(m_data.slice(-1)[0]);
    
});

