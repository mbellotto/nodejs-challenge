

function createProducto(req, res) {
    const producto = {
        Id: 1,
        Descripcion: 'Primer Producto',
        Precio: 1000.50,
        Existencias: 2,
        IdFab: 1
    };
    
    res.send({ status: 'Ok', payload: producto });
}

module.exports = createProducto;