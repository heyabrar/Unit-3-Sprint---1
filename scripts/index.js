//store the products array in localstorage as "products"

document.querySelector("form").addEventListener("submit", myform)

var arr = JSON.parse(localStorage.getItem("products")) || [ ];

function Products (type,desc,price,image){
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}

function myform(){
    event.preventDefault();

    let type = document.getElementById("type").value;

    let desc = document.getElementById("desc").value;

    let price = document.getElementById("price").value;

    let image = document.getElementById("image").value;

    let p = new Products(type,desc,price,image);
    arr.push(p);
    console.log(p)
    let data = localStorage.setItem("products",JSON.stringify(arr));

    document.getElementById("type").value =null;

    document.getElementById("desc").value =null;

    document.getElementById("price").value =null;

    document.getElementById("image").value =null;
}

//  ----->   this is the function of show products button ---->

    document.getElementById("showproduct").addEventListener("click", mysubmit)
function mysubmit(){
    window.location.href = "inventory.html"
}