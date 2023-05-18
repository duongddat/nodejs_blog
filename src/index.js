import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';

import route from './routes/index.js';
import db from './config/db/index.js';

// Connect to DB
db.connect();

const app = express();
app.use(express.static('./src/public'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Overrides methods in express
app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
// Configuaration and default set handlebars => hbs
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

//Routes init
route(app);

app.listen(3000);
