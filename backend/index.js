import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/boxRoutes';
import cors from 'cors';

const app = express();
const PORT = 8080;
const url = 'mongodb://localhost:27017/local';

// connects to mongodb in localhost
mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// set up body parser
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// set up CORS
app.use(cors());

// set up routes
routes(app);

app.get('/', (req, res) => 
    res.send(`It's working online ${PORT}`)
    );

app.listen(PORT, () =>
    console.log(`Your server is running on ${PORT}`)
    );