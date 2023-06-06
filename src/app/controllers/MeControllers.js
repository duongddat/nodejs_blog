import Course from '../models/Course.js';
import { mutipleMongooesToObject } from '../../util/mongoose.js';

export default class MeControllers {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/storedCourses', {
                    courses: mutipleMongooesToObject(courses),
                }),
            )
            .catch(next);
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trashCourses', {
                    courses: mutipleMongooesToObject(courses),
                }),
            )
            .catch(next);
    }
}
