import { Router } from 'express';
import HospitalController from '../controllers/HospitalController';

const router = new Router();

router.get('/', HospitalController.index);
router.post('/', HospitalController.store);
router.get('/procurar', HospitalController.show);
router.patch('/', HospitalController.update);
router.delete('/', HospitalController.delete);

export default router;