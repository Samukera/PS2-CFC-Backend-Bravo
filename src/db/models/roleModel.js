import pgConnection from "../connection.js";

export class RoleModel {
    constructor(name) {
        this.name = name; 
    }

    static async findAll() {
        let queryText;

        queryText = `SELECT * FROM "role"`;

        const { rows } = await pgConnection.query(queryText);
        
        return rows;
    }

    static async create(role) {
        let queryText, values;

        queryText = `INSERT INTO "role" (name) VALUES ($1) RETURNING *`;

        values = [ role.name ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findById(roleId) {
        let queryText, values;

        queryText = `SELECT * FROM "role" WHERE "roleId" = $1`;

        values = [ roleId ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async findByName(name) {
        let queryText, values;

        queryText = `SELECT * FROM "role" WHERE name = $1`;

        values = [ name ]

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }
}