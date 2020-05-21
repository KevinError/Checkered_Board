import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const PORT = 4000;
const url = 'mongodb://localhost:27017/local';

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/', (req, res) => 
    res.send(`It's working online ${PORT}`)
    );

app.listen(PORT, () =>
    console.log(`Your server is running on ${PORT}`)
    );