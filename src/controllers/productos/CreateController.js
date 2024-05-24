const db = require('../../core/database');

async function createProducto(req, res) {

    let errMsg = [];

    const { Id, Descripcion, Precio, Existencias } = req.body;

    if ( typeof Id === 'undefined' ) {
        errMsg.push('Id is missing');
    } else if ( Id && isNaN(Id) ) {
        errMsg.push('Id must be a number');
    }

    if ( typeof Descripcion === 'undefined' ) {
        errMsg.push('Descripcion is missing');
    } else if ( Descripcion && typeof Descripcion !== 'string' ) {
        errMsg.push('Descripcion must be a string');
    }

    if ( typeof Precio === 'undefined' ) {
        errMsg.push('Precio is missing');
    } else if ( Precio && isNaN(Precio) ) {
        errMsg.push('Precio must be a number');
    }

    if ( typeof Existencias === 'undefined' ) {
        errMsg.push('Existencias is missing');
    } else if ( Existencias && isNaN(Existencias) ) {
        errMsg.push('Existencias must be a number');
    }

    if ( errMsg.length > 0 ) {
        res.status(400).send('Missing information');
        return;
    }

    try {
        const insertProd = `INSERT INTO Productos 
                            (Id, Descripcion, Precio, Existencias)
                            VALUES (?,?,?,?);`;

        const result = await db.default.execute(insertProd, [Id, Descripcion, Precio, Existencias]);

        const IdFab = result[0].insertId;
    
        const insertFab = `INSERT INTO Fabrica (IdFab, Descripcion) VALUES (?,?);`
        await db.default.execute(insertFab, [IdFab, Descripcion]);

        res.send({ status: true, payload: { Id, Descripcion, Precio, Existencias, IdFab } });

    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al insertar la fabrica');
    }

}

module.exports = createProducto;