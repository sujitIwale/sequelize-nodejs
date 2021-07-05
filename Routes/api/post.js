const express = require('express');
const Post = require('../models/Post');
const router = express.Router();


router.post('/', async (req,res) => {
    const {name,email} = req.body;

    try {
        let user = User.findOne({email:email});
        if(user) {
           return res.status(200).send({error:{"ERROR": "User already Exists"}})
        }
        
        user = await User.create({name:name,email:email});
        res.send(user);
    } catch (error) {
        res.status(404).send("SERVER ERROR");
        console.log("ERROR : " + error);
    }
})

module.exports = router;