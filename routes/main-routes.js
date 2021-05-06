const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const data = [];

router.get('/', (req,res,next) => {
    res.render('Homepage', { notes: data })
})

router.get('/leavenote', (req,res,next) => {
    res.render('LeaveNote')
})

router.get('/readnote', (req,res,next) => {
    res.render('ReadNotes')
})

router.post('/add-note', (req,res,next) => {
    data.push({
        name: req.body.name,
        content: req.body.product
    })
})


module.exports = router