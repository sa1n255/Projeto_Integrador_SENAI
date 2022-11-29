import { Router } from 'express';
import AgendaController from '../controllers/AgendaController';

const router = new Router();

router.get('/', AgendaController.get);
router.post('/procurar', AgendaController.procurar);

export default router;