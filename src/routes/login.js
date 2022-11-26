const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");

// const viewsPath = path.join(__dirname, '../', '../', 'pages');

// router.engine('html', require('ejs').renderFile);
// router.set('view engine', 'html');
// router.set('views', viewsPath);

router.post("/check", (req, res) => {
    const entrar = {
        crm: req.body.crm,
        password: req.body.password
    };/*
    if (entrar.crm == 12345678 && entrar.password == 123456){
        console.log("login efetuado com sucesso");
        window.location.href = "/area-medica";
    }
    else{
        console.log("Erro, login não afetuado com sucesso");
    }*/
    console.log(entrar.crm, entrar.password);
    
});

router.get("/", (req, res) => {
  res.render("login", {});
});

module.exports = router;
