const database = require('../database')

class PlaceController {

    async createPlace(req, res) {
        const {location, chest_or_tab} = req.body
        const newPlace = await database.query('INSERT INTO place (location, chest_or_tab) VALUES ($1, $2) RETURNING *', [location, chest_or_tab])
        res.json(newPlace.rows[0])
    }

    async getPlaces(req, res) {
        const places = await database.query('SELECT * FROM place')
        res.json(places.rows)
    }

    async getPlace(req, res) {
        const id = req.params.id
        const place = await database.query('SELECT * FROM place WHERE "ID" = $1', [id])
        res.json(place.rows[0])
    }

    async updatePlace(req, res) {
        const {ID, location, chest_or_tab} = req.body
        const place = await database.query('UPDATE place SET location = $1, chest_or_tab = $2 WHERE "ID" = $3 RETURNING *', [location, chest_or_tab, ID])
        res.json(place.rows[0])
    }
    
    async deletePlace(req, res) {
        const id = req.params.id
        const deletedPlace = await database.query('DELETE FROM place WHERE "ID" = $1 RETURNING *', [id])
        res.json(deletedPlace.rows[0])
    }
}

module.exports = new PlaceController()