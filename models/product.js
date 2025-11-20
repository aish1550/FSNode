import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { productsData } from "../constants/paths.js";

const getProducts = () => {
  try {
    const data = fs.readFileSync(productsData, {
      encoding: "utf8",
      flag: "r",
    });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export class Product {
  constructor(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.imageUrl = `https://picsum.photos/300/300?random=${this.id}`;
  }

  static fetchAllProducts() {
    return getProducts();
  }

  save() {
    let products = getProducts();
    products.push(this);

    try {
      fs.writeFileSync(productsData, JSON.stringify(products));
    } catch (err) {
      console.warn("can't write", err);
    }
  }
}
