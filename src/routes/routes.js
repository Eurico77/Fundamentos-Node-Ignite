const { Router } = require('express');
const app = require('../app');

const router = Router()

router.get('/courses', (request, response ) => {

    return response.json([
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
    ])

})

router.post('/courses', (request, response) => {
    return response.json({ola: true})
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