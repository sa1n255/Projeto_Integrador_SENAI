import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router = new Router();

router.get("/", LoginController.index);
router.post("/", LoginController.post);

export default router;