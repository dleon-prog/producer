// src/routes/producerRoutes.ts

import { Router } from 'express';
import producerController from '../controllers/producerController';

const router = Router();

router.post('/producers', producerController.create);
router.put('/producers/:id', producerController.update);
router.delete('/producers/:id', producerController.delete);
router.get('/dashboard/totals', producerController.getTotals);
router.get('/dashboard/farms-by-state', producerController.getFarmsByState);
router.get('/dashboard/farms-by-crop', producerController.getFarmsByCrop);
router.get('/dashboard/land-usage', producerController.getLandUsage);

export default router;
