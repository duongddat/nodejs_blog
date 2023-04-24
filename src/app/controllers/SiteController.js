import Course from '../models/Course.js';
import { mutipleMongooesToObject } from '../../util/mongoose.js';

export default class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooesToObject(courses),
                });
            })
            .catch((err) => {
                next(err);
            });
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}
