import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';

import SortMiddleware from './app/middlewares/SortMiddleware.js';
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

//Custom middlewares
app.use(SortMiddleware);

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
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}">
                    <span class="${icon}"></span>
                </a>`;
            },
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

//Routes init
route(app);

app.listen(3000);
