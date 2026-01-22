import bcrypt from "bcryptjs"
import User from "../models/User.js"

export const registerUser = async (req, res) =>{
    try{
        const { name, email, password, role} = req.body

        // 1. Check if user exists
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }

        // 2. Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)


        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedpassword,
            role
        })

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
             message: error.message
        })
    }
}