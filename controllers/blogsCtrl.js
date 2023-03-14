const Blogs = require('../models/blogsModel')

const BlogsCtrl = {
    getInfo: async (req, res) =>{
        try {
            const info = await Blogs.find()

            info.sort((a, b) =>{
                return b.createdAt - a.createdAt
            })
            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {titleEng, title, descriptionRu, descriptionEn, media} = req.body;
            if(!media)
                return res.status(400).json({msg: "No Image Upload"})
            const info = await Blogs.findOne({title})
            if(info)
                return res.status(400).json({msg: "This title already exists"}) 
            
            const newPost = new Blogs({titleEng, title,  descriptionRu, descriptionEn, media})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await Blogs.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateInfo: async (req, res) =>{
        try {
            const {titleEng, title, descriptionRu, descriptionEn, media} = req.body;
            if(!media)
                return res.status(400).json({msg: "No media upload"})

            await Blogs.findOneAndUpdate({_id: req.params.id}, {titleEng, title, descriptionRu, descriptionEn, media})

            res.json({msg: "Update a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = BlogsCtrl