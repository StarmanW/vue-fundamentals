class Smoothie {
    constructor(id, name, price, slug, ingredients = [], imgSrc=null) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.slug = slug;
        this.ingredients = ingredients;
        this.imgSrc = imgSrc;
    }
}

export default Smoothie;