const router = require('express').Router()
const {Vet} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const vets = await Vet.findAll()
    res.json(vets)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const vet = await Vet.findById(req.params.id)
    vet.addUser(req.user)
    res.json(vet)
  } catch (err) {
    next(err)
  }
})
