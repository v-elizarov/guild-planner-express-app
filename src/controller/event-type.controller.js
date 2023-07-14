const database = require('../database')

class EventTypeController {

    async createEventType(req, res) {
        const {event_label, event_description, group_size, recommended_ip} = req.body
        const newEventType = await database.query('INSERT INTO event_type (event_label, event_description, group_size, recommended_ip) VALUES ($1, $2, $3, $4) RETURNING *', 
        [event_label, event_description, group_size, recommended_ip])
        res.json(newEventType.rows[0])
    }

    async getEventType(req, res) {
        const id = req.params.id
        const eventType = await database.query('SELECT * FROM event_type WHERE "ID" = $1', [id])
        res.json(eventType.rows[0])
    }

    async updateEventType(req, res) {
        const {ID, event_label, event_description, group_size, recommended_ip} = req.body
        const eventType = await database.query('UPDATE event_type SET event_label = $1, event_description = $2, group_size = $3, recommended_ip = $4 WHERE "ID" = $5 RETURNING *', 
        [event_label, event_description, group_size, recommended_ip, ID])
        res.json(eventType.rows[0])
    }
    
    async deleteEventType(req, res) {
        const id = req.params.id
        const deletedEventType = await database.query('DELETE FROM event_type WHERE "ID" = $1 RETURNING *', [id])
        res.json(deletedEventType.rows[0])
    }
}

module.exports = new EventTypeController()