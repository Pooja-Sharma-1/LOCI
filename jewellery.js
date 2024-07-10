var arr = [
    { img: "https://rukminim1.flixcart.com/image/832/832/l0tweq80/earring/s/6/n/na-cwe-067-vembley-original-imagcj67wshfrdf6.jpeg?q=70", brand: "Zaira", info: "Combo of 9", cost: "Rs-278", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/necklace-chain/q/v/p/1-ev-46-necklace-zabby-allen-original-imagmmh33xfqzhzf.jpeg?q=70", brand: "Butt Chique", info: "White Pearl Gold Plated Necklace for Girls And Women Pearl Gold-plated Plated Alloy Necklace", cost: "Rs 190", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/pendant-locket/k/p/e/na-na-combo-1-3-niva-fashion-original-imaghjmxtntsanvu.jpeg?q=70", brand: "Nykaa", info: "Gold-plated Crystal Brass Locket Set", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/400/400/kb2jmvk0/necklace-chain/v/r/a/simple-chain-chain-vien-original-imafsg7w4a5a6hhm.jpeg?q=70", brand: "Vein", info: "Silver platted chain", cost: "Rs-345", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/ktlu9ow0/necklace-chain/l/v/t/1-kh-necklace-16se11-necklace-khushal-original-imag6wxzgfyrwjvd.jpeg?q=70", brand: "Loai", info: " Diamond Shape Pendant ", cost: "Rs 299", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0tweq80/earring/s/6/n/na-cwe-067-vembley-original-imagcj67wshfrdf6.jpeg?q=70", brand: "Zaira", info: "Combo of 9", cost: "Rs-278", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/necklace-chain/q/v/p/1-ev-46-necklace-zabby-allen-original-imagmmh33xfqzhzf.jpeg?q=70", brand: "Butt Chique", info: "White Pearl Gold Plated Necklace for Girls And Women Pearl Gold-plated Plated Alloy Necklace", cost: "Rs 190", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/pendant-locket/k/p/e/na-na-combo-1-3-niva-fashion-original-imaghjmxtntsanvu.jpeg?q=70", brand: "Nykaa", info: "Gold-plated Crystal Brass Locket Set", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/400/400/kb2jmvk0/necklace-chain/v/r/a/simple-chain-chain-vien-original-imafsg7w4a5a6hhm.jpeg?q=70", brand: "Vein", info: "Silver platted chain", cost: "Rs-345", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/ktlu9ow0/necklace-chain/l/v/t/1-kh-necklace-16se11-necklace-khushal-original-imag6wxzgfyrwjvd.jpeg?q=70", brand: "Loai", info: " Diamond Shape Pendant ", cost: "Rs 299", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0tweq80/earring/s/6/n/na-cwe-067-vembley-original-imagcj67wshfrdf6.jpeg?q=70", brand: "Zaira", info: "Combo of 9", cost: "Rs-278", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/necklace-chain/q/v/p/1-ev-46-necklace-zabby-allen-original-imagmmh33xfqzhzf.jpeg?q=70", brand: "Butt Chique", info: "White Pearl Gold Plated Necklace for Girls And Women Pearl Gold-plated Plated Alloy Necklace", cost: "Rs 190", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/pendant-locket/k/p/e/na-na-combo-1-3-niva-fashion-original-imaghjmxtntsanvu.jpeg?q=70", brand: "Nykaa", info: "Gold-plated Crystal Brass Locket Set", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/400/400/kb2jmvk0/necklace-chain/v/r/a/simple-chain-chain-vien-original-imafsg7w4a5a6hhm.jpeg?q=70", brand: "Vein", info: "Silver platted chain", cost: "Rs-345", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/ktlu9ow0/necklace-chain/l/v/t/1-kh-necklace-16se11-necklace-khushal-original-imag6wxzgfyrwjvd.jpeg?q=70", brand: "Loai", info: " Diamond Shape Pendant ", cost: "Rs 299", size: "Size:S" },

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