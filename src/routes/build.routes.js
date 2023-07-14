const Router = require('express')
const router = new Router()
const buildController = require('../controller/build.controller')

router.post('/build', buildController.createBuild)
router.get('/build/:id', buildController.getBuild)
router.put('/build', buildController.updateBuild)
router.delete('/build/:id', buildController.deleteBuild)

module.exports = router