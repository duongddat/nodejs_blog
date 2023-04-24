import express from 'express';
import NewsController from '../app/controllers/NewsControllers.js';

const router = express.Router();

const newsController = new NewsController();

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
