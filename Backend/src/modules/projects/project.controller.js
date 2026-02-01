import Project from "../../models/Project.js"

// Student : submit project
export const createProject = async (req, res) => {
    try {
        const { title, description } = req.body

        const project = await Project.create({
            title,
            description,
            student: req.user._id
        })

        res.status(201).json({
            message: "Project submitted successfully",
            project
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}