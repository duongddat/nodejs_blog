import express from 'express';
import MeControllers from '../app/controllers/MeControllers.js';

const router = express.Router();
const meController = new MeControllers();

router.get('/stored/courses', meController.storedCourses);

export default router;
