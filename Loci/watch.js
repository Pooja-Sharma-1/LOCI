var arr = [
    { img: "https://rukminim1.flixcart.com/image/832/832/kv8fbm80/watch/a/n/r/pe000029a-peter-england-men-original-imag867h2wndjkjh.jpeg?q=70", brand: "Peter England", info: "Analog Watch - For Men PE000029A", cost: "Rs-909",star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/6/w/o/-original-imagzkhfpqg3v8y6.jpeg?q=70", brand: "Sonata", info: "Volt Analog Watch - For Men 77085PP04", cost: "Rs 479", star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/c/b/w/-original-imagnre8b8ydbrwe.jpeg?q=70", brand: "Fastrack", info: "Trendies Analog Watch - For Women 68007PP01", cost: "Rs 1101", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/400/400/kg8avm80-0/watch/n/j/f/vh000010d-van-heusen-original-imafwgaahbympngq.jpeg?q=70", brand: "Van Huesen", info: "Analog Watch - For Women VH000010D", cost: "Rs-1174", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/shopsy-smartwatch/9/a/z/1-69-android-ios-wise-eon-black-ambrane-yes-original-imageu9gu3yhhfqz.jpeg?q=70", brand: "Boat", info: "boAt Wave Flex Connect with 1.83 ", cost: "Rs 1499", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/v/l/r/-original-imagzbtfssc8anxw.jpeg?q=70", brand: "Ambrane", info: "Ambrane Wise Eon Max with 2.01", cost: "Rs 1399", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/b/k/4/-original-imagqfwcjghmnrne.jpeg?q=70", brand: "Sonata", info: "ENAMEL Analog Watch - For Women NN8073YM02", cost: "Rs-1174", star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/q/w/p/-original-imagnqcjk9bfk5aa.jpeg?q=70", brand: "Sonata", info: "Analog Watch - For Women NP8976YL02W", cost: "Rs 646", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/kqv8vww0/watch/f/n/q/304-black-moon-stylish-girls-watch-designer-septem-original-imag4sc99wehr3ve.jpeg?q=70", brand: "Septem", info: "Analog Watch - For Women 304-Black Moon Stylish Girls Watch Designers", cost: "Rs 310", star:"4.1"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/v/w/u/1-21st-century-black-color-marclex-women-original-imagmv8kfjkexegd.jpeg?q=70", brand: "Marclex", info: "Stylish 12 Diamond Studded magnet Watch for Womens watches girls watch for girls Analog Watch - For Women 21st Century Black Color", cost: "Rs-230", star:"4"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/kv8fbm80/watch/a/n/r/pe000029a-peter-england-men-original-imag867h2wndjkjh.jpeg?q=70", brand: "Peter England", info: "Analog Watch - For Men PE000029A", cost: "Rs-909",star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/6/w/o/-original-imagzkhfpqg3v8y6.jpeg?q=70", brand: "Sonata", info: "Volt Analog Watch - For Men 77085PP04", cost: "Rs 479", star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/c/b/w/-original-imagnre8b8ydbrwe.jpeg?q=70", brand: "Fastrack", info: "Trendies Analog Watch - For Women 68007PP01", cost: "Rs 1101", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/400/400/kg8avm80-0/watch/n/j/f/vh000010d-van-heusen-original-imafwgaahbympngq.jpeg?q=70", brand: "Van Huesen", info: "Analog Watch - For Women VH000010D", cost: "Rs-1174", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/shopsy-smartwatch/9/a/z/1-69-android-ios-wise-eon-black-ambrane-yes-original-imageu9gu3yhhfqz.jpeg?q=70", brand: "Boat", info: "boAt Wave Flex Connect with 1.83 ", cost: "Rs 1499", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/v/l/r/-original-imagzbtfssc8anxw.jpeg?q=70", brand: "Ambrane", info: "Ambrane Wise Eon Max with 2.01", cost: "Rs 1399", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/b/k/4/-original-imagqfwcjghmnrne.jpeg?q=70", brand: "Sonata", info: "ENAMEL Analog Watch - For Women NN8073YM02", cost: "Rs-1174", star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/q/w/p/-original-imagnqcjk9bfk5aa.jpeg?q=70", brand: "Sonata", info: "Analog Watch - For Women NP8976YL02W", cost: "Rs 646", star:"4.2"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/kqv8vww0/watch/f/n/q/304-black-moon-stylish-girls-watch-designer-septem-original-imag4sc99wehr3ve.jpeg?q=70", brand: "Septem", info: "Analog Watch - For Women 304-Black Moon Stylish Girls Watch Designers", cost: "Rs 310", star:"4.1"  },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/watch/v/w/u/1-21st-century-black-color-marclex-women-original-imagmv8kfjkexegd.jpeg?q=70", brand: "Marclex", info: "Stylish 12 Diamond Studded magnet Watch for Womens watches girls watch for girls Analog Watch - For Women 21st Century Black Color", cost: "Rs-230", star:"4"  },

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
             <h4>${elem.star}<i class="ri-star-s-fill"></i></h4>
        </div>
        <div id="size">
            
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