import { Request, Response } from "express";
import { Product } from "../../models/product";



export const Products = async (req: Request, res: Response): Promise<void> => {
    try {
        const payloadProducts = await Product.find({})
        res.status(200).json(payloadProducts)

    } catch (error) {
        res.status(400).json()
    }
}