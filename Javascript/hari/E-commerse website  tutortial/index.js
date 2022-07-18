// declaring variables
 const cartButton =document.querySelector(".cart");
 const closeCartButton =document.querySelector(".close-cart");
 const closeButton =document.querySelector(".close-button");
 const clearCarButton =document.querySelector('.clear-cart-btn');
 const cartDOM =document.querySelector(".cart");
 const cartOverlay =document.querySelector(".cart-overlay");
 const cartItems =document.querySelector(".cart-items");
 const cartTotal =document.querySelector(".cart-total");
 const cartContent =document.querySelector(".cart-content");
 const productsDOM = document.querySelector(".products-center");
 //cart
 let cart  = [];
 //gettings the product so creating class
class Products
{
async getProducts(){
    try {
       let result =await fetch("products.json")
       let data = await result.json();
      let Products =data.items;

    list = products.map(item =>{ 
        const {title,price}= item.fields;
        const {id} =item.sys
        const image =item.fields.image.fields.file.url;
        return {title,price,id,image}
      })
      return list;
    
 } catch (error) {
        console.log(error);
        
    }   
}
}
// displaying the product in js
class UI
{
 displayProducts(list)
 {
    let result = "";
    products.forEach(product => {
        result +=` <!------------------for one product--------->
        <article class="products">
        <div class="img-container">
            <img src=${product.image} class="product-img">
             <button class="add-to-cart-button" data-id=${product.id}>
                <i class="fa-solid fa-cart-shopping"></i>
                add to cart
             </button>
        </div>
        <h3>
           
           ${product.title}
        </h3>
        <h4>
            $${product.price}
        </h4>
    </article>
    `;
         });
         console.log(product.image);
         productsDOM.innerHTML = result;
 }
}
//local storage
class Storage
{

}
document.addEventListener("DOMContentLoaded" , () => {
    const ui = new UI();
    const list = new Products();
    //get all products
    products.getProducts().then(products => ui.displayProducts(products))
});
