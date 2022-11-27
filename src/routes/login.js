const express = require("express");
const router = express.Router();

router.post("/check", (req, res) => {
    const entrar = {
        crm: req.body.crm,
        password: req.body.password
    }
    console.log(`crm: ${entrar.crm}, senha: ${entrar.password}`);
    res.redirect('/area-medica');
});

router.get("/", (req, res) => {
  res.render("login", {});
});

module.exports = router;
