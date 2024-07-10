var arr = [
    { img: "https://rukminim1.flixcart.com/image/832/832/l0r1j0w0/sling-bag/a/y/s/casual-stylish-padded-pu-crossbody-travel-office-business-sling-original-imagcg6xm2tvkhyv.jpeg?q=70", brand: "vineeer", info: "Grey Men Sling Bag", cost: "Rs-719", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/hand-messenger-bag/h/y/v/casual-sling-bag-lv-221-slnbg-chnd-shpe-whte-sling-bag-live-original-imagjx3dstmgpcsv.jpeg?q=70", brand: "Butt Chique", info: "Women White Sling Bag", cost: "Rs 186", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kvzkosw0/clutch/h/l/2/ch2-ch2-rose-gold-women-s-clutch-osty-original-imag8rmvczxfazru.jpeg?q=70", brand: "osty", info: "Casual, Party Black Clutch - Min", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/suitcase/q/x/b/-original-imagkychjshsgy4z.jpeg?q=70", brand: "Nasheir Miles", info: "Large Check-in Suitcase (75 cm)", cost: "Rs-2545", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/bag/m/k/v/-original-imagggj7zcrcg3ra.jpeg?q=70", brand: "Lino perros", info: "Shoulder Bag", cost: "Rs 999", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/k/9/1/-original-imagg5f5ebpyn6qw.jpeg?q=70", brand: "Skybags", info: "Medium 22 L Backpack FLEX 22L BACKPACK BLUE ", cost: "Rs 799", size: "Size:L" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/suitcase/t/b/h/76-swisslite-hardsided-polycarbonate-luggage-trolley-bag-set-of-original-imagpyf5fysdpjsr.jpeg?q=70", brand: "Electron", info: "Large Cabin & Check-in Set (76 cm)", cost: "Rs-7278", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-backpack/r/0/h/mini-backpack-girls-cute-small-backpack-backpack-backpack-original-imagh82ugezjuzst.jpeg?q=70", brand: "Butt Chique", info: "Small 1 L Backpack Mini Backpack Girls Cute Small Backpack Purse Women Travel Shoulder Purse Bag  (Black)", cost: "Rs 590", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l09w8sw0/backpack/s/u/p/pu-leather-mini-casual-backpack-bags-for-school-college-tuition-original-imagc3hfs686mnkc.jpeg?q=70", brand: "vineer", info: "Small 17 L Backpack PU Leather Mini Casual Backpack Bags For School, College, Tuition, For Women  (Grey)", cost: "Rs 677", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/duffel-bag/b/u/j/-original-imaghdtwcz9y9cfj.jpeg?q=70", brand: "Javrang", info: "23 L Gym Duffel Bag - Gym Duffel Bag for Fitness| Sports and Travel|Men, Boys & Girls (Brown) - Brown", cost: "Rs-545", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0r1j0w0/sling-bag/a/y/s/casual-stylish-padded-pu-crossbody-travel-office-business-sling-original-imagcg6xm2tvkhyv.jpeg?q=70", brand: "vineeer", info: "Grey Men Sling Bag", cost: "Rs-719", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/hand-messenger-bag/h/y/v/casual-sling-bag-lv-221-slnbg-chnd-shpe-whte-sling-bag-live-original-imagjx3dstmgpcsv.jpeg?q=70", brand: "Butt Chique", info: "Women White Sling Bag", cost: "Rs 186", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kvzkosw0/clutch/h/l/2/ch2-ch2-rose-gold-women-s-clutch-osty-original-imag8rmvczxfazru.jpeg?q=70", brand: "osty", info: "Casual, Party Black Clutch - Min", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/suitcase/q/x/b/-original-imagkychjshsgy4z.jpeg?q=70", brand: "Nasheir Miles", info: "Large Check-in Suitcase (75 cm)", cost: "Rs-2545", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/bag/m/k/v/-original-imagggj7zcrcg3ra.jpeg?q=70", brand: "Lino perros", info: "Shoulder Bag", cost: "Rs 999", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/k/9/1/-original-imagg5f5ebpyn6qw.jpeg?q=70", brand: "Skybags", info: "Medium 22 L Backpack FLEX 22L BACKPACK BLUE ", cost: "Rs 799", size: "Size:L" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/suitcase/t/b/h/76-swisslite-hardsided-polycarbonate-luggage-trolley-bag-set-of-original-imagpyf5fysdpjsr.jpeg?q=70", brand: "Electron", info: "Large Cabin & Check-in Set (76 cm)", cost: "Rs-7278", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-backpack/r/0/h/mini-backpack-girls-cute-small-backpack-backpack-backpack-original-imagh82ugezjuzst.jpeg?q=70", brand: "Butt Chique", info: "Small 1 L Backpack Mini Backpack Girls Cute Small Backpack Purse Women Travel Shoulder Purse Bag  (Black)", cost: "Rs 590", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l09w8sw0/backpack/s/u/p/pu-leather-mini-casual-backpack-bags-for-school-college-tuition-original-imagc3hfs686mnkc.jpeg?q=70", brand: "vineer", info: "Small 17 L Backpack PU Leather Mini Casual Backpack Bags For School, College, Tuition, For Women  (Grey)", cost: "Rs 677", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/duffel-bag/b/u/j/-original-imaghdtwcz9y9cfj.jpeg?q=70", brand: "Javrang", info: "23 L Gym Duffel Bag - Gym Duffel Bag for Fitness| Sports and Travel|Men, Boys & Girls (Brown) - Brown", cost: "Rs-545", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l0r1j0w0/sling-bag/a/y/s/casual-stylish-padded-pu-crossbody-travel-office-business-sling-original-imagcg6xm2tvkhyv.jpeg?q=70", brand: "vineeer", info: "Grey Men Sling Bag", cost: "Rs-719", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/hand-messenger-bag/h/y/v/casual-sling-bag-lv-221-slnbg-chnd-shpe-whte-sling-bag-live-original-imagjx3dstmgpcsv.jpeg?q=70", brand: "Butt Chique", info: "Women White Sling Bag", cost: "Rs 186", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/kvzkosw0/clutch/h/l/2/ch2-ch2-rose-gold-women-s-clutch-osty-original-imag8rmvczxfazru.jpeg?q=70", brand: "osty", info: "Casual, Party Black Clutch - Min", cost: "Rs 297", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/suitcase/q/x/b/-original-imagkychjshsgy4z.jpeg?q=70", brand: "Nasheir Miles", info: "Large Check-in Suitcase (75 cm)", cost: "Rs-2545", size: "Size:M" },
    { img: "https://rukminim1.flixcart.com/image/416/416/xif0q/bag/m/k/v/-original-imagggj7zcrcg3ra.jpeg?q=70", brand: "Lino perros", info: "Shoulder Bag", cost: "Rs 999", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/k/9/1/-original-imagg5f5ebpyn6qw.jpeg?q=70", brand: "Skybags", info: "Medium 22 L Backpack FLEX 22L BACKPACK BLUE ", cost: "Rs 799", size: "Size:L" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/suitcase/t/b/h/76-swisslite-hardsided-polycarbonate-luggage-trolley-bag-set-of-original-imagpyf5fysdpjsr.jpeg?q=70", brand: "Electron", info: "Large Cabin & Check-in Set (76 cm)", cost: "Rs-7278", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-backpack/r/0/h/mini-backpack-girls-cute-small-backpack-backpack-backpack-original-imagh82ugezjuzst.jpeg?q=70", brand: "Butt Chique", info: "Small 1 L Backpack Mini Backpack Girls Cute Small Backpack Purse Women Travel Shoulder Purse Bag  (Black)", cost: "Rs 590", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/l09w8sw0/backpack/s/u/p/pu-leather-mini-casual-backpack-bags-for-school-college-tuition-original-imagc3hfs686mnkc.jpeg?q=70", brand: "vineer", info: "Small 17 L Backpack PU Leather Mini Casual Backpack Bags For School, College, Tuition, For Women  (Grey)", cost: "Rs 677", size: "Size:S" },
    { img: "https://rukminim1.flixcart.com/image/832/832/xif0q/duffel-bag/b/u/j/-original-imaghdtwcz9y9cfj.jpeg?q=70", brand: "Javrang", info: "23 L Gym Duffel Bag - Gym Duffel Bag for Fitness| Sports and Travel|Men, Boys & Girls (Brown) - Brown", cost: "Rs-545", size: "Size:M" },

   
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