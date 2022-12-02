class LoginController{
    async get(req, res) {
        res.render("login", {});
    }

    async post(req, res) {
        const entrar = {
            crm: req.body.crm,
            password: req.body.password
        }
        console.log(`crm: ${entrar.crm}, senha: ${entrar.password}`);
        res.redirect('/area-medica');
    }
}

export default new LoginController();