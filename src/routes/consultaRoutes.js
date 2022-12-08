import { Router } from 'express';
import ConsultaController from '../controllers/ConsultaController';

const router = new Router();

// router.get('/', ConsultaController.index);
router.post('/', ConsultaController.store);
router.get('/procurar', ConsultaController.show);
router.patch('/', ConsultaController.update);
router.delete('/', ConsultaController.delete);

export default router;