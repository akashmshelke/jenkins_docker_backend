const express = require('express');
const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: '200.0.1.91',
        user: 'root',
        password: 'manager',
        database: 'sunbeam_devops',
        port:3307
    });

    connection.connect();

    return connection;
}

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
  
	var result={}
	result['msg']="Hello from containers node";
        response.send(result);
    
}) 
app.get('/product', (request, response) => {
    const connection = connect();
    var result={}
    const statement = `select id, title, description, price from product`;
    connection.query(statement, (error, products) => {
    
        if (error) {
            result['status'] = 'error'
            result['error'] = error
        } else {
            result['status'] = 'success'
            result['data'] = data
        }

        connection.end();
        response.send(result);

       
    })
}) 

app.listen(4000, () => {
    console.log(`Server started on 3000`);
});









