import { Router } from 'express';
import PacienteController from '../controllers/PacienteController';

const router = new Router();

router.get('/', PacienteController.index);
router.post('/', PacienteController.store);
router.get('/mostrar', PacienteController.show);
router.patch('/', PacienteController.update);
router.delete('/', PacienteController.delete);

/*
*/

export default router;