import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router = new Router();

router.post("/", LoginController.post);
router.get("/", LoginController.get);

export default router;