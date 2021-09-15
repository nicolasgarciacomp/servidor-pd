const express = require('express');
const morgan = require('morgan'); 
const cors = require('cors');
const app = express();

const router = require('../routes/routes');

app.set('port', 2020);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

app.listen(app.get('port'), () => {
    console.log("Server status 200 on port 2020");
});
