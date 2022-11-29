import { db } from "../db/dbconnection";


export function selectMedicoWhere (query, data) {
    db.query(query, data, (err, data) => {
        if (err) {
            console.log(err)
        }
        // console.log(data);
    })
}
