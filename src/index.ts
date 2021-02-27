import * as express from 'express';

//Initialize Express.js server
const app = express();
const main = express();

//Server configuration
//Set PATH
//Set JSON as main parser
main.use('/api/',app);
main.use( express.json() );

// PORT
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send({
        status: true,
        detail: 'Kweli OS is live!',
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});