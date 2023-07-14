const Router = require('express')
const router = new Router()
const placeController = require('../controller/place.controller')

router.post('/place', placeController.createPlace)
router.get('/place', placeController.getPlaces)
router.get('/place/:id', placeController.getPlace)
router.put('/place', placeController.updatePlace)
router.delete('/place/:id', placeController.deletePlace)

module.exports = router