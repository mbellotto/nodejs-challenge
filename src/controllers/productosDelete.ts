import { Request, Response } from "express";

export const deleteProducto = (req: Request, res: Response) => { 
    const { params } = req;

    res.send(`Delete Product with ID: ${params.id}`);
}