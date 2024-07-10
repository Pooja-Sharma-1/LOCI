var arr = [
    { img: "https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dwfe69d50c/tillys/images/catalog/1000x1000/456946104.jpg", brand: "Zaira", info: "Brown Tank", cost: "Rs-278", size: "Size:S" },
    { img: "https://i0.wp.com/buttchique.com/wp-content/uploads/2022/09/Untitled-design-2023-04-08T150524.752.webp?resize=600%2C600&ssl=1", brand: "Butt Chique", info: "Crop Racer Tank Top", cost: "Rs 1120", size: "Size:S" },
    { img: "https://flyingcdn-e81424e1.b-cdn.net/wp-content/uploads/2021/05/stores-like-lucy-in-the-sky2.jpeg", brand: "Nykaa", info: "Blue Styles Of The Spotlight dress", cost: "Rs 897", size: "Size:S" },
    { img: "https://i.etsystatic.com/25543253/r/il/34e854/3331434921/il_fullxfull.3331434921_g2ay.jpg", brand: "Asthetic Clothing", info: "Garden Frog Shirt Cute Frog Tshirt Cottagecore Clothing Cottagecore Frog Mori Girl Harajuku Aesthetic Yume Kawaii Frog Kawaii Aesthetic", cost: "Rs-545", size: "Size:M" },
    { img: "https://media.fatface.com/s/Fat_Face/979322_Coral-Pink_PLP_1_ALTERNATIVE?%24prod-tile-lge%24&fmt=auto&%24prod-tile-lge%24", brand: "Loai", info: "Short and Tee ", cost: "Rs 999", size: "Size:S" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs6tGTAxaxg3SAPQMrcAGHiGw2Koj2OTE-Z0Ern68aw&usqp=CAU&ec=48600113", brand: "99Designs", info: "Grey Text Tee", cost: "Rs 499", size: "Size:L" },
    { img: "https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dwfe69d50c/tillys/images/catalog/1000x1000/456946104.jpg", brand: "Zaira", info: "Brown Tank", cost: "Rs-278", size: "Size:S" },
    { img: "https://i0.wp.com/buttchique.com/wp-content/uploads/2022/09/Untitled-design-2023-04-08T150524.752.webp?resize=600%2C600&ssl=1", brand: "Butt Chique", info: "Crop Racer Tank Top", cost: "Rs 1120", size: "Size:S" },
    { img: "https://flyingcdn-e81424e1.b-cdn.net/wp-content/uploads/2021/05/stores-like-lucy-in-the-sky2.jpeg", brand: "Nykaa", info: "Blue Styles Of The Spotlight dress", cost: "Rs 897", size: "Size:S" },
    { img: "https://i.etsystatic.com/25543253/r/il/34e854/3331434921/il_fullxfull.3331434921_g2ay.jpg", brand: "Asthetic Clothing", info: "Garden Frog Shirt Cute Frog Tshirt Cottagecore Clothing Cottagecore Frog Mori Girl Harajuku Aesthetic Yume Kawaii Frog Kawaii Aesthetic", cost: "Rs-545", size: "Size:M" },
    { img: "https://media.fatface.com/s/Fat_Face/979322_Coral-Pink_PLP_1_ALTERNATIVE?%24prod-tile-lge%24&fmt=auto&%24prod-tile-lge%24", brand: "Loai", info: "Short and Tee ", cost: "Rs 999", size: "Size:S" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs6tGTAxaxg3SAPQMrcAGHiGw2Koj2OTE-Z0Ern68aw&usqp=CAU&ec=48600113", brand: "99Designs", info: "Grey Text Tee", cost: "Rs 499", size: "Size:L" },
    { img: "https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dwfe69d50c/tillys/images/catalog/1000x1000/456946104.jpg", brand: "Zaira", info: "Brown Tank", cost: "Rs-278", size: "Size:S" },
    { img: "https://i0.wp.com/buttchique.com/wp-content/uploads/2022/09/Untitled-design-2023-04-08T150524.752.webp?resize=600%2C600&ssl=1", brand: "Butt Chique", info: "Crop Racer Tank Top", cost: "Rs 1120", size: "Size:S" },
    { img: "https://flyingcdn-e81424e1.b-cdn.net/wp-content/uploads/2021/05/stores-like-lucy-in-the-sky2.jpeg", brand: "Nykaa", info: "Blue Styles Of The Spotlight dress", cost: "Rs 897", size: "Size:S" },
    { img: "https://i.etsystatic.com/25543253/r/il/34e854/3331434921/il_fullxfull.3331434921_g2ay.jpg", brand: "Asthetic Clothing", info: "Garden Frog Shirt Cute Frog Tshirt Cottagecore Clothing Cottagecore Frog Mori Girl Harajuku Aesthetic Yume Kawaii Frog Kawaii Aesthetic", cost: "Rs-545", size: "Size:M" },
    { img: "https://media.fatface.com/s/Fat_Face/979322_Coral-Pink_PLP_1_ALTERNATIVE?%24prod-tile-lge%24&fmt=auto&%24prod-tile-lge%24", brand: "Loai", info: "Short and Tee ", cost: "Rs 999", size: "Size:S" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs6tGTAxaxg3SAPQMrcAGHiGw2Koj2OTE-Z0Ern68aw&usqp=CAU&ec=48600113", brand: "99Designs", info: "Grey Text Tee", cost: "Rs 499", size: "Size:L" },
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
    // {img:"",brand:"",info:"",cost:""},
]
var collection = ""
arr.forEach(function(elem) {
    collection += `<div class="item">
    <div id="kapde">
        <img src="${elem.img}" alt="">
    </div> 
    <div id="information">
        <div id="brand">
            <h1>${elem.brand}</h1>
        </div>
        <div id="about">
            <h2>${elem.info}</h2>
        </div>
        <div id="money">
            <h3>${elem.cost}</h3>
        </div>
        <div id="invisible">
        <div id="rate">
             <h4>4.2<i class="ri-star-s-fill"></i></h4>
        </div>
        <div id="size">
            <h4>${elem.size}</h4>
        </div>
        <div class="hrt"><i class="ri-heart-3-fill"></i></div>

        <h5>Wishlist</h5>
    </div>
    </div>
</div>`
})
document.querySelector("#page1").innerHTML = collection


var hrt = document.querySelectorAll(".hrt i")
var flag = 0;
hrt.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if (flag == 0) {
            elem.style.color = "red";
            flag = 1

        } else {
            elem.style.color = "white"
            flag = 0;
        }


    })
})