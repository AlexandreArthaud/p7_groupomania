const mysql = require('mysql');

class User {
    constructor() {
        this.dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'alexandre',
            password: '',
            database: 'groupomania',
        });

        this.dbConnection.connect(function(err) {
            if (err) throw err;
            console.log("Logged in to DB");
        })
    }

    getUserByEmail(email) {
        this.dbConnection.query(
            'SELECT password FROM user WHERE email = ' + email + ';', (err, res) => {
                if (err) throw err;
                console.log(res);
            }
        )
    }
}