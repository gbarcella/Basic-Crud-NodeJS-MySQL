const UserService = require('../services/UserService');

module.exports = {
    findAll: async (req, res)=> {
        let json = {error: '', result:[]};

        let users = await UserService.findAll();

        for(let i in users){
            json.result.push({
                id: users[i].id,
                name: users[i].name,
                lastname: users[i].lastname
            });
        }

        res.json(json);
    },

    findById: async (req, res)=> {
        let json = {error: '', result:{}};
        
        let id = req.params.id;

        let user = await UserService.findById(id);

        if(user) {
            json.result = user;
        }

        res.json(json);
    },

    insert: async (req, res)=> {
        let json = {error: '', result:{}};
        
        let name = req.body.name;
        let lastname = req.body.lastname;

        if(name && lastname) {
            let UserID = await UserService.insert(name, lastname);
            json.result = {
                id: UserID,
                name,
                lastname
            }; 
        } else {
            json.error = 'Campos não enviados!';
        }

        res.json(json)
    },

    update: async (req, res)=> {
        let json = {error: '', result:{}};
        
        let id = req.params.id;
        let name = req.body.name;
        let lastname = req.body.lastname;

        if(id && name && lastname) {
            await UserService.update(id, name, lastname);
            json.result = {
                id,
                name,
                lastname
            }; 
        } else {
            json.error = 'Campos não enviados!';
        }

        res.json(json)
    },

    delete: async (req, res)=> {
        let json = {error: '', result:{}};

        await UserService.delete(req.params.id);

        res.json(json);
    }
}