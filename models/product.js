import { v4 as uuidv4 } from 'uuid';

export const products = [];

export class Product {
    constructor(title, description) {
        this.id = uuidv4();
        this.title = title;
        this.description = description
        this.imageUrl = `https://picsum.photos/300/300?random=${products.length}`
    }

    static fetchAllProducts() {
        return products
    }

    save() {
        products.push(this)
    }
}