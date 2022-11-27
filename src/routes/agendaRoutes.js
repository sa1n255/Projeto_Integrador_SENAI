// const express = require('express');
// const router = express.Router();
import { Router } from 'express';
const router = new Router();

router.get('/', (req, res) => {
    res.render('agenda', {});
});

router.post('/', (req, res) => {
    console.log(req.body);
});

// modules.exports = router;
export default router;