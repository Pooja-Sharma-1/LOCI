var login=document.querySelector("#profile")
var log=document.querySelector("#scrlog")
var flag=0
login.addEventListener("click",function(){
    if(flag==0){
        log.style.top="0"
        log.style.opacity="1"
        log.style.scale="1"
        flag=1
    }
    else{
        log.style.top="-100%"
        log.style.opacity="0"
        log.style.scale="0"
        flag=0
    }
    
})
var shop=[
    {imgc:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0V2hEy0jQwH1WPpEHyEV3pNEIoitdENQWTm8QDLaCwUUqmygsprxl0M6D4wRFsR1dGkgKoKTSxe3rjKwP0-np51k0EIjQEEGxXA3Ldw7z&usqp=CAE",cinfo:"plusS Women Rose Solid Bishop Sleeves Dress (4XL)",cinfo1:"",shopname:"Rashi clothing",shopadd:"tansen nagar",value:"786",review:"4.7"},
    {imgc:"https://sslimages.shoppersstop.com/sys-master/images/h5f/h33/27490139668510/A20MBSH20HRWH_WHITE_alt1.jpg_2000Wx3000H",cinfo:"Men's INHANCE Slim Fit Solid Shorts",cinfo1:"",shopname:"",shopadd:"",value:"209",review:"3.9"},
    {imgc:"https://cdn.fcglcdn.com/brainbees/images/products/300x364/12129085c.jpg",cinfo:"Babyhug Half Sleeves T-Shirt & Dungaree Dino Embroidery",cinfo1:"- Blue & Orange",shopname:"Firstcry",shopadd:"New High Court",value:"779",review:"4.3"},
    {imgc:"https://sslimages.shoppersstop.com/sys-master/images/h74/h76/26908957900830/WFT38072AP03_NoColour.jpg_2000Wx3000H",cinfo:"Fastrack Wearables ",cinfo1:"Unisex 37.25 mm Reflex Vox Champagne Pink Dial Silicone Smart Watch",shopname:"",shopadd:"",value:"2695",review:"4.5"},
    {imgc:"https://img101.urbanic.com/v1/goods-pic/997d1709ab564a669c70ec9b007cc365UR_w540_h720_q85.webp",cinfo:"Simplicity Straight leg Jeans",cinfo1:"",shopname:"",shopadd:"",value:"1290",review:"4.2"},
    {imgc:"https://cdn.fcglcdn.com/brainbees/images/products/300x364/12791099c.jpg",cinfo:"Babyoye Sports Shoes with Velcro Closure - White",cinfo1:"",shopname:"Illup Store",shopadd:"Birla Nagar",value:" 1131",review:"4.1"},
    {imgc:"https://assets.ajio.com/medias/sys_master/root/20210806/qxz7/610c5ba2aeb269a2686b2cc1/-1117Wx1400H-462745224-gold-MODEL.jpg",cinfo:"Pack of 2 Gold-Plated Layered Necklace",cinfo1:"",shopname:"JEWELS GALAXY",shopadd:"City Center",value:"270",review:"4.1"},
    {imgc:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9OhUzginN3SYcMB_R_B_Z9BIpkFggEVFsTHxCD19ubIOgRPT1m7DNbBabGVKKYiAXZs8M5gnOkcynV-9SX1nk3f9-9LYwAmhuyew6Xufwagxw20Jzwd-z2g",cinfo:"Crocs Unisex Adult clasic bone clog",cinfo1:"",shopname:"Crocyy",shopadd:"City Center",value:"1190",review:"4.6"},
    {imgc:"https://sslimages.shoppersstop.com/sys-master/images/hfe/hb3/17463907844126/A21INFUSE13_NAVY.jpg_230Wx334H",cinfo:"Printed Rayon Comfort Fit Men's Casual Shirt",cinfo1:"",shopname:"Infuse",shopadd:"Hazira",value:"378",review:"4.3"},
    {imgc:"https://sslimages.shoppersstop.com/sys-master/images/ha3/h2e/28786707398686/FMJJ142919503_WHITE.jpg_136Wx204H",cinfo:"Jack and Jones",cinfo1:"Polyurethane Regular Lace Up Mens Sneakers",shopname:"Classy Footwear House",shopadd:"Bada",value:"2786",review:"4.8"},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""},
    // {imgc:"",cinfo:"",cinfo1:"",shopname:"",shopadd:"",value:"",review:""}
]
var clutter=""
shop.forEach(function(elem){
    clutter+=`<div class="shop">
    <div id="product">
        <img src="${elem.imgc}" alt="">
    </div>
    <div id="details">
        <div id="con">
            <div id="info">
                <h3 id="clothd">${elem.cinfo}</h3>
                <h3 id="clothd1">${elem.cinfo1}</h3>

            </div>
            <div id="seller">
                <h3 id="sname">${elem.shopname}</h3>
                <h3 id="add">${elem.shopadd}</h3>
            </div>
        </div>
        <div id="rate">
            <h2 id="rating">${elem.review}<i class="ri-star-s-fill"></i></h2>
            
        </div>
        <div id="cost">
            <span>&#8377;</span>
            <h1>${elem.value}</h1>
        </div>
        <div id="buynow">
        <button>Buy Now</button>
    </div>
    <div id="addtocart">
        <button>Add to Cart</button>
    </div>

    </div>
</div>`
})
document.querySelector("#trend").innerHTML=clutter
const par=document.querySelectorAll(".particular")
console.log(par)
var counter = 0;
par.forEach(
    (elem,index) => {
        elem.style.left=`${index * 101}%`
    }
)
const goprev = () => {
    counter--;
    slider()
}
const gonext = () => {
    counter++;
    // alert("hey")
    slider()
}
const slider = () => {
    par.forEach(
        (elem) => {
            if(counter<=2){ 
                elem.style.transform=`translateX(-${counter * 101}%)`
            }
           
        }
    )
}
// console.log("rashi")
// const text=document.querySelector('.text')
// text.innerHTML=text.textContent.replace(/\S/g,"<span>$&</span>");
// const element=document.querySelectorAll('span');
// for(let i=0;i<element.length; i++){
//     element[i].style.transform="rotate("+i*1+"deg")"
// }