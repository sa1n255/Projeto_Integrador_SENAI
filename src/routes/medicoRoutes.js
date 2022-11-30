import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';

const router = new Router();

router.get('/', MedicoController.index);
router.post('/', MedicoController.cadastrar);
router.put('/:id', MedicoController.atualizar);
router.get('/:id', MedicoController.mostrar);
router.delete('/:id', MedicoController.delete);

export default router;