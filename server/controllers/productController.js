const Product = require("../Models/ProductModel");
const { ObjectId } = require("mongodb");

//GET ALL PRODUCTS
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

//GET SINGLE PRODUCT
module.exports.getProductById = async (req, res, next) => {
    try {
        // const productId = ObjectId(req.params.id);
        const result = await Product.findById(req.params.id);
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
//ADMIN GET ALL PORDUCTS
module.exports.adminGetAllProducts = async (req, res, next) => {
    try {
        const result = await Product.find({}).sort({ _id: -1 });
        console.log(result)
        res.json(result)

    } catch (error) {
        console.log("cheking the error of admin p")
        next(error);
    }
}

//ADD PRODUCT
module.exports.addProduct = async (req, res, next) => {
    try {
        const { name, price, description, image, countInStock } = req.body;
        const productExist = await Product.findOne({ name });
        if (productExist) {
            res.status(400);
            throw new Error("Product name already exist !");
        } else {
            const product = new Product({
                name,
                price,
                description,
                image,
                countInStock,
                user: req.user._id,
            });
            if (product) {
                const createProduct = await product.save();
                res.status(201).json(createProduct);
            } else {
                res.status(400);
                throw new Error("Invalid data")
            }
        }

    } catch (error) {
        next(error);
    }
}
//EDIT PRODUCT
module.exports.editProduct = async (req, res, next) => {
    try {
        const { name, price, description, image, countInStock } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name || product.name;
            product.price = price || product.price;
            product.description = description || product.description;
            product.image = image || product.image;
            product.countInStock = countInStock || product.countInStock;
            const updateProduct = await product.save();
            res.status(201).json(updateProduct);

        } else {
            res.status(404);
            throw new Error("Product not found.")
        }

    } catch (error) {
        next(error);
    }
}


//PRODUCT REVIEW
module.exports.productReview = async (req, res, next) => {
    try {
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            );
            if (alreadyReviewed) {
                res.status(400);
                throw new Error("Product already Reviewed");
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user._id,
            }
            product.reviews.push(review);
            console.log(product.reviews.length);

            product.numReviews = product.reviews.length;
            product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length
            await product.save();
            res.status(201).json({ message: "Review Added" })
        } else {
            res.status(404);
            throw new Error("Product not Found");
        }
    } catch (error) {
        next(error);
    }
}



//PRODUCT DELETE
module.exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.json({ message: "Product deleted. " });
        }
    } catch (error) {
        res.status(404);
        throw new Error("Product Not-Found.")
    }
}