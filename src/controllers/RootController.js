import { db } from "../db/dbconnection";

class RootController{
    async get(req, res) {
        res.render('index', {});
    }
}

export default new RootController();