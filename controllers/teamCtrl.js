const Team = require('../models/teamModels')

const TeamCtrl = {
    getInfo: async (req, res) =>{
        try {
            const info = await Team.find()

            info.sort((a,b) =>{
                let nameA = a.category.toUpperCase();
                let nameB = b.category.toUpperCase();

                if(nameA < nameB){
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }

                return 0
            })

            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {titleEng, title,  media, type1, type2, type3, category} = req.body;
            
            const newPost = new Team({titleEng, title,  media, type1, type2, type3, category})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await Team.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateInfo: async (req, res) =>{
        try {
            const {titleEng, title,  media, type1, type2, type3, category} = req.body;

            await Team.findOneAndUpdate({_id: req.params.id}, {titleEng, title,  media, type1, type2, type3, category})

            res.json({msg: "Update a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = TeamCtrl