//
// Products
//
db = db.getSiblingDB('catalogue');
db.products.insertMany([
    {sku: 'BBQCBR', name: 'BBQCBR', description: 'BBQ Chicken Burrito', price: 245, instock: 10, categories: ['Burrito']},
    {sku: 'CCHCBR', name: 'CCHCBR', description: 'Chilli Chipotle Chicken Burrito', price: 245, instock: 15, categories: ['Burrito']},
    {sku: 'CHIPBR', name: 'CHIPBR', description: 'Chipotle Paneer Burrito', price: 235, instock: 15, categories: ['Burrito']},
    {sku: 'CHFVBR', name: 'CHFVBR', description: 'Chipotle Fajita Veg Burrito', price: 225, instock: 5, categories: ['Burrito']},
    {sku: 'CPPCBB', name: 'CPPCBB', description: 'Crispy Peri Peri Chicken Burrito Bowl', price: 245, instock: 15, categories: ['BurritoBowl']},
    {sku: 'CCHCBB', name: 'CCHCBB', description: 'Chilli Chipotle Chicken Burrito Bowl', price: 245, instock: 20, categories: ['BurritoBowl']},
    {sku: 'BBQPBB', name: 'BBQPBB', description: 'BBQ Paneer Burrito Bowl', price: 235, instock: 10, categories: ['BurritoBowl']},
    {sku: 'PPPOBB', name: 'PPPOBB', description: 'Peri Peri Potato Burrito Bowl', price: 225, instock: 10, categories: ['BurritoBowl']},
    {sku: 'CCHCNC', name: 'CCHCNC', description: 'Chilli Chipotle Chicken Nachos', price: 245, instock: 15, categories: ['Nachos']},
    {sku: 'CHIPNC', name: 'CHIPNC', description: 'Chipotle Paneer Nachos', price: 235, instock: 20, categories: ['Nachos']},
    {sku: 'CCHCTC', name: 'CCHCTC', description: 'Chilli Chipotle Chicken Tacos', price: 245, instock: 15, categories: ['Tacos']},
    {sku: 'CHIPTC', name: 'CHIPTC', description: 'Chipotle Paneer Tacos', price: 235, instock: 20, categories: ['Tacos']},
    {sku: 'PPEPTC', name: 'PPEPTC', description: 'Peri Peri Paneer Tacos', price: 235, instock: 20, categories: ['Tacos']},
    {sku: 'CMDPSN', name: 'CMDPSN', description: 'Cheese Melt down Paneer Tacos', price: 79, instock: 20, categories: ['Snacks']},
    {sku: 'AVTSSN', name: 'AVTSSN', description: 'Avacado Tostada', price: 79, instock: 20, categories: ['Snacks']},
    {sku: 'AVTSSN', name: 'AVTSSN', description: '7 Layer Chicken Taco', price: 79, instock: 20, categories: ['Snacks']}
]);

// full text index for searching
db.products.createIndex({
    name: "text",
    description: "text"
});

// unique index for product sku
db.products.createIndex(
    { sku: 1 },
    { unique: true }
);

