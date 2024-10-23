/*
=> This file contains RestApi concepts and Sequelize ORM methods 
*/ 
const express = require('express');//acquires express from node modules
const router = express.Router();//creating an express application
const {User, Comment} = require('../models');//acquires models from index.js in models folder



//Get Comments
router.get('/user', (req, res) => {
    res.status(200).json({ message: 'Comments' });
});



module.exports = router;