// const express = require('express');
// const router = express.Router();
import { Router } from 'express';
const router = new Router();

router.get('/', (req, res) => {
    res.render('cadastro', {});
});

router.post('/', (req, res) => {
    console.log(req.body);
});

// module.exports = router;
export default router;