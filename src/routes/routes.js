const { Router } = require('express');

const router = Router()

router.get('/',(request, response ) => {

    return response.json({message: ' ola mundo '})

})

module.exports = router