import express from "express"
import { createProject } from "./project.controller.js"
import { authorizeRoles, protect } from "../../middleware/auth.middleware.js"

const router = express.Router()

// Student submits project
router.post(
    "/",
    protect,
    authorizeRoles("student"),
    createProject
)

export default router