import express from 'express';
import bodyParser from 'body-parser';

const port = 5500;

const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
    console.log('App listening on port ' + port);
});