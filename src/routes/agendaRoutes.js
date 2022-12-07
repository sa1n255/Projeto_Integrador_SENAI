import { Router } from 'express';
import AgendaController from '../controllers/AgendaController';

const router = new Router();

router.get('/', AgendaController.index);
router.post('/', AgendaController.store);
router.get('/procurar', AgendaController.show);
router.patch('/', AgendaController.update);
router.delete('/', AgendaController.delete);

export default router;