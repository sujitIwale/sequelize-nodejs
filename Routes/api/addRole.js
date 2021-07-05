const express = require('express');
const Role = require('../../models/Role');
const router = express.Router();


router.post('/', async (req,res) => {
    const {name} = req.body;

    try {
        let role = await Role.findOne({where:{name:name}});
        if(role) {
           return res.status(200).send({error:{"ERROR": "Role already Exists"}})
        }

        role = await Role.create({name:name});
        res.send(role);
    } catch (error) {
        res.status(404).send("SERVER ERROR");
        console.log("ERROR : " + error);
    }
})

module.exports = router;