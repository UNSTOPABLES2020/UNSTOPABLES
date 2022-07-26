// declaring variables
 const cartButton =document.querySelector(".cart-btn");
 const closeCartButton =document.querySelector(".close-cart");
 const closeButton =document.querySelector(".close-button");
 const clearCartBtn =document.querySelector('.clear-cart-btn');
 const cartDOM =document.querySelector(".cart");
 const cartOverlay =document.querySelector(".cart-overlay");
 const cartItems =document.querySelector(".cart-items");
 const cartTotal =document.querySelector(".cart-total");
 const cartContent =document.querySelector(".cart-content");
 const productsDOM = document.querySelector(".products-center");
  const buttons = document.querySelectorAll(".add-to-cart-button");
  
 //cart
 let cart  = [];
 //buttons
 let buttonsDOM =[];
 //gettings the product so creating class
class Products {
async getProducts() {
    console.log('innnn 1');
    //getting the products from "product.json " fiel by converting them into arrays and mapping with the json data provided
    try {
       let result =  await fetch("products.json")
       let data = await result.json();
      let products =data.items;
       products = products.map((item) => { 
        const { title, price } = item.fields;
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        return {title, price, id, image };
      });
      return products;
    
 } catch (error) {
        console.log(error);

    }   
}
}
// displaying the product in js
class UI {
 displayProducts(products)
 {
    //displayig the products in the web browser
    let results = "";
    products.forEach(product => {
        results +=` <!------------------for one product--------->
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
         productsDOM.innerHTML = results;
        }
        //for making the function of the "add to cart button" use in html by this getBagButton
 getBagButtons(){
    const buttons = [...document.querySelectorAll(".add-to-cart-button")];
    buttonsDOM =buttons;
buttons.forEach(button =>
    {
        //crerating the function "id" and finding the id of the products respectively
        let id=button.dataset.id;
        //finding the values in the cart and making the "add to cart"==> into "added"
        let inCart =cart.find(item => item.id ===id);
        if(inCart)

        {
            //making the text in the add to cart button as added as it is contained in the cart and making the add to cart button disabled after then product is found in the cart
button.innerText ="added";
button.disabled = true;
        }
            //using the event listener to make an event of "click"
            button.addEventListener("click", event =>
            {
                 //making the text in the add to cart button as added as the button is clicked "the event click" happens and making the add to cart button disabled after then product is clicked and the event is happend 
                event.target.innerText = "added";
                event.target.disabled = true;
                //first get the product from the products list
                let cartItem = {...Storage.getProduct(id), amount: 1 };
                
                //add the product to tha cart
              cart = [...cart, cartItem];
             
                
                // save the cart in the local storage
                Storage.saveCart(cart)
                //set the cart value
                this.setCartValues(cart);
                // add the cart item according to the working of the buttons
                this.addCartItem(cartItem);
                //show the cart
                this.showCart();

            });
 });

      }
      setCartValues(cart)
      {
        let tempTotal = 0;
        let itemsTotal =0;
        cart.map(item => {
                tempTotal +=item.price * item.amount;
                itemsTotal += item.amount;
            });
      
      cartTotal.innerText =parseFloat(tempTotal.toFixed(2));
      cartItems.innerText =itemsTotal;
  

 }
 addCartItem(item){
const div = document.createElement('div');
div.classList.add('cart-item');
div.innerHTML =`<img src=${item.image} alt="product">
<div>
    <h4>
      ${item.title}
    </h4>
<h5>
 $${item.price}
</h5>
 <span class="remove-item" data-id=${item.id} >remove</span>
</div>

            <div>
                <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
            
            </div>`;
            cartContent.appendChild(div);
          
 }
showCart(){
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');

}
setupAPP()
{
    cart = Storage.getCart();
    this.setCartValues(cart);
    
    this.populateCart(cart);
    cartButton.addEventListener('click',this.showCart);
    closeCartButton.addEventListener('click',this.hideCart);
     
}
populateCart(cart)
{
    cart.forEach(item => this.addCartItem(item));
}
hideCart()
{ cartOverlay.classList.remove('transparentBcg');
cartDOM.classList.remove('showCart');
}
//clear cart button
cartLogic()
{
    clearCartBtn.addEventListener("click", () =>
    {
       this.clearCart();
    });
    cartContent.addEventListener("click", event =>  {
        if(event.target.classList.contains("remove-item"))
       { let removeItem =event.target;
       let id = removeItem.dataset.id;
       cartContent.removeChild
       (removeItem.parentElement.parentElement);
      this.removeItem(id);
       }
      else if(event.target.classList.contains("fa-chevron-up"))
      {
        let addAmount =event.target;
        let id =addAmount.dataset.id;
       let tempItem =cart.find(item => item.id === id); 
        tempItem.amount =tempItem.amount + 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.nextSibiling.innerText =tempItem.amount;
          
      }
      else if(event.target.classList.contains("fa-chevron-down"))
      {
        let addAmount =event.target;
        let id =addAmount.dataset.id;
       let tempItem =cart.find(item => item.id === id); 
        tempItem.amount =tempItem.amount - 1;
        if(tempItem.amount > 0)
        {
Storage.saveCart(cart);
this.setCartValues(cart);
addAmount.previousSibiling.innerText =tempItem.amount;
        }
       
      }   
      else{
            cartContent.removeChild(lowerAmount.parentamount.parentamount);
            this.removeItem(id);

      }
    });

};

//cart functionality
clearCart()
{
    let cartItems =cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id))
    while(cartContent.children.length>0)
    {
        cartContent.removeChild(cartContent.children[0])
    }
    this.hideCart();
   
}
removeItem(id)
{
cart = cart.filter(item =>item.id !==id);
this.setCartValues(cart);
Storage.saveCart(cart);
let button = this.getSingleButton(id);
button.disable =false;

button.innerHTML=`  <i class="fa-solid fa-cart-shopping"></i>
add to cart`;
}
getSingleButton(id)
     {
return buttonsDOM.find(button => button.dataset.id === id);
    }
}


//local storage
class Storage
{
    //ascessing the local storage and saving the array of products in the local storage
    static saveProducts(products)
    {
        localStorage.setItem("products",JSON.stringify(products))
    }       
     static getProduct(id)
    {
        let products =JSON.parse(localStorage.getItem
            ('products'));
            return products.find(product => product.id === id)
    }
    static saveCart(cart)
    {
        localStorage.setItem('cart-btn',JSON.stringify(cart))
    }   
    static getCart()
    {
        return localStorage.getItem('cart-btn')?JSON.parse(localStorage.getItem('cart-btn')):[]
    }
        
}

 document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // setup app
    ui.setupAPP();
    console.log('---------')
    //get all products
    products.getProducts().then((products) => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
 }).then(() => 
 {
   ui.getBagButtons();
   ui.cartLogic()
 });
});
