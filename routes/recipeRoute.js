const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipeModel')

//Get all recipes
router.get('/', async (req, res) => {
    try{
        const recipes = await Recipe.find()
        res.json(recipes)
    }catch(err){
        res.send(`Error ${err}`)
    }
})

//Get single recipe
router.get('/:id', async (req, res) => {
    try{
        const recipes = await Recipe.findById(req.params.id)
        res.json(recipes)
    }catch(err){
        res.send(`Error ${err}`)
    }
})


//Create recipes
router.post('/', async(req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        rating: req.body.rating,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    })

    try{
        const newRecipe = await recipe.save()
        res.json(newRecipe)
    }catch{
        res.send('Error')
    }
})

// Update recipe
router.put('/:id', async(req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)

        recipe.name = req.body.name
        
        const newRecipe = await recipe.save()
        res.json(newRecipe)
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)

        if(req.body.name){
            recipe.name = req.body.name
        }
        if(req.body.description){
            recipe.description = req.body.description
        }
        if(req.body.category){
            recipe.category = req.body.category
        }
        if(req.body.rating){
            recipe.rating = req.body.rating
        }
        if(req.body.ingredients){
            recipe.ingredients = req.body.ingredients
        }
        if(req.body.directions){
            recipe.directions = req.body.directions
        }
       
        const newRecipe = await recipe.save()
        res.json(newRecipe)
    }
    catch(err){
        res.send(err)
    }
})


//Delete recipe
router.delete('/:id', async(req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id)
        const newRecipe = await recipe.remove()
        res.json(newRecipe)
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router
