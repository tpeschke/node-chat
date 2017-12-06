const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000
const controller = require('./Controllers/server_controller');

app.use(bodyParser.json());
app.use ( express.static('public/build') );

app.get('/api/messages', controller.read);

app.post('/api/messages', controller.create);

app.put('/api/messages/:id', controller.update);

app.delete('/api/messages/:id', controller.delete)

//=======================\\
app.listen(port, ()=> {
    console.log(`up and running on port ${port}`)
})