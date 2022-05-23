let data  = JSON.parse(localStorage.getItem("products")) || [];

data.forEach(function(elem,index){

    let box = document.createElement("div");
    box.setAttribute("class","box");

    let image = document.createElement("img");
    image.setAttribute("src",elem.image);
    image.setAttribute("class","image")

    let type = document.createElement("p");
    type.textContent = "Type : "+elem.type;
    type.setAttribute("class","type");

    let desc = document.createElement("p");
    desc.textContent = "Description : " + elem.desc;
    desc.setAttribute("class","desc");

    let price = document.createElement("p");
    price.textContent = "price : "+ elem.price;
    price.setAttribute("class","price");

    let remove = document.createElement("button");
    remove.innerText = "Remove"
    remove.setAttribute("class", "removeButton")
    remove.addEventListener("click",function(){
        removebutton(elem,index)
    })

    box.append(image,type,desc,price,remove)
    document.getElementById("all_products").append(box);
})

// -----> this is the function of add more button ---->

document.getElementById("navbar").addEventListener("click", addmore)
function addmore (){
    window.location.href ="index.html"
}

// -----> this is the function of remove button ---->

function removebutton (elem,index){
    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}