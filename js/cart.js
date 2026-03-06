let cart=[]

function addToCart(id){

let p=products.find(x=>x.id==id)

let quality=document.getElementById(`quality-${id}`).value
let qty=parseInt(document.getElementById(`qty-${id}`).value)

let price=quality=="standard"?p.standard_price:p.premium_price

cart.push({name:p.name,price,quality,qty})

updateCart()

}

function updateCart(){

let total=0
let html=""

cart.forEach(c=>{

html+=`<div>${c.name} x${c.qty}</div>`
total+=c.price*c.qty

})

let shipping=0

if(total<CONFIG.freeShipping){

let remain=CONFIG.freeShipping-total

document.getElementById("shippingMessage").innerText=
`Add ₹${remain} more to unlock FREE shipping`

shipping=CONFIG.shippingCharge

}

total+=shipping

document.getElementById("cartItems").innerHTML=html
document.getElementById("cartTotal").innerText=total

}

function applyCoupon(){
alert("Coupon system placeholder")
}

function goCheckout(){

let total=cart.reduce((t,i)=>t+i.price*i.qty,0)

if(total<CONFIG.minimumCheckout){
alert("Minimum order value ₹199")
return
}

localStorage.setItem("fwc_cart",JSON.stringify(cart))

location.href="checkout.html"

}
