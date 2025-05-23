const express = require('express');
const router = express.Router();

const authHandler = require('../middleware/authHandler');
const Contact = require('../models/contacts');
const contacts = require('../models/contacts');

// app.use("/auth/", require("./authRoutes"));

//Retrieving Data
router.get('/contacts', authHandler, async (req, res,next)=>{
    let results = await Contact.find()
        res.status(200).json(results);
    // res.send("Get contacts");
});

//Retrieving single record
router.get('/contacts/:id', authHandler, (req, res,next)=>{
    // console.log(req);
    Contact.findByIdAndRemove({_id: req.params.id}, function(err, contact){
        // console.log(contact)
        res.json(contact);
    });
});

//Add contact
router.post('/contacts', authHandler,(req, res, next)=>{
    let newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    newContact.save().then((result)=>{
        res.status(200).json({
            message: "Contact added successfully",
            contact: result
        });
    }
    ).catch((err)=>{
        res.status(500).json({
            message: "Failed to add contact",
            error: err
        });
    });
    // newContact.save((err, contact)=>{
    //     if(err){
    //         res.json({msg: 'failed to add contact'});
    //     }
    //     else{
    //         res.json({msg: 'Contact added successfully'});
    //     }
    // });
});

//Deleting contacts
router.delete('/contacts/:id',(req, res, next)=>{
    // console.log(req);
    contacts.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

//Updating contact
// router.put('/contact/:id', (req,res, next)=>{
//     contacts.findByIdAndRemove({_id: req.params.id}, function(contact){
//         console.log("req.body.firstName"+req);
//     })
// })

module.exports = router;