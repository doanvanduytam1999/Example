export class Product{
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;


    constructor(id, name, description = '', price = 0, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}