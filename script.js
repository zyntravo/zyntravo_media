/* =========================
   DEAL FINDER 2.0
   script.js
========================= */

// Product Load

const productContainer = document.getElementById("productContainer");

function loadProducts(list = products){

    if(!productContainer) return;

    productContainer.innerHTML = "";

    list.forEach(product=>{

        productContainer.innerHTML += `

        <div class="product-card">

            <div class="discount-badge">
                SALE
            </div>

            <div class="wishlist">
                ❤️
            </div>

            <img src="${product.image}"
                 alt="${product.name}"
                 loading="lazy">

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐⭐⭐⭐⭐ (${product.rating})
                </div>

                <div class="price">

                    <span class="old-price">
                    ${product.oldPrice}
                    </span>

                    <span class="new-price">
                    ${product.price}
                    </span>

                </div>

                <a href="${product.link}"
                   target="_blank"
                   class="buy-btn">

                   Buy Now

                </a>

            </div>

        </div>

        `;

    });

}

loadProducts();


// ========================
// SEARCH
// ========================

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

const value = searchBox.value.toLowerCase();

const filtered = products.filter(item=>

item.name.toLowerCase().includes(value) ||

item.category.toLowerCase().includes(value)

);

loadProducts(filtered);

});

}


// ========================
// DARK MODE
// ========================

const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

};

}


// ========================
// BACK TO TOP
// ========================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(!topBtn) return;

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}


// ========================
// IMAGE GALLERY
// ========================

function changeImage(img){

const main=document.getElementById("mainImage");

if(main){

main.src=img.src;

}

}
