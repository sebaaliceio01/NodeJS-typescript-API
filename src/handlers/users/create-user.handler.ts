import { Request, Response } from "express";
import User from "../../models/user.model";

const createUser = async (req: Request, res: Response) => {

    const { username, lastname } = req.body

    const user = await User.create({ firstName: username, lastName: lastname });

    res.send({ user })
}

export default createUser