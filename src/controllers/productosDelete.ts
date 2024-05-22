import { Request, Response } from "express";
import db from '../core/database';

export const deleteProducto = async (req: Request, res: Response) => { 
    const { params } = req;

    try {
        const queryStr = `SELECT * 
                          FROM Productos P 
                          LEFT JOIN Fabrica F 
                          ON P.IdFab = F.Id
                          WHERE P.Id = ?;`;
        
        const [productos] = await db.execute(queryStr, [params.id]);
        console.log(JSON.stringify(productos,null,4));
        res.send(`Delete Product with ID: ${params.id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrió un error al obtener los productos');
    }

}