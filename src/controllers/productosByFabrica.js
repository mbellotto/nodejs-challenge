const db = require('../core/database');

async function getProductosByFabrica(req, res) { 
    try {
        const queryStr = `SELECT * 
                          FROM Productos P 
                          LEFT JOIN Fabrica F 
                          ON P.IdFab = F.Id;`;
        
        const [productos] = await db.default.query(queryStr);
        res.json(productos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al obtener los productos');
    }
}

module.exports = getProductosByFabrica;