const router = require('express').Router();

const { Intro, About, Experiences, Project, Achievement, Contact } = require("../models/portfolioModel");
const User = require("../models/userModel")
// get all port folio data
router.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experiences.find();
        const achievements = await Achievement.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            project: projects,
            contact: contacts[0],
            experiences: experiences,
            achievements: achievements
        })
    } catch (error) {
        res.status(500).send(error)
    }
})
//update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro Updated Successfully"
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

//update about
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated Successfully"
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

//add experiences
router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experiences(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully",
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// update-experience

router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experiences.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated successfully",
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// delete-experience
router.post("/delete-experience", async (req, res) => {
    try {
        const experiences = await Experiences.findOneAndDelete(
            { _id: req.body._id }
        )
        res.status(200).send({
            data: experiences,
            success: true,
            message: "Experience deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// add project
router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Added successfully"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

//update-project
router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// delete-project
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id })
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// add achievements
router.post("/add-achievement", async (req, res) => {
    try {
        const achievement = new Achievement(req.body);
        await achievement.save();
        res.status(200).send({
            data: achievement,
            success: true,
            message: "Achievement Added successfully"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})

//update-achievement
router.post("/update-achievement", async (req, res) => {
    try {
        const achievement = await Achievement.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: achievement,
            success: true,
            message: "Achievement updated successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// delete-achievement
router.post('/delete-achievement', async (req, res) => {
    try {
        const achievement = await Achievement.findOneAndDelete({ _id: req.body._id })
        res.status(200).send({
            data: achievement,
            success: true,
            message: "Achievement deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

// update-contact
router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        )
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact updated successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        })
        user.password = ""
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login successfully"
            })
        } else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username or password"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router

