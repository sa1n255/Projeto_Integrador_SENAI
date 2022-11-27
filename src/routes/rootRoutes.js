// const express = require('express');
// const router = express.Router();
import { Router } from 'express';
const router = new Router();

router.get('/', (req, res) => {
    res.render('index', {});
});

// modules.exports = router;
export default router;