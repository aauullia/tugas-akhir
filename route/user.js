const express = require("express");
const router = express.Router();
const db = require("../koneksi");

router.post("/", (req, res) => {
    let userData = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        no_telp: req.body.no_telp,
        password: req.body.password,
    };

    let userSQL = "INSERT INTO user SET ?";

    // query kendaraan
    db.query(userSQL, userData, (error, userResult) => {
        if (error) {
            res.json({
                message: error.message,
            });
        } else {
            // run query for user
            res.json({
                message: "Data user berhasil disimpan",
                user: userData,
            });
        }
    });
});

module.exports = router