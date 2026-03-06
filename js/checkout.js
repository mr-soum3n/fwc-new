let cart = JSON.parse(localStorage.getItem("fwc_cart") || "[]")

document.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault()

let order={
name:name.value,
whatsapp:whatsapp.value,
contact:contact.value,
address:address1.value,
cart:cart
}

console.log(order)

document.getElementById("popup").style.display="flex"

})

function closePopup(){
document.getElementById("popup").style.display="none"
}
