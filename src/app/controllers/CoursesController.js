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

    //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
        // res.send('COURSE DETAIL - ' +  req.params.slug);
    }

    //[POST] /course/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }

    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooesToObject(course),
                }),
            )
            .catch(next);
        // res.send('COURSE DETAIL - ' +  req.params.slug);
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}
