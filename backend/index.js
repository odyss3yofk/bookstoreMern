import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT,mongoDBURL } from "./config.js";
import{Book} from"./models/bookModel.js";
import bookRoute from"./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());


app.use(cors());


app.get('/', (request,response) => {

    console.log(request)
    return response.status(234).send('welcome kuldeep, this is mern satck');

});

app.use('/books',bookRoute);




mongoose
    .connect(mongoDBURL)
    .then(()=> {

        console.log('app is connected to database');

        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })

    .catch((error)=> {

        console.log(error);

    });