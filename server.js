const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todosRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todosRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Running...`);
});
