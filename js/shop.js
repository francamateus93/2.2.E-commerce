// import products from './products.js';

var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
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
  let findProduct = products.find((i) => i.id === id);
  let cartProduct = cart.find((i) => i.id === id);

  if (findProduct) {
    if (cartProduct) {
      cartProduct.quantity += 1;
    } else {
      cart.push({ ...findProduct, quantity: 1 });
      console.log(cart);
    }
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
    return total;
  }
}

// Exercise 4
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"

  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];

    if (product.id === 1 && product.quantity >= 3) {
      product.subtotalWithDiscount = product.price * product.quantity * 0.8;
    } else if (product.id === 3 && product.quantity >= 10) {
      product.subtotalWithDiscount = product.price * product.quantity * 0.7;
    } else {
      product.subtotalWithDiscount = product.price * product.quantity;
    }
    console.log(subtotalWithDiscount);
    console.log(cart);
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  const cartList = document.getElementById("cart_list");
  cartList.innerHTML = "";

  const totalCartList = document.getElementById("total_price");
  totalCartList.innerHTML = "";

  cart.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `<th scope=row>${product.name}</th>
    <td>${product.price}</td>
    <td>${product.quantity}</td>
    <td>${
      product.subtotalWithDiscount || product.price * product.quantity
    }</td>`;
    cartList.appendChild(row);
  });

  const totalCart = cart.reduce((total, product) => {
    return (
      total + (product.subtotalWithDiscount || product.price * product.quantity)
    );
  }, 0);

  totalCartList.innerHTML = `${totalCart}€`;

  calculateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  let product = cart.find((i) => i.id === id);

  if (product) {
    if (product.quantity === 1) {
      cart.splice(product, 1);
    } else {
      product.quantity -= 1;
    }
  }
}

applyPromotionsCart(cart);

function open_modal() {
  printCart();
}
