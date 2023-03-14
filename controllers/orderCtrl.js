const Order = require('../models/orderModel')

const OrderFunc = {
    getInfo: async (req, res) =>{
        try {
            const info = await Order.find()
            res.json(info)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createInfo: async (req, res) =>{
        try {
            const {title, email, phone, company, sity, content} = req.body;
            
            const info = await Order.findOne({title})
            if(info)
                return res.status(400).json({msg: "This title already exists"}) 
            
            const newPost = new Order({title, email, phone, company, sity, content})

            await newPost.save()
            res.json({msg: "Create a Post info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteInfo: async (req, res) =>{
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Info"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = OrderFunc