const express = require('express');
const router = express.Router();

router.get('/cadastromed', (req, res) => {
    res.render('cadastromed', {});
});

router.get('/agenda', (req, res) => {
   res.render('agenda', {}); 
});

router.get('/area-medica', (req, res) => {
   res.render('area-medica', {}); 
});

router.get('/cadastro', (req, res) => {
   res.render('cadastro', {});

});

router.get('/login', (req, res) => {
    res.render('login', {});
});

router.get('/pesquisa', (req, res) => {
    res.render('pesquisa', {});
});

module.exports = router;