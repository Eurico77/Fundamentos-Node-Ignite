const { Router } = require('express');

const router = Router()

router.get('/',(request, respose, next ) => {

    respose.json({message: ' ola mundo '})

})