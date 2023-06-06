import express from 'express';
import coursesController from '../app/controllers/CoursesController.js';

const router = express.Router();
const courseController = new coursesController();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);

export default router;
