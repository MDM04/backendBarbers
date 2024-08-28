import { Request, Response } from "express";
import { User } from "../../models/user";



export const Barbers = async (req: Request, res: Response): Promise<void> => {
    try {
        const payloadProducts = await User.find({type:"barbers"})
        res.status(200).json(payloadProducts)

    } catch (error) {
        res.status(400).json()
    }
}