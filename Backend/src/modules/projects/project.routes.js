import express from "express"
import { createProject, updateProjectStatus, getProjects , assignTeacher, updateProjectProgress } from "./project.controller.js"
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
router.put(
  "/:id/status",
  protect,
  authorizeRoles("admin"),
  updateProjectStatus
);

// Get projects (role based)
router.get("/", protect, getProjects);

router.put(
  "/:id/assign-teacher",
  protect,
  authorizeRoles('admin'),
  assignTeacher
);


// Get  updateProjectProgress
router.put(
  "/:id/progress",
  protect,
  authorizeRoles("teacher"),
  updateProjectProgress
)


export default router