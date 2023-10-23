import express from 'express';
import bodyParser from 'body-parser';
import container from './src/container.js';

const port = 5500;

const app = express();

app.use(bodyParser.json());

//Routes:
const userRouter = container.resolve('userController');
const articleRouter = container.resolve('articleController');
const adminRouter = container.resolve('adminController');

app.use("/api", userRouter.router);
app.use("/api", articleRouter.router);
app.use("/api/admin", adminRouter.router);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});