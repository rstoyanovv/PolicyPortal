import express from 'express';
import bodyParser from 'body-parser';
import container from './src/container.js';

const port = 5500;

const app = express();

app.use(bodyParser.json());

//Routes:
const userRouter = container.resolve('userController');

app.use("/api", userRouter.router);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});