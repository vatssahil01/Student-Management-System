import express from "express"
import { registerUser , loginUser } from "../controllers/auth.controller.js"
import { protect, authorizeRoles } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", protect, (req, res) => {
    res.json(req.user)
})
router.get(
  "/admin-only",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);


export default router