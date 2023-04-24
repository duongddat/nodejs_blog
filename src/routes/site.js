import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const router = express.Router();

const siteController = new SiteController();

router.get('/search', siteController.search);
router.get('/', siteController.index);

export default router;
