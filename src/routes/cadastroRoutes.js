// const express = require('express');
// const router = express.Router();

import { Router } from 'express';
import CadastroController from '../controllers/CadastroController';
const router = new Router();



router.get('/', CadastroController.get);
router.post('/', CadastroController.post);


export default router;