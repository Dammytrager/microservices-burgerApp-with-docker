const express = require('express');
const router = express.Router();
const burgers = require('../config/db_queries');

router.get('/', (req, res) => {
   burgers.selectAll((err, burgers) => {
        if (err) {
            return res.status(501)
            .json({
                message: 'hello'
            }).end();
        }
        return res.render('index', {burgers});
   });
});

module.exports = router;
