const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e-rec"
})

db.connect(error => {
    if(error) {
        console.log(error.message)
    } else {
        console.log("Berhasil")
    }
})

module.exports=db
