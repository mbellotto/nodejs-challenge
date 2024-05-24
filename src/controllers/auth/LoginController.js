const jwt = require('jsonwebtoken');
const db = require('../../core/database');

async function loginController(req, res) {
    const { username, name, email, password } = req.body;

    let errMsg = [];
    if ( typeof username === 'undefined' ) {
        errMsg.push('username is missing');
    } else if ( username && typeof username !== 'string' ) {
        errMsg.push('Username must be a string');
    } else if (username.length < 6 && username.length > 20) {
        errMsg.push('Username must be between 6 to 20 chars');
    }

    if ( typeof password === 'undefined' ) {
        errMsg.push('password is missing');
    } else if ( password && typeof password !== 'string' ) {
        errMsg.push('password must be a string');
    }else if (password.length < 8 && password.length > 50) {
        errMsg.push('password must be between 8 to 50 chars');
    }

    if ( errMsg.length > 0 ) {
        res.status(400).send( { message: 'Bad credential', errors: errMsg });
        return;
    }

    try {
        const queryStr = `SELECT * 
                          FROM Users
                          WHERE username = ? 
                          AND password = ?`;

        const [user] = await db.default.execute(queryStr, [username, password]);

        let token;
        if (user.length > 0) {
            token = jwt.sign({username}, process.env.JWT_SECRET, { expiresIn: '7d' });
            res.send({ token });
        } else {
            res.status(401).send('Bad credentials');
        }


    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al insertar el usuario');
    }

}

module.exports = loginController;