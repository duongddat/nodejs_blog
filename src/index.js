import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

import route from './routes/index.js';

const app = express();
app.use(express.static('./src/public'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
// Configuaration and default set handlebars => hbs
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

//Routes init
route(app);

app.listen(3000);
