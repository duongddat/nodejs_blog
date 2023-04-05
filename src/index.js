import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

const app = express();
app.use(express.static('./src/public'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
// Configuaration and default set handlebars => hbs
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(3000);