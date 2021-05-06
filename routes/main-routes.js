const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const data = [];

router.get('/', (req,res,next) => {
    res.render('Homepage', { products: data, title: "Shopping List" })
})

router.get('/leavenote', (req,res,next) => {
    res.render('LeaveNote')
})

router.get('/readnote', (req,res,next) => {
    res.render('ReadNotes')
})



module.exports = router