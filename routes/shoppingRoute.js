const express = require('express')
const router = express.Router()
const List = require('../models/shoppingModel')

//Get all shopping
router.get('/', async (req, res) => {
    try{
        const shopping = await List.find()
        res.json(shopping)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Get single recipe
router.get('/:id', async (req, res) => {
    try{
        const shopping = await List.findById(req.params.id)
        res.json(shopping)
    }catch(err){
        res.send(`Error ${err}`)
    }
})


//Create shopping
router.post('/', async(req, res) => {
    const shopping = new List({
        name: req.body.name,
        quantity: req.body.quantity,
        complete: req.body.complete
    })

    try{
        const newList = await shopping.save()
        res.json(newList)
    }catch{
        res.send('Error')
    }
})

// Update recipe
router.put('/:id', async(req, res) => {
    try{
        const shopping = await List.findById(req.params.id)

        shopping.name = req.body.name
        
        const newList = await shopping.save()
        res.json(newList)
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const shopping = await List.findById(req.params.id)

        if(req.body.name){
            shopping.name = req.body.name
        }
        if(req.body.quantity){
            shopping.quantity = req.body.quantity
        }
        if(req.body.complete){
            shopping.complete = req.body.complete
        }
       
        const newList = await shopping.save()
        res.json(newList)
    }
    catch(err){
        res.send(err)
    }
})


//Delete recipe
router.delete('/:id', async(req, res) => {
    try{
        const shopping = await List.findById(req.params.id)
        const newList = await shopping.remove()
        res.json(newList)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router
