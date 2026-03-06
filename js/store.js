let products=[]

async function loadProducts(){

let res=await fetch("data/products.json")
products=await res.json()

let html=""

products.forEach(p=>{

html+=`
<div class="product">

<img src="${p.image}">

<h4>${p.name}</h4>

<select id="quality-${p.id}">
<option value="standard">Standard ₹${p.standard_price}</option>
<option value="premium">Premium ₹${p.premium_price}</option>
</select>

<input type="number" id="qty-${p.id}" value="1" min="1">

<button onclick="addToCart(${p.id})">Add</button>

</div>
`
})

document.getElementById("products").innerHTML=html

}

loadProducts()
