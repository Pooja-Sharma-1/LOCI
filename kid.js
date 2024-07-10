var arr = [
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12652420a.webp", brand: "Babyhug", info: "Cotton Knit Half Sleeves Polo T-Shirt Shark Print - Blue White", cost: "Rs-377", size: "Size:12-18M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/13099788a.jpg", brand: "Butt Chique", info: "Cotton Knit Half Sleeves Kaftan Style Tee with Drawstring & Tassel Detailing- White", cost: "Rs 360", size: "Size:S" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/10631509a.webp", brand: "Nykaa", info: "Blue Styles Of The Spotlight dress", cost: "Rs 897", size: "Size:3-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11263375a.webp", brand: "Babyhug", info: "Cotton Sleeveless Onesies Polka Dot Print Pack of 3 - Blue Pink White", cost: "Rs-890", size: "Size:3-6M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12746118a.webp", brand: "Loai", info: "Cotton Full Length Stretchable Denim Jeans - Light Blue ", cost: "Rs 999", size: "Size:3-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12043993a.webp", brand: "99Designs", info: "Cotton Ankle Length Washed Denim Capris - Blue", cost: "Rs 599", size: "Size:2-3Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12797979a.webp", brand: "Zaira", info: "Brown Twill Lycra Solid Pants with Suspenders", cost: "Rs-891", size: "Size:5-6Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11134531a.webp", brand: "Butt Chique", info: "Sleeves Floral Embroidered Frock with Lining and Gathered - Yellow", cost: "Rs 665", size: "Size:2-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10598395a.webp", brand: "Nykaa", info: "Cold Shoulder Frock Floral Print & Applique - Light Pink", cost: "Rs-486", size: "Size:16-18M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13013654a.webp", brand: "Asthetic Clothing", info: " T-Shirt Batman Print - Anthra Melange", cost: "Rs-399", size: "Size:6-9M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12652420a.webp", brand: "Babyhug", info: "Cotton Knit Half Sleeves Polo T-Shirt Shark Print - Blue White", cost: "Rs-377", size: "Size:12-18M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/13099788a.jpg", brand: "Butt Chique", info: "Cotton Knit Half Sleeves Kaftan Style Tee with Drawstring & Tassel Detailing- White", cost: "Rs 360", size: "Size:S" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/10631509a.webp", brand: "Nykaa", info: "Blue Styles Of The Spotlight dress", cost: "Rs 897", size: "Size:3-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11263375a.webp", brand: "Babyhug", info: "Cotton Sleeveless Onesies Polka Dot Print Pack of 3 - Blue Pink White", cost: "Rs-890", size: "Size:3-6M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12746118a.webp", brand: "Loai", info: "Cotton Full Length Stretchable Denim Jeans - Light Blue ", cost: "Rs 999", size: "Size:3-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12043993a.webp", brand: "99Designs", info: "Cotton Ankle Length Washed Denim Capris - Blue", cost: "Rs 599", size: "Size:2-3Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12797979a.webp", brand: "Zaira", info: "Brown Twill Lycra Solid Pants with Suspenders", cost: "Rs-891", size: "Size:5-6Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11134531a.webp", brand: "Butt Chique", info: "Sleeves Floral Embroidered Frock with Lining and Gathered - Yellow", cost: "Rs 665", size: "Size:2-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10598395a.webp", brand: "Nykaa", info: "Cold Shoulder Frock Floral Print & Applique - Light Pink", cost: "Rs-486", size: "Size:16-18M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13013654a.webp", brand: "Asthetic Clothing", info: " T-Shirt Batman Print - Anthra Melange", cost: "Rs-399", size: "Size:6-9M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12652420a.webp", brand: "Babyhug", info: "Cotton Knit Half Sleeves Polo T-Shirt Shark Print - Blue White", cost: "Rs-377", size: "Size:12-18M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/zoom/13099788a.jpg", brand: "Butt Chique", info: "Cotton Knit Half Sleeves Kaftan Style Tee with Drawstring & Tassel Detailing- White", cost: "Rs 360", size: "Size:S" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/10631509a.webp", brand: "Nykaa", info: "Blue Styles Of The Spotlight dress", cost: "Rs 897", size: "Size:3-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/11263375a.webp", brand: "Babyhug", info: "Cotton Sleeveless Onesies Polka Dot Print Pack of 3 - Blue Pink White", cost: "Rs-890", size: "Size:3-6M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12746118a.webp", brand: "Loai", info: "Cotton Full Length Stretchable Denim Jeans - Light Blue ", cost: "Rs 999", size: "Size:3-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12043993a.webp", brand: "99Designs", info: "Cotton Ankle Length Washed Denim Capris - Blue", cost: "Rs 599", size: "Size:2-3Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12797979a.webp", brand: "Zaira", info: "Brown Twill Lycra Solid Pants with Suspenders", cost: "Rs-891", size: "Size:5-6Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11134531a.webp", brand: "Butt Chique", info: "Sleeves Floral Embroidered Frock with Lining and Gathered - Yellow", cost: "Rs 665", size: "Size:2-4Y" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10598395a.webp", brand: "Nykaa", info: "Cold Shoulder Frock Floral Print & Applique - Light Pink", cost: "Rs-486", size: "Size:16-18M" },
    { img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13013654a.webp", brand: "Asthetic Clothing", info: " T-Shirt Batman Print - Anthra Melange", cost: "Rs-399", size: "Size:6-9M" }
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