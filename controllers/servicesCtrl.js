const Services = require('../models/servicesModels')

const ServicesCtrl = {
    getInfo: async (req, res) =>{
        try {
            const info = await Services.find()
            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {titleEng, title,  contentRu, contentEn, media ,services1, services2, services3, type1, type2, type3} = req.body;
            if(!media)
                return res.status(400).json({msg: "No Image Upload"})
            const info = await Services.findOne({title})
            if(info)
                return res.status(400).json({msg: "This title already exists"}) 
            
            const newPost = new Services({titleEng, title,  contentRu, contentEn, media, services1, services2, services3, type1, type2, type3})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await Services.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateInfo: async (req, res) =>{
        try {
            const {titleEng, title,  contentRu, contentEn, media , services1, services2, services3 , type1, type2, type3} = req.body;
            if(!media)
                return res.status(400).json({msg: "No media upload"})

            await Services.findOneAndUpdate({_id: req.params.id}, {titleEng, title,  contentRu, contentEn, media , services1, services2, services3 , type1, type2, type3})

            res.json({msg: "Update a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = ServicesCtrl