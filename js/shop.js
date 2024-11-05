// import products from './products.js';

var products = [
  {
    id: 1,
    name: "Nike Air",
    price: 120,
    type: "shoes",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Men's 6 Basic Waterproof",
    price: 250,
    type: "shoes",
  },
  {
    id: 3,
    name: "Response Super",
    price: 89,
    type: "shoes",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "Quechua Mountain Polarized Sunglasses",
    price: 29,
    type: "acessory",
  },
  {
    id: 5,
    name: "Stainless Steel Thermal Bottle",
    price: 19,
    type: "acessory",
  },
  {
    id: 6,
    name: "DC Shoes Nova Black Shoulder Bag",
    price: 29,
    type: "acessory",
  },
  {
    id: 7,
    name: "Adidas Sports Bag Black adjustable",
    price: 49,
    type: "acessory",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array
function buy(id) {
  const findProduct = products.find((i) => i.id === id);
  const cartProduct = cart.find((i) => i.id === id);

  const countProduct = document.getElementById("count_product");

  if (findProduct) {
    if (cartProduct) {
      cartProduct.quantity += 1;
    } else {
      cart.push({ ...findProduct, quantity: 1 });
    }

    const totalCart = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    countProduct.innerHTML = `${totalCart}`;
  }
}

// Exercise 2
function cleanCart() {
  cart = [];
}

cleanCart();

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return Number(total.toFixed(2));
}

// Exercise 4
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];

    if (product.id === 4 && product.quantity >= 3) {
      product.subtotalWithDiscount = product.price * product.quantity * 0.8;
    } else if (product.id === 5 && product.quantity >= 10) {
      product.subtotalWithDiscount = product.price * product.quantity * 0.7;
    } else {
      product.subtotalWithDiscount = product.price * product.quantity;
    }
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  applyPromotionsCart(cart);

  const cartList = document.getElementById("cart_list");
  cartList.innerHTML = "";

  const totalCartList = document.getElementById("total_price");
  totalCartList.innerHTML = "";

  cart.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `<th scope=row>${product.name}</th>
    <td>${product.price}</td>
    <td>${product.quantity}</td>
    <td>${Number(
      product.subtotalWithDiscount || product.price * product.quantity
    ).toFixed(2)}</td>
    <button onclick="addFromCart(${product.id})">+</button>
    <button onclick="removeFromCart(${product.id})">-</button>`;
    cartList.appendChild(row);
  });

  const totalCart = cart.reduce((total, product) => {
    return (
      total + (product.subtotalWithDiscount || product.price * product.quantity)
    );
  }, 0);

  totalCartList.innerHTML = `${totalCart.toFixed(2)}`;

  calculateTotal();
}

function addFromCart(id) {
  const product = cart.find((i) => i.id === id);

  if (product) {
    product.quantity += 1;
    applyPromotionsCart(cart);
    printCart();
  }
}

printCart();

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  const product = cart.find((i) => i.id === id);

  if (product) {
    if (product.quantity === 1) {
      cart.splice(product, 1);
    } else {
      product.quantity -= 1;
    }
    applyPromotionsCart(cart);
    printCart();
  }
}

applyPromotionsCart(cart);

function open_modal() {
  printCart();
}
