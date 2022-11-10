import { Router } from "express";

import createUser from "../handlers/users/create-user.handler";

const router = Router()

router.post("/", createUser)

export default router
