const products = {
    veg: [
        {id:1, name:"Mango Pickle(Pieces)", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooooo.jpeg"},
        {id:2, name:"Tomato Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/Tomato2.jpg"},
        {id:3, name:"Lemon Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/Lemon.jpg"},
        {id:4, name:"Vusirikaya Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/Amla.jpg"},
        {id:5, name:"Chinthakaya Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/Tamrind.jpeg"},
        {id:6, name:"Gongura Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooo.jpg"},
        {id:7, name:"PanduMirchi Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooo.jpg"},
        {id:8, name:"Mango Pickle(Thurumu)", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooo.jpg"},
        {id:9, name:"Gongura Pandu Mirchi Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooo.jpg"},
        {id:10, name:"Kakarakaya Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooo.jpg"},
        {id:11, name:"Allam Pickle", prices: {"250g":129,"500g":249,"1000g":499}, image:"images/mangooo.jpg"}
    ],
    nonveg: [
        {id:12, name:"Chicken Pickle(Boneless)", prices: {"250g":329,"500g":699,"1000g":1299}, image:"images/nonveg.jpg"},
        {id:13, name:"Chicken Pickle", prices: {"250g":249,"500g":499,"1000g":999}, image:"images/nonveg.jpg"},
        {id:14, name:"Chicken Kheema", prices: {"250":399,"500g":799,"1000g":1499}, image:"images/nonveg.jpg"},
        {id:15, name:"Mutton Pickle(Boneless)", prices: {"250":499,"500":999,"1000g":1999}, image:"images/nonveg.jpg"},
        {id:16, name:"Mutton Pickle", prices: {"250":399,"500":799,"1000g":1499}, image:"images/nonveg.jpg"},
        {id:17, name:"Mutton Kheema", prices: {"250":649,"500":1249,"1000g":2499}, image:"images/nonveg.jpg"},
        {id:18, name:"Prawn Pickle", prices: {"250":399,"500":799,"1000g":1499}, image:"images/nonveg.jpg"}
    ],
    snacks: [
        {id:19, name:"Murukulu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Murukuluimage.jpg"},
        {id:20, name:"Sakinalu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Sakinalu.jpg"},
        {id:21, name:"Chekkalu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Chekkalu.jpg"},
        {id:22, name:"Kajji Kayalu", prices: {"20 Piece":300,"40 Piece":589,"100 Pieces":1499}, image:"images/Kajjikayalu.jpg"},
        {id:23, name:"Ravva Laddu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Ravvaladdu.jpg"},
        {id:24, name:"Boondhi Laddu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Boondhiladdu.jpg"},
        {id:25, name:"Sweet Gavvalu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Sweetgavvalu.jpg"},
        {id:26, name:"Kaaram Gavvalu", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Kaaramgavvalu.jpg"},
        {id:27, name:"Ariselu", prices: {"250g":139,"500g":299,"1000g":449}, image:"images/Ariselu.jpg"},
        {id:28, name:"Kaaram Boondhi", prices: {"250g":89,"500g":179,"1000g":349}, image:"images/Kaaramboondhi.jpg"}
    ],
    podulu: [
        {id:29, name:"Karvepaku Podi", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Karvepaku.jpg"},
        {id:30, name:"Munagaaku Podi", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Munagaaku.jpg"},
        {id:31, name:"KakaraKaaya Kaaram", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Kakarakai.jpg"},
        {id:32, name:"Vellulli Kaaram(Garlic)", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Vellulli.jpg"},
        {id:33, name:"Nalla Kaaram", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Nallakaram.jpg"},
        {id:34, name:"Senagalu Kaaram", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Groundnut.jpg"},
        {id:35, name:"Pallilu Podi(GroundNut)", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Palli.jpg"},
        {id:36, name:"Kandhi Podi", prices: {"250g":179,"500g":349,"1000g":699}, image:"images/Kandhi.jpg"}
    ]
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getCategoryFromURL(){
    const params = new URLSearchParams(window.location.search);
    return params.get("type");
}

if(document.getElementById("productsContainer")){

    const category = getCategoryFromURL();
    document.getElementById("categoryTitle").innerText = category.toUpperCase();
    const container = document.getElementById("productsContainer");

    products[category].forEach(item => {

        let options = "";
        for (let weight in item.prices) {
            options += `<option value="${weight}-${item.prices[weight]}">
                            ${weight} - ₹${item.prices[weight]}
                        </option>`;
        }

        container.innerHTML += `
            <div class="product-card">
                <img src="${item.image}">
                <h4>${item.name}</h4>

                 
                <select class="weight-dropdown" id="weight-${item.id}">
                    ${options}
                </select>

                <div class="cart-row">
                    <div class="qty-controls">
                        <button onclick="changeQty(${item.id}, -1)">-</button>
                        <span id="qty-${item.id}">0</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>

                    <button id="add-btn-${item.id}" 
                        onclick="addToCart(${item.id}, '${item.name}')">
                        Add to Cart
                    </button>
                </div>

                <p class="error-msg" id="error-${item.id}"></p>

            </div>
        `;
    });
}

function changeQty(id, change){
    const qtySpan = document.getElementById("qty-"+id);
    let qty = parseInt(qtySpan.innerText);
    qty += change;
    if(qty < 0) qty = 0;
    qtySpan.innerText = qty;
}

function addToCart(id, name){

    const qty = parseInt(document.getElementById("qty-"+id).innerText);

    if(qty === 0){
        const errorEl = document.getElementById("error-"+id);
        errorEl.innerHTML = "⚠ Please select quantity";
        errorEl.style.visibility = "visible";

        setTimeout(() => {
        errorEl.innerHTML = "";
        errorEl.style.visibility = "hidden";
        }, 2000);

        return;
    }      

    const select = document.getElementById("weight-"+id);
    const value = select.value.split("-");
    const weight = value[0];
    const price = parseInt(value[1]);

    cart.push({name, weight, price, qty});
    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Item Added to Cart ✓");

    updateStickyCart();

}


if(document.getElementById("cartItems")){
    displayCart();
}

function displayCart(){

    const cartDiv = document.getElementById("cartItems");
    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach(item => {

        total += item.price * item.qty;

        cartDiv.innerHTML += `
            <p>
                ${item.name} (${item.weight}) - ₹${item.price} x ${item.qty} = ₹${item.price * item.qty}
            </p>
        `;
    });

    document.getElementById("totalAmount").innerText = "Total: ₹" + total;
}

function checkout(){

    if(cart.length === 0){
        alert("Cart is empty");
        return;
    }

    let message = "Order Details:%0A";

    cart.forEach(item => {
        message += `${item.name} (${item.weight}) - ${item.qty} x ₹${item.price}%0A`;
    });

    window.open(`https://wa.me/7995440543?text=${message}`, "_blank");
}

// ================= CART PAGE LOGIC =================

// Load cart only if we are on cart page
document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("cartItems")) {
        loadCart();
    }

    updateStickyCart();  // ✅ ADD THIS

    const sticky = document.getElementById("stickyCart");

    if (sticky) {
        sticky.onclick = function () {
            window.location.href = "cart.html";
        };
    }

});

function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cartItems");
    const totalElement = document.getElementById("totalAmount");

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartContainer.innerHTML += `
                <div class="cart-item">

                    <div class="cart-info">
                        <h4>${item.name}</h4>
                        <div class="cart-meta">
                            <span>${item.weight}</span>
                            <span>₹${item.price}</span>
                        </div>
                    </div>

                    <div class="cart-qty">
                        <button onclick="updateQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty(${index}, 1)">+</button>
                    </div>

                    <div class="cart-total">
                        <p><strong>₹${item.price * item.qty}</strong></p>
                        <button class="remove-btn" onclick="removeItem(${index})">×</button>
                    </div>

                </div>
            `;
    });

    totalElement.innerText = total;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQty(index, change) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].qty += change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}



function showToast(message) {

    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // stays visible longer
}


function showCheckout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    document.getElementById("checkoutSection").style.display = "block";

    let summaryDiv = document.getElementById("orderSummary");
    summaryDiv.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;   // ✅ FIXED
        total += itemTotal;

        summaryDiv.innerHTML += item.name + " (" + item.weight + ") - ₹" + item.price + " x " + item.qty + 
                                " = ₹" + itemTotal + "<br>";   // ✅ FIXED
    });

    document.getElementById("finalTotal").innerText = total;
}


function sendToWhatsApp() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let house = document.getElementById("house").value;
    let street = document.getElementById("street").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("city").value;
    let district = document.getElementById("district").value;
    let pincode = document.getElementById("pincode").value;

    if (!name || !phone || !house || !street || !city || !district || !pincode) {
        alert("Please fill all required fields");
        return;
    }

    // Phone validation
        if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits");
        return;
    }

    // Pincode validation
    if (!/^[0-9]{6}$/.test(pincode)) {
        alert("Pincode must be exactly 6 digits");
        return;
    }

    let total = 0;

    let message = "🛒 *New Order - Aadhya Home Foods* %0A%0A";

    message += "*Customer Details* %0A";
    message += "Name: " + name + "%0A";
    message += "Phone: " + phone + "%0A";
    message += "Address: " + house + ", " + street + ", " + landmark + ", " + city + ", " + district + " - " + pincode + "%0A%0A";

    message += "*Order Details* %0A";

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;   // ✅ FIXED
        total += itemTotal;

        message += item.name + " (" + item.weight + ") x " + item.qty + " - ₹" + itemTotal + "%0A";  // ✅ FIXED
    });

    message += "%0ATotal Amount: ₹" + total;

    let whatsappURL = "https://wa.me/917995440543?text=" + message;

    window.open(whatsappURL, "_blank");
}


function updateStickyCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const sticky = document.getElementById("stickyCart");

    if (!sticky) return;

    if (cart.length > 0) {

        let total = 0;
        let count = 0;

        cart.forEach(item => {
            total += item.price * item.qty;
            count += item.qty;
        });

        sticky.style.display = "block";
        sticky.innerText = `🛒 View Cart ==> ${count} items | ₹${total}`;

    } else {
        sticky.style.display = "none";
    }
}

