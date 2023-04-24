import newsRouter from './news.js';
import coursesRouter from './courses.js';
import siteRouter from './site.js';

function route(app) {
    app.use('/news', newsRouter);
    // app.get('/news', (req, res) => {
    //   res.render('news');
    // });
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    // app.get('/search', (req, res) => {
    //   res.render('search');
    // });
}

export default route;
