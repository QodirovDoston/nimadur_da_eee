const ClientsMessage = require('../models/clientsMessageModels')

const ClientsMessages = {
    getInfo: async (req, res) =>{
        try {
            const info = await ClientsMessage.find()
            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {type1} = req.body;
            
            const newPost = new ClientsMessage({type1})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await ClientsMessage.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateInfo: async (req, res) =>{
        try {
            const {type1} = req.body;

            await ClientsMessage.findOneAndUpdate({_id: req.params.id}, {type1})

            res.json({msg: "Update a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = ClientsMessages