const express = require('express');
const User = require('../models/User');
const Role = require('../models/Role');
const router = express.Router();


router.post('/', async (req,res) => {
    const {name,email,roleName} = req.body;

    try {
        let user = await User.findOne({ where: { email: email } });

        if(user) {
           return res.status(200).send({error:{"ERROR": "User already Exists"}})
        }

        let role = await Role.findOne({ where: { name: roleName } });
        if(!role) {
            return res.status(200).send({error:{"ERROR": "Role doesn't Exists"}})
        } 
        const roleId = role.dataValues.id;
        user = await User.create({name:name,email:email,roleId:roleId});
        res.send(user);
    } catch (error) {
        res.status(404).send("SERVER ERROR");
        console.log("ERROR : " + error);
    }
})

module.exports = router;