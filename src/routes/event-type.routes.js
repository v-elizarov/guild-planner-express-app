const Router = require('express')
const router = new Router()
const eventTypeController = require('../controller/event-type.controller')

router.post('/event-type', eventTypeController.createEventType)
router.get('/event-type/:id', eventTypeController.getEventType)
router.put('/event-type', eventTypeController.updateEventType)
router.delete('/event-type/:id', eventTypeController.deleteEventType)

module.exports = router