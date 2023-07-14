const database = require('../database')

class RoleController {

    async createRole(req, res) {
        const {role_label, build_id} = req.body
        const newRole = await database.query('INSERT INTO role (role_label, build_id) VALUES ($1, $2) RETURNING *', 
        [role_label, build_id])
        res.json(newRole.rows[0])
    }

    async getRole(req, res) {
        const id = req.params.id
        const role = await database.query('SELECT * FROM role WHERE "ID" = $1', [id])
        res.json(role.rows[0])
    }

    async updateRole(req, res) {
        const {ID, role_label, build_id} = req.body
        const role = await database.query('UPDATE role SET role_label = $1, build_id = $2 WHERE "ID" = $3 RETURNING *', 
        [role_label, build_id, ID])
        res.json(role.rows[0])
    }
    
    async deleteRole(req, res) {
        const id = req.params.id
        const deletedRole = await database.query('DELETE FROM role WHERE "ID" = $1 RETURNING *', [id])
        res.json(deletedRole.rows[0])
    }
}

module.exports = new RoleController()