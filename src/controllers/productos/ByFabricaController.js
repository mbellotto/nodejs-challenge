const db = require('../../core/database');

async function getProductosByFabrica(req, res) { 
    try {
        const queryStr = `SELECT * 
                          FROM Fabrica F
                          LEFT JOIN Productos P
                          ON P.IdFab = F.IdFab
                          ORDER BY P.idFab ASC;`;
        
        const [productos] = await db.default.query(queryStr);

        let response = [];
        if (productos.length) {
            let fabricaId = null;
            let fabrica = null;
            for (const producto of productos) {
                if ( fabricaId !== producto.IdFab ) {
                    if (fabrica) {
                        response.push(fabrica);
                    }
                    fabrica = {
                        idFab: producto.IdFab,
                        Descripcion: producto.Descripcion,
                        productos: []
                    }
                }
                fabrica.productos.push(producto);
            }
        }

        res.json(response);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al obtener los productos');
    }
}

module.exports = getProductosByFabrica;