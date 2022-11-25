const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');

// const viewsPath = path.join(__dirname, '../', '../', 'pages');

// router.engine('html', require('ejs').renderFile);
// router.set('view engine', 'html');
// router.set('views', viewsPath);

router.post('/check', (req, res) => {
    console.log(req.body);
});

router.get('/', (req, res) => {
    
    res.render('login', {});
});

module.exports = router;