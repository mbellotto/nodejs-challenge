const db = require('../../core/database');

async function registerController(req, res) {
    const { username, name, email, password } = req.body;

    let errMsg = [];
    if ( typeof username === 'undefined' ) {
        errMsg.push('username is missing');
    } else if ( username && typeof username !== 'string' ) {
        errMsg.push('Username must be a string');
    } else if (username.length < 6 && username.length > 20) {
        errMsg.push('Username must be between 6 to 20 chars');
    }

    if ( typeof name === 'undefined' ) {
        errMsg.push('name is missing');
    } else if ( name && typeof name !== 'string' ) {
        errMsg.push('name must be a string');
    }

    if ( typeof email === 'undefined' ) {
        errMsg.push('email is missing');
    } else if ( email && typeof name !== 'string' ) {
        errMsg.push('email must be a number');
    }

    if ( typeof password === 'undefined' ) {
        errMsg.push('password is missing');
    } else if ( password && typeof password !== 'string' ) {
        errMsg.push('password must be a number');
    }else if (password.length < 8 && password.length > 50) {
        errMsg.push('password must be between 8 to 50 chars');
    }

    if ( errMsg.length > 0 ) {
        res.status(400).send( { message: 'Missing information', errors: errMsg });
        return;
    }

    try {
        const queryStr = `SELECT * 
                          FROM Users
                          WHERE username = ? 
                          OR email = ?`;

        const [user] = await db.default.execute(queryStr, [username, email]);

        console.log(user.length, user);

        if (user.length > 0) {
            res.status(400).send( { message: 'username or email allready exist' });
            return;
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al insertar el usuario');
    }

    try {
        const insertUser = `INSERT INTO Users 
                            (name, email, username, password)
                            VALUES (?,?,?,?);`;

        const result = await db.default.execute(insertUser, [name, email, username, password]);

        res.status(201).send({ status: true, payload: { name, email, username } });

    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al insertar el usuario');
    }

}

module.exports = registerController;