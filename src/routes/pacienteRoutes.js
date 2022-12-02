import { Router } from 'express';
import PacienteController from '../controllers/PacienteController';

const router = new Router();

router.get('/', PacienteController.index);
router.post('/', PacienteController.cadastrar);

/*
router.put('/:id', PacienteController.atualizar);
router.get('/:id', PacienteController.mostrar);
router.delete('/:id', PacienteController.delete);
*/

export default router;