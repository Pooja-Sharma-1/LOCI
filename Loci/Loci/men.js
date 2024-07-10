var arr = [
    { img: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/j/8/l/s-vd-os-100-lt1970-sw-veirdo-original-imagp8zkf7jd5gvr.jpeg?q=70", brand: "Vierdo", info: "Men Printed Round Neck Pure Cotton Beige T-Shirt", cost: "Rs-389", size: "Size:S/M/L",star:"4.1" },
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/cargo/c/4/q/28-jeans-arbia-funki-original-imagpctptxhb5ezy.jpeg?q=70", brand: "SKENJEL", info: "Men Cagro", cost: "Rs 1190", size: "Size:M" ,star:"4.2"},
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/t-shirt/f/b/e/m-os-100-sm4013-bk-veirdo-original-imagpayfpvyqrehs.jpeg?q=70", brand: "Cooltee", info: "Cool Spider print", cost: "Rs 597", size: "Size:S/M/L" ,star:"4.0"},
    { img: "https://rukminim1.flixcart.com/image/300/300/xif0q/t-shirt/l/o/m/s-767-4-767-5-767-6-ftx-original-imagztcbzwkjbhvj.jpeg?q=90", brand: "FTX", info: "Pack of 3 Men Solid Round Neck Polyester Grey, Dark Green, Orange T-Shirt", cost: "Rs-569", size: "Size:M",star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/v/r/r/36-vb-dark-grey-combraided-original-imagmnjdyyrzyqe2.jpeg?q=70", brand: "COMBRAIDED", info: "Men Slim Fit Silver Lycra Blend Trousers ", cost: "Rs 449", size: "Size:S/M/L" ,star:"3.9"},
    { img: "https://rukminim1.flixcart.com/image/832/832/kw6pw280/cap/b/h/k/m-new-stylish-ny-base-ball-cap-for-men-boys-unisex-sport-original-imag8xhyyfpuncym.jpeg?q=70", brand: "Sport Collection", info: "Sports/Regular Cap", cost: "Rs 149", size: "Size:Free",star:"4.3" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/0/d/m/32-mss22mjn087-metronaut-original-imagh3mf3upqppyf.jpeg?q=70", brand: "METRONAUT", info: "Men Skinny Mid Rise Black Jeans", cost: "Rs-798", size: "Size:34" ,star:"4"},
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/2/d/o/xxl-yellow-1-otus-original-imagjg3zt27zzvfz.jpeg?q=70", brand: "U turn", info: "Men Slim Fit Striped Spread Collar Casual Shirt", cost: "Rs 520", size: "Size:S/M/L",star:"3.8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kcc9q4w0/shirt/z/w/0/xl-hlsh011581-highlander-original-imafthkd6yksr6k8.jpeg?q=70", brand: "Hoghlander", info: "Printed Cut Away Collar Casual Shirt", cost: "Rs 419", size: "Size:S",star:"4.1" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/2/d/l/m-black-box-mirror-kurta-m-zed-berry-original-imaghgducfgw8wrn.jpeg?q=70", brand: "Zed berry", info: "Men Kurta and Pyjama Set Cotton Blend", cost: "Rs-599", size: "Size:M",star:"4.3" },
    { img: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/j/8/l/s-vd-os-100-lt1970-sw-veirdo-original-imagp8zkf7jd5gvr.jpeg?q=70", brand: "Vierdo", info: "Men Printed Round Neck Pure Cotton Beige T-Shirt", cost: "Rs-389", size: "Size:S/M/L",star:"4.1" },
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/cargo/c/4/q/28-jeans-arbia-funki-original-imagpctptxhb5ezy.jpeg?q=70", brand: "SKENJEL", info: "Men Cagro", cost: "Rs 1190", size: "Size:M" ,star:"4.2"},
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/t-shirt/f/b/e/m-os-100-sm4013-bk-veirdo-original-imagpayfpvyqrehs.jpeg?q=70", brand: "Cooltee", info: "Cool Spider print", cost: "Rs 597", size: "Size:S/M/L" ,star:"4.0"},
    { img: "https://rukminim1.flixcart.com/image/300/300/xif0q/t-shirt/l/o/m/s-767-4-767-5-767-6-ftx-original-imagztcbzwkjbhvj.jpeg?q=90", brand: "FTX", info: "Pack of 3 Men Solid Round Neck Polyester Grey, Dark Green, Orange T-Shirt", cost: "Rs-569", size: "Size:M",star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/v/r/r/36-vb-dark-grey-combraided-original-imagmnjdyyrzyqe2.jpeg?q=70", brand: "COMBRAIDED", info: "Men Slim Fit Silver Lycra Blend Trousers ", cost: "Rs 449", size: "Size:S/M/L" ,star:"3.9"},
    { img: "https://rukminim1.flixcart.com/image/832/832/kw6pw280/cap/b/h/k/m-new-stylish-ny-base-ball-cap-for-men-boys-unisex-sport-original-imag8xhyyfpuncym.jpeg?q=70", brand: "Sport Collection", info: "Sports/Regular Cap", cost: "Rs 149", size: "Size:Free",star:"4.3" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/0/d/m/32-mss22mjn087-metronaut-original-imagh3mf3upqppyf.jpeg?q=70", brand: "METRONAUT", info: "Men Skinny Mid Rise Black Jeans", cost: "Rs-798", size: "Size:34" ,star:"4"},
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/2/d/o/xxl-yellow-1-otus-original-imagjg3zt27zzvfz.jpeg?q=70", brand: "U turn", info: "Men Slim Fit Striped Spread Collar Casual Shirt", cost: "Rs 520", size: "Size:S/M/L",star:"3.8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kcc9q4w0/shirt/z/w/0/xl-hlsh011581-highlander-original-imafthkd6yksr6k8.jpeg?q=70", brand: "Hoghlander", info: "Printed Cut Away Collar Casual Shirt", cost: "Rs 419", size: "Size:S",star:"4.1" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/2/d/l/m-black-box-mirror-kurta-m-zed-berry-original-imaghgducfgw8wrn.jpeg?q=70", brand: "Zed berry", info: "Men Kurta and Pyjama Set Cotton Blend", cost: "Rs-599", size: "Size:M",star:"4.3" },
    { img: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/j/8/l/s-vd-os-100-lt1970-sw-veirdo-original-imagp8zkf7jd5gvr.jpeg?q=70", brand: "Vierdo", info: "Men Printed Round Neck Pure Cotton Beige T-Shirt", cost: "Rs-389", size: "Size:S/M/L",star:"4.1" },
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/cargo/c/4/q/28-jeans-arbia-funki-original-imagpctptxhb5ezy.jpeg?q=70", brand: "SKENJEL", info: "Men Cagro", cost: "Rs 1190", size: "Size:M" ,star:"4.2"},
    { img: "https://rukminim1.flixcart.com/image/400/400/xif0q/t-shirt/f/b/e/m-os-100-sm4013-bk-veirdo-original-imagpayfpvyqrehs.jpeg?q=70", brand: "Cooltee", info: "Cool Spider print", cost: "Rs 597", size: "Size:S/M/L" ,star:"4.0"},
    { img: "https://rukminim1.flixcart.com/image/300/300/xif0q/t-shirt/l/o/m/s-767-4-767-5-767-6-ftx-original-imagztcbzwkjbhvj.jpeg?q=90", brand: "FTX", info: "Pack of 3 Men Solid Round Neck Polyester Grey, Dark Green, Orange T-Shirt", cost: "Rs-569", size: "Size:M",star:"4.2" },
    { img: "https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/v/r/r/36-vb-dark-grey-combraided-original-imagmnjdyyrzyqe2.jpeg?q=70", brand: "COMBRAIDED", info: "Men Slim Fit Silver Lycra Blend Trousers ", cost: "Rs 449", size: "Size:S/M/L" ,star:"3.9"},
    { img: "https://rukminim1.flixcart.com/image/832/832/kw6pw280/cap/b/h/k/m-new-stylish-ny-base-ball-cap-for-men-boys-unisex-sport-original-imag8xhyyfpuncym.jpeg?q=70", brand: "Sport Collection", info: "Sports/Regular Cap", cost: "Rs 149", size: "Size:Free",star:"4.3" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/0/d/m/32-mss22mjn087-metronaut-original-imagh3mf3upqppyf.jpeg?q=70", brand: "METRONAUT", info: "Men Skinny Mid Rise Black Jeans", cost: "Rs-798", size: "Size:34" ,star:"4"},
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/2/d/o/xxl-yellow-1-otus-original-imagjg3zt27zzvfz.jpeg?q=70", brand: "U turn", info: "Men Slim Fit Striped Spread Collar Casual Shirt", cost: "Rs 520", size: "Size:S/M/L",star:"3.8" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kcc9q4w0/shirt/z/w/0/xl-hlsh011581-highlander-original-imafthkd6yksr6k8.jpeg?q=70", brand: "Hoghlander", info: "Printed Cut Away Collar Casual Shirt", cost: "Rs 419", size: "Size:S",star:"4.1" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/2/d/l/m-black-box-mirror-kurta-m-zed-berry-original-imaghgducfgw8wrn.jpeg?q=70", brand: "Zed berry", info: "Men Kurta and Pyjama Set Cotton Blend", cost: "Rs-599", size: "Size:M",star:"4.3" },
   
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