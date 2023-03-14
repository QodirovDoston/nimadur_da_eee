const Category = require('../models/category')

const CategoryCtrl = {
    getInfo: async (req, res) =>{
        try {
            const info = await Category.find()
            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {titleEng, title,  descriptionRu,  descriptionEn, media} = req.body;
            const info = await Category.findOne({title})
            if(info)
                return res.status(400).json({msg: "This title already exists"}) 
            
            const newPost = new Category({titleEng, title,  descriptionRu,  descriptionEn, media})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateInfo: async (req, res) =>{
        try {
            const {titleEng, title,  descriptionRu,  descriptionEn, media} = req.body;

            await Category.findOneAndUpdate({_id: req.params.id}, {titleEng, title,  descriptionRu,  descriptionEn, media})

            res.json({msg: "Update a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = CategoryCtrl