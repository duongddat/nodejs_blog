import Course from '../models/Course.js';
import { mongooesToObject } from '../../util/mongoose.js';

export default class CourseController {
    //[GET] /course/:slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooesToObject(course),
                });
            })
            .catch((err) => {
                next(err);
            });

        // res.send('COURSE DETAIL - ' +  req.params.slug);
    }
}
