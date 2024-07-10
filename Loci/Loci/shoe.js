var arr = [
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/y/u/o/-original-imaghvb3gmh7t9zg.jpeg?q=70", brand: "Hotstyle", info: "Trendy & Stylish Loafers For Men  (Black)", cost: "Rs-290", size: "Size:6/7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/d/i/7-95000215-41-roamra-white-original-imag4ahytjmqdzz8-bb.jpeg?q=70", brand: "Labbin", info: "Sneakers For Men  (White)", cost: "Rs 449", size: "Size:6/7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-shoe/e/6/d/9-black-boot-for-men-waan-black-white-original-imagz946zzfeycny.jpeg?q=70", brand: "Waan", info: "Ankle Length Boot for men Boots For Men  (Black)", cost: "Rs 897", size: "Size:4/5/6" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/i/d/p/-original-imagg3m8qtqrkga8.jpeg?q=70", brand: "Flexifeet", info: "Stylish casual partywear women heeled boots Boots For Women", cost: "Rs-349", size: "Size:2/3/4/5/6" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/n/b/h/7-hb2-madam-glorious-purple-original-imaghn3ufhpj772d.jpeg?q=70", brand: "Madam Glorious", info: "Women Purple Heels Sandal ", cost: "Rs 699", size: "Size:3/4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/v/5/4/10-svr6372kbrv-10-svaar-beige-original-imagnukt9kcqkxff.jpeg?q=70", brand: "Savar", info: "Men Beige Clogs Sandal", cost: "Rs 499", size: "Size:7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/k/b/v/-original-imaggcb3qypxkatd.jpeg?q=70", brand: "Campus", info: "Men QUICK-2 Navy Casual Sandal", cost: "Rs-598", size: "Size:5/6/7/8/9/10" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/u/7/h/6-sl836fashionflats-39-shoestail-peach-original-imagah2hjqk7tqdg-bb.jpeg?q=70", brand: "Shoetails", info: "Women Pink Flats Sandal", cost: "Rs 290", size: "Size:4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/jcnovbk0/sandal/r/3/e/shabash-3-dolphin-miles-beige-original-imaffqh6nkzmhjpf.jpeg?q=70", brand: "Dolphon Miles", info: "Women Beige Heels Sandal", cost: "Rs 597", size: "Size:4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/9/h/8-wt-530-wugatti-olive-original-imagmpm8gzsbfd7u.jpeg?q=70", brand: "Wugatti", info: "Pure Leather Stylish Partywear Premium Quality Standard Casual Loafers For Men", cost: "Rs-695", size: "Size:5/6/7/8/9/10" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/y/u/o/-original-imaghvb3gmh7t9zg.jpeg?q=70", brand: "Hotstyle", info: "Trendy & Stylish Loafers For Men  (Black)", cost: "Rs-290", size: "Size:6/7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/d/i/7-95000215-41-roamra-white-original-imag4ahytjmqdzz8-bb.jpeg?q=70", brand: "Labbin", info: "Sneakers For Men  (White)", cost: "Rs 449", size: "Size:6/7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-shoe/e/6/d/9-black-boot-for-men-waan-black-white-original-imagz946zzfeycny.jpeg?q=70", brand: "Waan", info: "Ankle Length Boot for men Boots For Men  (Black)", cost: "Rs 897", size: "Size:4/5/6" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/i/d/p/-original-imagg3m8qtqrkga8.jpeg?q=70", brand: "Flexifeet", info: "Stylish casual partywear women heeled boots Boots For Women", cost: "Rs-349", size: "Size:2/3/4/5/6" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/n/b/h/7-hb2-madam-glorious-purple-original-imaghn3ufhpj772d.jpeg?q=70", brand: "Madam Glorious", info: "Women Purple Heels Sandal ", cost: "Rs 699", size: "Size:3/4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/v/5/4/10-svr6372kbrv-10-svaar-beige-original-imagnukt9kcqkxff.jpeg?q=70", brand: "Savar", info: "Men Beige Clogs Sandal", cost: "Rs 499", size: "Size:7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/k/b/v/-original-imaggcb3qypxkatd.jpeg?q=70", brand: "Campus", info: "Men QUICK-2 Navy Casual Sandal", cost: "Rs-598", size: "Size:5/6/7/8/9/10" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/u/7/h/6-sl836fashionflats-39-shoestail-peach-original-imagah2hjqk7tqdg-bb.jpeg?q=70", brand: "Shoetails", info: "Women Pink Flats Sandal", cost: "Rs 290", size: "Size:4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/jcnovbk0/sandal/r/3/e/shabash-3-dolphin-miles-beige-original-imaffqh6nkzmhjpf.jpeg?q=70", brand: "Dolphon Miles", info: "Women Beige Heels Sandal", cost: "Rs 597", size: "Size:4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/9/h/8-wt-530-wugatti-olive-original-imagmpm8gzsbfd7u.jpeg?q=70", brand: "Wugatti", info: "Pure Leather Stylish Partywear Premium Quality Standard Casual Loafers For Men", cost: "Rs-695", size: "Size:5/6/7/8/9/10" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/y/u/o/-original-imaghvb3gmh7t9zg.jpeg?q=70", brand: "Hotstyle", info: "Trendy & Stylish Loafers For Men  (Black)", cost: "Rs-290", size: "Size:6/7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/d/i/7-95000215-41-roamra-white-original-imag4ahytjmqdzz8-bb.jpeg?q=70", brand: "Labbin", info: "Sneakers For Men  (White)", cost: "Rs 449", size: "Size:6/7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-shoe/e/6/d/9-black-boot-for-men-waan-black-white-original-imagz946zzfeycny.jpeg?q=70", brand: "Waan", info: "Ankle Length Boot for men Boots For Men  (Black)", cost: "Rs 897", size: "Size:4/5/6" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/i/d/p/-original-imagg3m8qtqrkga8.jpeg?q=70", brand: "Flexifeet", info: "Stylish casual partywear women heeled boots Boots For Women", cost: "Rs-349", size: "Size:2/3/4/5/6" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/n/b/h/7-hb2-madam-glorious-purple-original-imaghn3ufhpj772d.jpeg?q=70", brand: "Madam Glorious", info: "Women Purple Heels Sandal ", cost: "Rs 699", size: "Size:3/4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/v/5/4/10-svr6372kbrv-10-svaar-beige-original-imagnukt9kcqkxff.jpeg?q=70", brand: "Savar", info: "Men Beige Clogs Sandal", cost: "Rs 499", size: "Size:7/8/9" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/k/b/v/-original-imaggcb3qypxkatd.jpeg?q=70", brand: "Campus", info: "Men QUICK-2 Navy Casual Sandal", cost: "Rs-598", size: "Size:5/6/7/8/9/10" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/sandal/u/7/h/6-sl836fashionflats-39-shoestail-peach-original-imagah2hjqk7tqdg-bb.jpeg?q=70", brand: "Shoetails", info: "Women Pink Flats Sandal", cost: "Rs 290", size: "Size:4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/jcnovbk0/sandal/r/3/e/shabash-3-dolphin-miles-beige-original-imaffqh6nkzmhjpf.jpeg?q=70", brand: "Dolphon Miles", info: "Women Beige Heels Sandal", cost: "Rs 597", size: "Size:4/5/6/7/8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/9/h/8-wt-530-wugatti-olive-original-imagmpm8gzsbfd7u.jpeg?q=70", brand: "Wugatti", info: "Pure Leather Stylish Partywear Premium Quality Standard Casual Loafers For Men", cost: "Rs-695", size: "Size:5/6/7/8/9/10" },
   
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