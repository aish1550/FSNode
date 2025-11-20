import { Product } from "../models/product.js"

export const getAddProductController = (req, res, next) => {
    res.render('add-product', { docTitle: "Adding products" })
}

export const postProductController = (req, res, next) => {
    const { title, description } = req.body
    const product = new Product(title, description);
    product.save();
    res.redirect('/');
}