const Product = require("../Models/ProductModel");
const products = require("../data/Products");
const { ObjectId } = require("mongodb");

//checked
module.exports.getAllProducts = async (req, res, next) => {
    try {
        const pageSize = 9;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: "i",
                },
            }
            : {};
        const count = await Product.countDocuments({ ...keyword });
        const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1)).sort({ _id: -1 });
        res.json({ products, page, pages: Math.ceil(count / pageSize) });

    } catch (error) {
        next(error);
    }
}

//checked
module.exports.getProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const result = await Product.findById(productId);
        if (result) {
            res.json(result)
        } else {
            res.status(404);
            throw new Error("Product not found");
        }
    } catch (error) {
        next(error);
    }
}
//checked
module.exports.addProduct = async (req, res, next) => {
    try {
        const product = req.body;
        const result = await Product.create(product)
        res.json({ success: true, data: result })
    } catch (error) {
        next(error);
    }
}


module.exports.productReview = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports.deleteProduct = async(req, res, next )=> {
    try{

    }catch(error){
        
    }
}