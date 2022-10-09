let cancelbtn=document.querySelector(".popup_cencelbtn")
let popup=document.querySelector(".popup")
let product=document.querySelector(".popup_product")




cancelbtn.addEventListener("click",()=>{
  popup.classList.add("hide")
})




popupbody.addEventListener("click",(e) => {
  let trprice = 0
  popupbody.innerHTML=null

if(e.target.classList[0]="popup_remove_btn"){
  // console.log(e.target.id)
  let cartproduct=JSON.parse(localStorage.getItem("a"))
  newArr = cartproduct.filter((x) => x.id != e.target.id)

  newArr.forEach(element => {
    data.forEach(e =>{

      if (element.id == e.id) {
        trprice += (e.price * element.qut)
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
    
  });
  popuptotal.innerText=`₹${trprice}`
  Totalprice.innerText=trprice
  bag.innerText=newArr.length
      let str1 = JSON.stringify(newArr)
      localStorage.setItem("a", str1)

  // e.target.parentElement.remove()
  // console.log(e.target.parentElement);
}

})