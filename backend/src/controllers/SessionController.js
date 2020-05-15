const connection = require('../database/connection')

module.exports= {
    async create(require, response){
        const {id} = require.body;

        const ong =await connection('ongs').where('id', id).select('name').first();
        if(!ong){
            return response.status(400).json({error:'No ong with this Id'});
        }

        return response.json(ong);
    }

}