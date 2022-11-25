const express = require('express');
const router = express.Router();

const path = require('path');
const stylePath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../pages');

// express().use('../public', express.static(stylePath));
// express().engine('html', require('ejs').renderFile);
// express().set('view engine', 'html');
// express().set('views', viewsPath);

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