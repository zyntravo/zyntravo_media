const productContainer = 
document.getElementById("products");



function displayProducts(items){


productContainer.innerHTML = "";



items.forEach(product => {


productContainer.innerHTML += `


<div class="product-card">


<span class="badge">
🔥 Best Deal
</span>



<img src="${product.image}" 
alt="${product.name}">



<h3>
${product.name}
</h3>



<div class="rating">
${product.rating}
</div>



<p>

<span class="old-price">
${product.oldPrice}
</span>


<br>


<span class="sale-price">
${product.price}
</span>


</p>



<a href="${product.link}" 
target="_blank">


<button>

🛒 Check Price

</button>


</a>



</div>


`;

});


}




// Load Products

displayProducts(products);





// Search Function


document
.getElementById("searchBox")
.addEventListener("input", function(){



let value = 
this.value.toLowerCase();



let filteredProducts = 
products.filter(product =>



product.name
.toLowerCase()
.includes(value)



);



displayProducts(filteredProducts);



});
