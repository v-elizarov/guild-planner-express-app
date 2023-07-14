const Router = require('express')
const router = new Router()
const roleController = require('../controller/role.controller')

router.post('/role', roleController.createRole)
router.get('/role/:id', roleController.getRole)
router.put('/role', roleController.updateRole)
router.delete('/role/:id', roleController.deleteRole)

module.exports = router