const Post = require('../models/postModels')

//Filter, sorting and paginating
class APIfeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 100
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}

const postCtrl = {
    getPost: async (req, res) =>{
        try {

            const features = new APIfeatures(Post.find(), req.query)
                .filtering().sorting().paginating()

            const posts = await features.query

            posts.sort((a,b) =>{
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
            

            res.json({
                status: 'seccuss',
                result: posts.length,
                posts: posts
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPost: async (req, res) =>{
        try {
            const {titleEng, title,  descriptionRu, descriptionEn, media, category, userID, links, type1, type2, type3} = req.body;
            if(!media) 
                return res.status(400).json({msg: "No image upload"})

            const post = await Post.findOne({title})
            if(post)
                return res.status(400).json({msg: "This Post already exists"})

            const newPost = new Post({
                userID, titleEng, title,  descriptionRu, descriptionEn,  category, media, links, type1, type2, type3
            })

            await newPost.save()
            res.json({msg: "Created a Post"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deletePost: async (req, res) =>{
        try {
            await Post.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted a Post"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updatePost: async (req, res) =>{
        try {
            const {titleEng, title,  descriptionRu, descriptionEn, media, category, links, type1, type2, type3} = req.body;
            if(!media) 
                return res.status(400).json({msg: "No image upload"})
            await Post.findOneAndUpdate({_id: req.params.id}, {
                title: titleEng, title,  descriptionRu, descriptionEn,  category, media, links, type1, type2, type3
            })

            res.json({msg: "Updated a Post"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = postCtrl