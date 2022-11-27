const express = require('express');
const router = express.Router();

router.get('/area-medica', (req, res) => {
   res.render('area-medica', {}); 
});


module.exports = router;