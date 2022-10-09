let findUsCon=document.querySelector(".find_us_con")
console.log(findUsCon)
let contactus=[
{   
    city:"Bengaluru",
    adress:"No. 1079, Ground Floor, 12th Main Rd, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru",
    cityPin:"Karnataka -560038",
    mob:"+91 80-43029807",
},
{   
    city:"Mumbai",
    adress:" Ground Floor, Yashwant Smruti Building, 12th Road, Khar West, Off-Linking Road, Near Madhu Park,",
    cityPin:"Mumbai-400052",
    mob:"+91 80978 11422",
},
{
    adress:" Shop no 105, Ground floor, A-4 , DLF avenue, Saket, 110017",
    city:"Delhi ",
    mob:"+91 01146105324",
    cityPin:"Delhi -110017",
},
{
    adress:"Shop No. 26/26A City Center Mall, GS Road, Christian Basti, Guwahati, 781006",
    city:"Guwahati",
    mob:" +91 8453994654",
    cityPin:" -781006",
},
{
    adress:"8-2-589/3, Road No. 8, Banjara Hills, Hyderabad, Telangana 500034",
    city:"Hyderabad",
    mob:"+91 40 4856 6342",
    cityPin:"Telangana 500034",
},
]

function showAdress(){
    contactus.forEach(e =>{
        findUsCon.innerHTML+=`
        <div class="care_adress">
        <div>
          <p>
            <span>${e.city} :- </span>${e.adress}
          </p>
          <p>${e.cityPin}</p>
          <p><i class="fa-solid fa-phone"></i>:- ${e.mob}</p>
        </div>
        <div>
          <p>Monday – Sunday</p>
          <p>11 AM – 8 PM</p>
        </div>
      </div>
        `
    })
}
showAdress()