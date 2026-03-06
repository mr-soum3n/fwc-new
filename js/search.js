document.getElementById("searchBox")
.addEventListener("input",function(){

let q=this.value.toLowerCase()

document.querySelectorAll(".product")
.forEach(p=>{

p.style.display =
p.innerText.toLowerCase().includes(q)
? "block":"none"

})

})
