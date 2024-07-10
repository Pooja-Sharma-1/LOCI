var arr = [
    { img: "https://rukminim1.flixcart.com/image/832/832/k2gh30w0/sunglass/k/p/y/medium-waf2019-03-elligator-original-imafhry2uhysjbhd.jpeg?q=70", brand: "Silver Cartz", info: "UV Protection Wayfarer Sunglasses (Free Size)  (For Men & Women, Black)", cost: "Rs-268", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/a/n/5/this-product-is-sold-as-small-by-the-brand-s11-black-red-monk-original-imagmjyyduayhe55.jpeg?q=70", brand: "Butt Chique", info: "Crop Racer Tank Top", cost: "Rs 320", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/q/7/h/hq-gold-black-hexagun-medium-rich-club-original-imagp5j56bxyt8mu.jpeg?q=70", brand: "Rich club", info: "Retro Square Sunglasses", cost: "Rs 497", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kz5vwy80/sunglass/q/0/v/karan-aulja-sunglass-m-rozzetta-craft-original-imagb7uvvhagfv2h.jpeg?q=70", brand: "Rozzetta", info: "Gradient Rectangular Sunglasses ", cost: "Rs 423", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0pm3680/sunglass/j/v/o/doctisttransparent-4545-free-size-doctist-original-imagcfsugyykjguf.jpeg?q=70", brand: "Liza", info: "Retro Square Sunglasses", cost: "Rs 499", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/b/4/e/chi0086-c2-l-royal-son-original-imagzvj2zsn37zgs.jpeg?q=70", brand: "Royal", info: "Polarized, UV Protection Retro Square Sunglasses", cost: "Rs-678", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/sunglass/o/a/r/btsg-7-medium-rich-club-original-imag768876ghjges.jpeg?q=70", brand: "Rich club", info: "Round Sunglasses ", cost: "Rs 380", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/c/z/e/women-fashion-sunglasses-free-imszz-original-imagzmz6cgtwmyrn.jpeg?q=70", brand: "Imszz", info: "Cat-eye Sunglasses", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/b/f/w/free-size-candy-kingsunglasses-original-imaggv5hefwr25qg.jpeg?q=70", brand: "Kingglasses", info: " Cat-eye Sunglasses ", cost: "Rs-179", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/sunglass/u/g/g/1-4-hayden-haiza-original-imaghbw4fcbz6kzv.jpeg?q=70", brand: "Elligator", info: "Cat-eye, Retro Square, Oval, Round Sunglasses ", cost: "Rs-245", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/k2gh30w0/sunglass/k/p/y/medium-waf2019-03-elligator-original-imafhry2uhysjbhd.jpeg?q=70", brand: "Silver Cartz", info: "UV Protection Wayfarer Sunglasses (Free Size)  (For Men & Women, Black)", cost: "Rs-268", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/a/n/5/this-product-is-sold-as-small-by-the-brand-s11-black-red-monk-original-imagmjyyduayhe55.jpeg?q=70", brand: "Butt Chique", info: "Crop Racer Tank Top", cost: "Rs 320", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/q/7/h/hq-gold-black-hexagun-medium-rich-club-original-imagp5j56bxyt8mu.jpeg?q=70", brand: "Rich club", info: "Retro Square Sunglasses", cost: "Rs 497", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kz5vwy80/sunglass/q/0/v/karan-aulja-sunglass-m-rozzetta-craft-original-imagb7uvvhagfv2h.jpeg?q=70", brand: "Rozzetta", info: "Gradient Rectangular Sunglasses ", cost: "Rs 423", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0pm3680/sunglass/j/v/o/doctisttransparent-4545-free-size-doctist-original-imagcfsugyykjguf.jpeg?q=70", brand: "Liza", info: "Retro Square Sunglasses", cost: "Rs 499", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/b/4/e/chi0086-c2-l-royal-son-original-imagzvj2zsn37zgs.jpeg?q=70", brand: "Royal", info: "Polarized, UV Protection Retro Square Sunglasses", cost: "Rs-678", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/sunglass/o/a/r/btsg-7-medium-rich-club-original-imag768876ghjges.jpeg?q=70", brand: "Rich club", info: "Round Sunglasses ", cost: "Rs 380", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/c/z/e/women-fashion-sunglasses-free-imszz-original-imagzmz6cgtwmyrn.jpeg?q=70", brand: "Imszz", info: "Cat-eye Sunglasses", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/b/f/w/free-size-candy-kingsunglasses-original-imaggv5hefwr25qg.jpeg?q=70", brand: "Kingglasses", info: " Cat-eye Sunglasses ", cost: "Rs-179", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/sunglass/u/g/g/1-4-hayden-haiza-original-imaghbw4fcbz6kzv.jpeg?q=70", brand: "Elligator", info: "Cat-eye, Retro Square, Oval, Round Sunglasses ", cost: "Rs-245", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/k2gh30w0/sunglass/k/p/y/medium-waf2019-03-elligator-original-imafhry2uhysjbhd.jpeg?q=70", brand: "Silver Cartz", info: "UV Protection Wayfarer Sunglasses (Free Size)  (For Men & Women, Black)", cost: "Rs-268", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/a/n/5/this-product-is-sold-as-small-by-the-brand-s11-black-red-monk-original-imagmjyyduayhe55.jpeg?q=70", brand: "Butt Chique", info: "Crop Racer Tank Top", cost: "Rs 320", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/q/7/h/hq-gold-black-hexagun-medium-rich-club-original-imagp5j56bxyt8mu.jpeg?q=70", brand: "Rich club", info: "Retro Square Sunglasses", cost: "Rs 497", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kz5vwy80/sunglass/q/0/v/karan-aulja-sunglass-m-rozzetta-craft-original-imagb7uvvhagfv2h.jpeg?q=70", brand: "Rozzetta", info: "Gradient Rectangular Sunglasses ", cost: "Rs 423", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0pm3680/sunglass/j/v/o/doctisttransparent-4545-free-size-doctist-original-imagcfsugyykjguf.jpeg?q=70", brand: "Liza", info: "Retro Square Sunglasses", cost: "Rs 499", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/b/4/e/chi0086-c2-l-royal-son-original-imagzvj2zsn37zgs.jpeg?q=70", brand: "Royal", info: "Polarized, UV Protection Retro Square Sunglasses", cost: "Rs-678", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/sunglass/o/a/r/btsg-7-medium-rich-club-original-imag768876ghjges.jpeg?q=70", brand: "Rich club", info: "Round Sunglasses ", cost: "Rs 380", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/c/z/e/women-fashion-sunglasses-free-imszz-original-imagzmz6cgtwmyrn.jpeg?q=70", brand: "Imszz", info: "Cat-eye Sunglasses", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sunglass/b/f/w/free-size-candy-kingsunglasses-original-imaggv5hefwr25qg.jpeg?q=70", brand: "Kingglasses", info: " Cat-eye Sunglasses ", cost: "Rs-179", size: "Size:Free" },
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/sunglass/u/g/g/1-4-hayden-haiza-original-imaghbw4fcbz6kzv.jpeg?q=70", brand: "Elligator", info: "Cat-eye, Retro Square, Oval, Round Sunglasses ", cost: "Rs-245", size: "Size:M" },
   
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