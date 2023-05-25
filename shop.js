const carts = document.querySelectorAll(".add-cart");

let listsOfItems = [
    {
        name: "number 2 pencils",
        tag: 'number2pencils',
        price: 5.99,
        inCart: 0
    },
    {
        name: "Stapler",
        tag: "black stapler",
        price: 10.99,
        inCart: 0
    },
    {
        name: "G2",
        tag: "pens",
        price: 7.99,
        inCart: 0
    },
    {
        name: "eraser",
        tag: "eraser",
        price: 3.99,
        inCart: 0
    }
];

for(i=0; i<carts.length;i++){
    carts[i].addEventListener('click',() => {
        Carts(listsOfItems[i])
    })
}

function onLoadCart() {
    let products = localStorage.getItem("Carts")

    if(products) {
        document.querySelector('.cart span').textContent = products
    }
}

function Carts(listsOfItems){
    console.log("The product is " + listsOfItems)
    let products = localStorage.getItem("Carts");
    products = parseInt(products)
    if(products){
        localStorage.setItem("Carts", products + 1)
        document.querySelector('.cart span').textContent + 1;
    }else{
        localStorage.setItem("Carts",1)
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCart()