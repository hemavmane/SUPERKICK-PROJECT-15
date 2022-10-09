
let y=parseInt(localStorage.getItem("x")) 
let Sdata=localStorage.getItem("apiData")
let data=JSON.parse(Sdata)

let singleproductpage=document.querySelector(".single-product-page")
let suggestionProduct=document.querySelector(".s-products")
let popupbody=document.querySelector(".popup_total_product")
let popuptotal=document.querySelector(".popup_price")

// let cartArray=[]

// if(!(localStorage.getItem("a"))){
//     localStorage.setItem("a",JSON.stringify(userArr))
// }

function showSelectProduct(){

    // fetch(`https://api.escuelajs.co/api/v1/products`)
    //  .then(response=>response.json())//text --> json
    //  .then(data=>{

        // console.log(data)

        data.forEach((e)=>{
       
            if(e.id==y){
              singleproductpage.innerHTML=`
              <section class="all-product-img">
                  <img class="smallimg" src="${e.images[0]}" alt="">
                  <img class="smallimg" src="${e.images[1]}" alt="">
                  <img class="smallimg" src="${e.images[2]}" alt="">
              </section>
              <section class="product-img">
                  <img class="zoomimg"src="${e.category.image}" alt="">
              </section>
              <section class="product-info">
                  <h3 class="product-brand-name">${e.brand}</h3>
                  <h1 class="product-name">${e.title}</h1>
                  <h2 class="product-price"><span>₹</span>${e.price}</h2>
                  <p class="product-details">${e.description}</p>
                  <div class="product-size-chat"><a href="../size chat/sizeChat.html">SIze Chat</a></div>
                  <div class="add-cart-box">
                      <input type="number" name="" id="" min="1" value="1">
                      <button id="${e.id}" class="popupshow">Add cart</button>
                  </div>
              </section>
              `
            }
          })   
    //    })
       
    }
     
showSelectProduct()
singleproductpage.addEventListener("mouseover",showImage)

function showImage(e){
        if(e.target.src){
            document.querySelector(".zoomimg").src=e.target.src
        }
}


function suggestionProductShow(){

//  fetch(`https://api.escuelajs.co/api/v1/products`)
//      .then(response=>response.json())//text --> json
//      .then(data=>{

        // console.log(data)
for(let i=1;i<5;i++) {
    data.forEach((e)=>{
    if(e.id==(y+i)){
        suggestionProduct.innerHTML+=`
        <div class="s-product">
        <a href="productDetail.html"><img src="${e.category.image}" alt="" class="s-product-img Sclick" id="${e.id}"></a>
            <p class="p-type">New Arivable</p>
            <p class="s-product-brand">${e.brand}</p>
            <p class="s-product-name Sclick" id="${e.id}">${e.title}</p>
            <p class="s-product-price"><span>₹</span>${e.price}</p>
        </div>
        `
    }
})   
}   
      
// })
}
suggestionProductShow()


suggestionProduct.addEventListener("click",suggestionProductshow)

function suggestionProductshow(e){

    // console.log(e.target.classList[1])
    if(e.target.classList[1]=="Sclick"){
        console.log(e.target.id)
        let id=e.target.id
        localStorage.setItem("x",`${id}`)

    }
}


singleproductpage.addEventListener("click",addproducttocartarray)

function addproducttocartarray(e){
    let flag=0
   
    // check if local is empty ---> if empty push to cartArry else----.> fetch the data from local push to cartarray then push the new data and stored in the local.
    if(e.target.id==y){
        popupbody.innerHTML=null
        popup.classList.remove("hide")

        if(localStorage.getItem("a")){
           
            let c=JSON.parse(localStorage.getItem("a"))
            
            c.forEach((e)=>{
                if(e.id==y){
                    flag++
                    alert("Adding Ones")
                }
            })
        
        }
    }


    if(!flag){
        let cart=JSON.parse(localStorage.getItem("a"))

          cart.push({
                id: e.target.id,
                qut:e.target.previousElementSibling.value
            })
            let str1=JSON.stringify(cart)
            localStorage.setItem("a",str1)
    }


    let bag = document.querySelector(".bag");
    let cart=JSON.parse(localStorage.getItem("a"))
    bag.innerText=cart.length
    
    let Totalprice = document.querySelector(".counter");
    let TotalPeoduct=JSON.parse(localStorage.getItem("apiData"))
    let headerprice = 0
    cart.forEach((element) => {
        TotalPeoduct.forEach((e) => {
            if (element.id == e.id) {
                headerprice += (e.price * element.qut)

                popupbody.innerHTML+=`
                <div class="popup_product">
                <div class="popup_remove_btn" id="${e.id}">x</div>
                <p class="popup_product_name">${e.title}</p>
                <div class="popup_product_img">
                  <img src="${e.category.image}" alt="" />
                </div>
              </div>
                `
            }
    
        })
    
    })
    
    // console.log(headerprice)
    popuptotal.innerText=`₹${headerprice}`
    Totalprice.innerText=headerprice

}
