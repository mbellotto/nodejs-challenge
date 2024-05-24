import { Request, Response } from "express";
import db from '../../core/database';
import { ResultSetHeader, RowDataPacket } from "mysql2";

export const deleteProducto = async (req: Request, res: Response) => { 
    const { params } = req;

    try {
        const queryStr = `SELECT * 
                          FROM Productos P 
                          WHERE P.Id = ?;`;
        
        const [producto] = await db.query<RowDataPacket[]>(queryStr, [params.id]);

        console.log(producto.length, ' ---  ', producto);
        console.log(producto[0]);
        console.log(producto[0].Id);

        if (producto.length > 0) {
            const deleteProducto = `DELETE FROM Productos WHERE Id = ?;`;
            const resultado = await db.execute<ResultSetHeader>(deleteProducto, [params.id]);
            console.log('Resultado: ', resultado);
            res.send(`Delete Product with ID: ${params.id}`);
        } else {
            res.send(`Product with ID: ${params.id} not found`);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al eliminar el producto');
    }

}