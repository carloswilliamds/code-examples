const mongoose = require("mongoose");
const Product = mongoose.model("Product")

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page: page, limit: 3});

        return res.json(products)
    },

    async show(req, res){
        const products = await Product.findById(req.params.id);

        return res.json(products)
    },

    async create(req, res){
        const product = await Product.create(req.body);
        return res.json(product)
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product)
    },

    async destroy(req, res){
        const product = await Product.findByIdAndDelete(req.params.id);

        res.send("Removido")
    }

}