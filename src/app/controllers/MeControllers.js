import Course from '../models/Course.js';
import { mutipleMongooesToObject } from '../../util/mongoose.js';

export default class MeControllers {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        // Cách viết này giống như việc thực hiện đồng thời 2 promises
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/storedCourses', {
                    deletedCount,
                    courses: mutipleMongooesToObject(courses),
                }),
            )
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deleteCount) => {
        //         console.log(deleteCount)
        //     })
        //     .catch(() => {});

        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/storedCourses', {
        //             courses: mutipleMongooesToObject(courses),
        //         }),
        //     )
        //     .catch(next);
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
