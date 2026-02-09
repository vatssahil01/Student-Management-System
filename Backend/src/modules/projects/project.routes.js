import express from "express"
import { createProject, updateProjectStatus } from "./project.controller.js"
import { authorizeRoles, protect } from "../../middleware/auth.middleware.js"

const router = express.Router()

// Student submits project
router.post(
    "/",
    protect,
    authorizeRoles("student"),
    createProject
)

// Admin approves or rejects project
// Admin approves or rejects project
router.put(
  "/:id/status",
  protect,
  authorizeRoles("admin"),
  updateProjectStatus
);


export default router