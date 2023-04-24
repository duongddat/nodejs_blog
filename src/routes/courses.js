import express from 'express';
import coursesController from '../app/controllers/CoursesController.js';

const router = express.Router();
const courseController = new coursesController();

router.get('/:slug', courseController.show);

export default router;
