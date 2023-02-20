const express = require('express');
const router = express.Router();
const Present = require('../models/Present');

/* GET presents page. */
/* Route /presents */
router.get('/', async function (req, res, next) {
    try {
        const presents = await Present.find({})
        res.render('presents', { presents });
    } catch (error) {
        next(error)
    }
  
});

/*GET form view */
/* ROUTE /presents/new */
router.get('/new', function (req, res, next){
    res.render('newPresent');
});

/*POST get users show inputs */
/* ROUTE /presents/new */
router.post('/new', async function (req, res, next){
    const {name, image, price, recipient, description} = req.body;
    try {
        const createdPresent = await Present.create({name, image, price, recipient, description});
        res.redirect('/presents');
    } catch (error) {
       next(error) 
    }
})

/*GET delete present */
/* ROUTE /presents/delete/:presentId */
router.get('/delete/:presentId', async function (req, res, next){
    const {presentId} = req.params;
    try {
        await Present.findByIdAndDelete(presentId);
        res.redirect('/presents');
    } catch (error) {
        next(error)
    }
})


/* GET one present*/
/* ROUTE /presents/:presentId*/
router.get('/:presentId', async function (req, res, next){
    const {presentId} = req.params;
    try {
        const present = await Present.findById(presentId);
        res.render('detail', present);
    } catch (error) {
        next(error)
    }
})

module.exports = router;