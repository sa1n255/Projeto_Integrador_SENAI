import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';

const router = new Router();

router.get('/', MedicoController.index);
router.post('/', MedicoController.store);
router.get('/mostrar', MedicoController.show);
router.patch('/', MedicoController.update);
router.delete('/', MedicoController.delete);

/*
*/
export default router;