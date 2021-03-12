const { Router } = require('express');
const app = require('../app');

const router = Router()

const cousers = [
    {
        id: 1,
        nome: 'Sitemas'
    },
    {
        id: 2,
        nome: 'Informatica'
    },
    {
        id: 3,
        nome: 'Administracao'
    }
]

router.get('/courses', (request, response ) => {

    return response.json(cousers)

})

router.post('/courses', (request, response) => {
   const data = request.body
    const result = cousers.push(data)
  return response.json(result).status(201)
})

router.put('/cousers/:id', (request, response) => {
return response.json({ola: true})
})

router.patch('/cousers/:id', (request, response) => {
    return response.json({ola: true})
})

router.delete('/cousers/:id', (request, response) => {
    return response.json({ola: true})
})



module.exports = router