



const products = [
{ id:1, name:"Milk" , price: 599.88654 },
{ id:2, name:"Cookies" , price: 29.1979 },
{ id:3, name:"Snacks" , price: 300 },
];

const productList = document.getElementById("product-list")
const empty = document.querySelector(".empty")
const total = document.querySelector(".total")
const totalItems = document.querySelector(".noofItems")
const price = document.querySelector(".price")


let clutter = "";

products.forEach(val=>{
    clutter += ` <div class="each-prod" data-id="${val.id}"> 
    <span>${val.name} - $${val.price.toFixed(2)} </span> 
    <button class="cartBtn">+</button>
    <button class="minusBtn">-</button>

    </div>`
})
productList.innerHTML = clutter

let itemCount = 0;
let totalPrice = 0;
const qtyMap = {};

productList.addEventListener("click", (ev) => {
  const productDiv = ev.target.closest(".each-prod");
  if (!productDiv) return;

  const prodId = Number(productDiv.dataset.id);
  const product = products.find(p => p.id === prodId);

  // Adding in the cart
  if (ev.target.classList.contains("cartBtn")) {
if (qtyMap[prodId]) {
  qtyMap[prodId] = qtyMap[prodId] + 1;
} else {
  qtyMap[prodId] = 1;
}

    itemCount++;
    totalPrice += product.price;
  }

  // Removing the products
  if (ev.target.classList.contains("minusBtn")) {
    if (!qtyMap[prodId]) return; 

    qtyMap[prodId]--;
    itemCount--;
    totalPrice -= product.price;

    if (qtyMap[prodId] === 0) {
      delete qtyMap[prodId];
    }
  }

  // Handling the UI part here 
  if (itemCount === 0) {
    empty.style.visibility = "visible";
    total.style.visibility = "hidden";
    return;
  }

  empty.style.visibility = "hidden";
  total.style.visibility = "visible";
  totalItems.textContent = `${itemCount} products selected`;
  price.textContent = `Total ${totalPrice.toFixed(2)}`;
});
