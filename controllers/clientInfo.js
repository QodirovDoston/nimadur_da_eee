const Clients = require('../models/clientsInfo')

const TeamCtrl = {
    getInfo: async (req, res) =>{
        try {
            const info = await Clients.find()
            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {media, type1} = req.body;
            
            const newPost = new Clients({media, type1})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await Clients.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateInfo: async (req, res) =>{
        try {
            const {media, type1} = req.body;

            await Clients.findOneAndUpdate({_id: req.params.id}, {media, type1})

            res.json({msg: "Update a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = TeamCtrl