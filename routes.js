'use strict';

import express from 'express';
import logger from "./utils/logger.js";
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import species from './controllers/species.js';
import about from './controllers/about.js';
import facts from "./controllers/facts.js";

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/species/:id', species.createView);
router.get('/about', about.createView);
router.get('/facts', facts.createView);

router.post('/species/:id/addshark', species.addShark);
router.post('/dashboard/addCategory', dashboard.addCategory);

export default router;
