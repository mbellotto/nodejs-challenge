const db = require('../core/database');

async function createProducto(req, res) {
    const producto = {
        Id: 1,
        Descripcion: 'Primer Producto',
        Precio: 1000.50,
        Existencias: 2,
        IdFab: 1
    };

    console.log('Body: ', req.body);

    // try {
    //     const queryStr = `INSERT INTO Productos 
    //                       (Descripcion, Precio, Existencias, IdFab)
    //                       VALUES (?,?,?,?)`;

    //     await db.default.execute(queryStr, []);
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Ocurrió un error al obtener los productos');
    // }

    res.send({ status: 'Ok', payload: producto });
}

module.exports = createProducto;