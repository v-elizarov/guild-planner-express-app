const database = require('../database')

class BuildController {

    async createBuild(req, res) {
        const {weapon, head, chest, feet, cape, food, off_hand} = req.body
        const newBuild = await database.query('INSERT INTO build (weapon, head, chest, feet, cape, food, off_hand) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
        [weapon, head, chest, feet, cape, food, off_hand])
        res.json(newBuild.rows[0])
    }

    async getBuild(req, res) {
        const id = req.params.id
        const build = await database.query('SELECT * FROM build WHERE "ID" = $1', [id])
        res.json(build.rows[0])
    }

    async updateBuild(req, res) {
        const {ID, weapon, head, chest, feet, cape, food, off_hand} = req.body
        const build = await database.query('UPDATE build SET weapon = $1, head = $2, chest = $3, feet = $4, cape = $5, food = $6, off_hand = $7 WHERE "ID" = $8 RETURNING *', 
        [weapon, head, chest, feet, cape, food, off_hand, ID])
        res.json(build.rows[0])
    }
    
    async deleteBuild(req, res) {
        const id = req.params.id
        const deletedBuild = await database.query('DELETE FROM build WHERE "ID" = $1 RETURNING *', [id])
        res.json(deletedBuild.rows[0])
    }
}

module.exports = new BuildController()