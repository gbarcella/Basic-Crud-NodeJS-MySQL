const db = require('../db');

module.exports = {
    findAll: () =>{
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM users', (error, results)=>{
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    },

    findById: (id) =>{
        return new Promise((accepted, rejected)=>{
            db.query('SELECT * FROM users WHERE id = ?', [id], (error, results)=>{
                if(error) { rejected(error); return; }
                if(results.length > 0){
                    accepted(results[0]);
                } else {
                    accepted(false);
                }
            });
        });
    },

    insert: (name, lastname) =>{
        return new Promise((accepted, rejected)=>{
            db.query('INSERT INTO users (name, lastname) VALUES (?, ?)',
            [name, lastname], (error, results)=>{
                    if(error) { rejected(error); return; }
                    accepted(results.insertId)
            });
        });
    },

    update: (id, name, lastname) =>{
        return new Promise((accepted, rejected)=>{
            db.query('UPDATE users SET name = ?, lastname = ? WHERE id = ?',
            [name, lastname, id], (error, results)=>{
                    if(error) { rejected(error); return; }
                    accepted(results)
            });
        });
    },

    delete: (id) =>{
        return new Promise((accepted, rejected)=>{
            db.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
                if(error) { rejected(error); return; }
                accepted(results);
            });
        });
    },
};