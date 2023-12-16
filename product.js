let Laptopobj = [
  {
    Brand: "SAMSUNG",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/d/0/k/galaxy-book2-pro-thin-and-light-laptop-samsung-original-imagqqgjtcxkxswu.jpeg?q=70",
    names: "SAMSUNG Galaxy Book2 Pro Intel EVO Core i5 12th Gen 1240P - (16 GB/512 GB SSD/Windows 11 Home) NP930XED-KB3IN Thin and Light Laptop  (13.3 Inch, Silver, 0.87 Kg, With MS Office)",
    price: "₹69,990",
    actualprice: "1,02,661",
  },
  {
    Brand: "ACER",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/2/z/t/-original-imagtke6rhxjcj9n.jpeg?q=70",
    names: "Acer One14 Backlit Core i5 11th Gen 1155G7 - (16 GB/512 GB SSD/Windows 11 Home) Z8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)",
    price: "₹34,990",
    actualprice: "₹59,999"
  },
  {
    Brand: "HP",
    img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
    names: "HP 2023 Athlon Dual Core 3050U - (8 GB/512 GB SSD/Windows 11 Home) 15s-ey1509AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)",
    price: "₹27,990",
    actualprice: "₹35,147"
  }, {
    Brand: "Lenova",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/i/e/15amn7-thin-and-light-laptop-lenovo-original-imagsvykgkecffgr.jpeg?q=70",
    names: "Lenovo IdeaPad 1 Athlon Dual Core 7120U - (8 GB/512 GB SSD/Windows 11 Home) 15AMN7 Thin and Light Laptop  (15.6 inch, Cloud Grey, 1.58 Kg, With MS Office)",
    price: "₹26,990",
    actualprice: "₹43,790"
  }, {
    Brand: "HP",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/6/m/i/-original-imaguefzmzgjdzfz.jpeg?q=70",
    names: "HP Envy x360 (2023) Intel Ryzen 5 Hexa Core 7530U - (16 GB/512 GB SSD/Windows 11 Home) 15-fh0015AU Laptop  (15.6 Inch, Nightfall Black, 2.14 Kg, With MS Office)",
    price: "₹77,490",
    actualprice: "₹87,763"
  },
  {
    Brand: "ASUS",
    img_src: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/l/t/-original-imagtucmkuwggepy.jpeg?q=70",
    names: "ASUS Vivobook 15 Core i3 11th Gen 1115G4-(8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)",
    price: "₹43,990",
    actualprice: "₹69,990"
  }]

localStorage.setItem("Productsdata", JSON.stringify(Laptopobj))
let collection = JSON.parse(localStorage.getItem("Productsdata")) || []

Laptop()

function Laptop() {
  collection.map((elements) => {
    //let box=document.createElement("div")
    //box.id="box";
    let gridbox = document.createElement("div")
    gridbox.classList.add("gridbox")
    console.log(gridbox)
    let avatar = document.createElement("img")
    avatar.classList.add("avatar")
    avatar.src = elements.img_src
    console.log(avatar)
    let details = document.createElement("div")
    details.classList.add("details")
    //console.log(details)
    let brand = document.createElement("p")
    brand.classList.add("brand");
    brand.innerHTML = elements.Brand
    console.log(brand)
    let img = document.createElement("img")
    let name = document.createElement("p")
    name.classList.add("name")
    name.innerHTML = elements.names
    console.log(name)
    let price1 = document.createElement("span");
    price1.classList.add("price1")
    price1.innerHTML = elements.price
    console.log(price1)
    let price2 = document.createElement("span");
    price2.classList.add("price2")
    price2.innerHTML = elements.actualprice
    console.log(price2)
    let prices = document.createElement("div")
    prices.classList.add("prices")
    prices.append(price1, price2)
    console.log(prices)
    details.append(brand, name, prices);
    console.log(details)
    gridbox.append(avatar, details)
    console.log(gridbox)
    let box = document.createElement("div")
    box.classList.add("box")
    box.append(gridbox)


    document.getElementById("laptopmenu").append(box);
  })
}


Advert()

function Advert() {
  let array = [{ img_src: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/eabf4635dc528037.jpg?q=20" }, { img_src: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/1548919db25118af.jpg?q=20" }, { img_src: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/3f83b7d675b43457.jpg?q=20" },{ img_src: "https://rukminim1.flixcart.com/fk-p-flap/320/170/image/eabf4635dc528037.jpg?q=20" }]
  array.map((arrayval) => {
    let imgbox = document.createElement("img")
    imgbox.classList.add("advert")
    imgbox.src = arrayval.img_src
    document.querySelector(".advertmenu").append(imgbox)
  })
}


let Furnitureobj = [
  {
    Brand: "Flipkart",
    img_src: "https://rukminim2.flixcart.com/image/400/400/keg02a80/wardrobe-closet/f/y/f/particle-board-bewtri000500800620-kurlon-wenge-original-imafv49kgfrmmxbq.jpeg?q=70",
    names: "Flipkart Perfect Homes Julian Engineered Wood 3 Door Wardrobe  (Finish Color - Chocolate Wenge, Knock Down)",
    price: "₹8,899",
    actualprice: "₹22,999",
  },
  {
    Brand: "SWANGIA ARTS",
    img_src: "https://rukminim1.flixcart.com/image/800/950/xif0q/sofa-sectional/k/v/9/symmetrical-cream-cotton-yes-sa-tss-35-swangia-arts-brown-finish-original-imagth7zyyu5mhn8.jpeg?q=20",
    names: "SWANGIA ARTS Solid Sheesham Wood Two Seater Sofa For Living Room/ Office/ Guest Room | Fabric 2 Seater Sofa  (Finish Color - Brown Finish, DIY(Do-It-Yourself))",
    price: "₹10,499",
    actualprice: "₹27,999"
  }, {
    Brand: "Kendalwood",
    img_src: "https://rukminim2.flixcart.com/image/832/832/l2krs7k0/coffee-table/n/k/c/54-864-rosewood-sheesham-95-758-15-hhfk-94-kendalwood-furniture-original-imagdvrjej5hhrhx.jpeg?q=70",
    names: "Kendalwood Furniture Solid Wood Coffee Table  (Finish Color - Teak Finish, Pre-assembled)",
    price: "₹5,999",
    actualprice: "₹12,999"
  }, {
    Brand: "Allie Wood",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/dining-set/t/5/o/-original-imaggfxqqycf7hnm.jpeg?q=70",
    names: "Allie Wood Sheesham Solid Wood 6 Seater Dining Set  (Finish Color -Walnut, DIY(Do-It-Yourself))",
    price: "₹21,849",
    actualprice: "₹49,999"
  },
  {
    Brand: "Divine Arts",
    img_src: "https://rukminim2.flixcart.com/image/832/832/l1dwknk0/kitchen-cabinet/k/v/1/1297-94-rosewood-sheesham-6-mh-chestdrawer-c2-divine-arts-698-5-original-imagcymvbn4n88nh.jpeg?q=70",
    names: "Divine Arts Solid Sheesham Wood Chest of 6 Drawers for Living Room Solid Wood Kitchen Cabinet  (Finish Color - Brown, DIY(Do-It-Yourself))",
    price: "₹14,116",
    actualprice: "₹18,999"
  },
  {
    Brand: "WONDER Engineered ",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/office-study-table/9/c/l/40-particle-board-engineered-wood-wonder-neudot-115-teak-original-imagnty3scyt3ybv.jpeg?q=70",
    names: " WONDER Engineered Wood Study Table  (Free Standing, Finish Color - TEAK, Knock Down)",
    price: "₹4,869",
    actualprice: "₹11,000"
  }]

localStorage.setItem("Furnituresdata", JSON.stringify(Furnitureobj))
let collectionfur = JSON.parse(localStorage.getItem("Furnituresdata")) || []

Furniture()

function Furniture() {
  collectionfur.map((element) => {
    //let box=document.createElement("div")
    //box.id="box";
    let gridboxfur = document.createElement("div")
    gridboxfur.classList.add("gridbox")
    //console.log(gridbox)
    let avatarfur = document.createElement("img")
    avatarfur.classList.add("avatar")
    avatarfur.src = element.img_src
    // console.log(avatar)
    let detailsfur = document.createElement("div")
    detailsfur.classList.add("details")
    //console.log(details)
    let brandfur = document.createElement("p")
    brandfur.classList.add("brand");
    brandfur.innerHTML = element.Brand
    //console.log(brand)
    //let img=document.createElement("img")
    let namefur = document.createElement("p")
    namefur.classList.add("name")
    namefur.innerHTML = element.names
    //console.log(name)
    let price1fur = document.createElement("span");
    price1fur.classList.add("price1")
    price1fur.innerHTML = element.price
    //console.log(price1)
    let price2fur = document.createElement("span");
    price2fur.classList.add("price2")
    price2fur.innerHTML = element.actualprice
    //console.log(price2)
    let pricesfur = document.createElement("div")
    pricesfur.classList.add("prices")
    pricesfur.append(price1fur, price2fur)
    //console.log(prices)
    detailsfur.append(brandfur, namefur, pricesfur);
    //console.log(details)
    gridboxfur.append(avatarfur, detailsfur)
    //console.log(gridbox)
    let boxfur = document.createElement("div")
    boxfur.classList.add("box")
    boxfur.append(gridboxfur)


    document.getElementById("furnituremenu").append(boxfur);
  })
}


Feature()
//https://rukminim1.flixcart.com/fk-p-flap/450/280/image/a74c8cefcc0cc5d3.jpg?q=20
function Feature() {
  let arr = [{ img_src: "https://rukminim1.flixcart.com/fk-p-flap/450/280/image/54f7ccd487ef2808.jpeg?q=20" }, { img_src: "https://rukminim1.flixcart.com/fk-p-flap/450/280/image/cc597be14f94c71d.jpeg?q=20" }, { img_src: "https://rukminim1.flixcart.com/fk-p-flap/450/280/image/1048d4e2a5221c95.jpeg?q=20" }]
  arr.map((arrval) => {
    let img = document.createElement("img")
    img.classList.add("feature")
    img.src = arrval.img_src
    document.querySelector(".featuredmenu").append(img)
  })
}


let SmartWatchobj = [
  {
    Brand: "Titan",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/e/h/b/1-43-android-ios-90172ap01-titan-yes-original-imagqggzvzabrhmv.jpeg?q=70",
    names: "Titan Evoke with 1.43 AMOLED Display,1000 Nits Brightness,Rotating Crown,BT Calling Smartwatch  (Black Strap, Free Size)",
    price: "₹8,995",
    actualprice: "₹11,995",
  },
  {
    Brand: "Fastrack",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/i/2/2/-original-imagzvhswuuzay6x.jpeg?q=70",
    names: "Fastrack Revoltt FS1 Pro|World's First,1.96 Super AMOLED|Highest Resolution|BT Calling Smartwatch  (Teal Strap, Free Size)",
    price: "₹3,999",
    actualprice: "₹7,995"
  },
  {
    Brand: "SAMSUNG",
    img_src: "https://rukminim2.flixcart.com/image/832/832/ksxjs7k0/smartwatch/f/p/x/android-sm-r875fzsainu-samsung-yes-original-imag6dthuswwsypz.jpeg?q=70",
    names: "SAMSUNG Watch 4, 44mmSuper AMOLED bluetooth calling function & body composition tracking  (Silver Strap, Free Size)",
    price: "₹12,990",
    actualprice: "₹29,999"
  }, {
    Brand: "Fastrack",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/w/q/r/-original-imaguhx9eaa4fu43.jpeg?q=70",
    names: "Fastrack Optimus with 1.43'' AMOLED Display with AOD(466x466)|BT Calling|Calculator|IP68 Smartwatch  (Blue Strap, Free Size)",
    price: "₹3,499",
    actualprice: "₹5,995"
  }, {
    Brand: "Fastrack",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/5/t/q/-original-imagqghhve2hyyqe.jpeg?q=70",
    names: "Fastrack Revoltt FS1 Max|Biggest 1.95'' UltraVU Curve Display|BT Calling|100+ Multisports Smartwatch  (Green Strap, Free Size)",
    price: "₹1,999",
    actualprice: "₹4,995"
  },
  {
    Brand: "Fastrack",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/j/w/k/-original-imagtk6megvvrmdz.jpeg?q=70",
    names: "Fastrack Revoltt FR1 Pro|1.3Inch AMOLED display with 600 Nits|Advanced BT Calling Chipset Smartwatch  (Black Strap, Free Size)",
    price: "₹2,499",
    actualprice: "₹7,995"
  }]

localStorage.setItem("smartwatchesdata", JSON.stringify(SmartWatchobj))
let collectionwatch = JSON.parse(localStorage.getItem("smartwatchesdata")) || []

SmartWatch()

function SmartWatch() {
  collectionwatch.map((watchelements) => {
    //let box=document.createElement("div")
    //box.id="box";
    let gridboxwatch = document.createElement("div")
    gridboxwatch.classList.add("gridbox")
    //console.log(gridbox)
    let avatarwatch = document.createElement("img")
    avatarwatch.classList.add("avatarwatch")
    avatarwatch.src = watchelements.img_src
    // console.log(avatar)
    let detailswatch = document.createElement("div")
    detailswatch.classList.add("details")
    //console.log(details)
    let brandwatch = document.createElement("p")
    brandwatch.classList.add("brand");
    brandwatch.innerHTML = watchelements.Brand
    //console.log(brand)
    let img = document.createElement("img")
    let namewatch = document.createElement("p")
    namewatch.classList.add("name")
    namewatch.innerHTML = watchelements.names
    //console.log(name)
    let price1watch = document.createElement("span");
    price1watch.classList.add("price1")
    price1watch.innerHTML = watchelements.price
    //console.log(price1)
    let price2watch = document.createElement("span");
    price2watch.classList.add("price2")
    price2watch.innerHTML = watchelements.actualprice
    //console.log(price2)
    let priceswatch = document.createElement("div")
    priceswatch.classList.add("prices")
    priceswatch.append(price1watch, price2watch)
    //console.log(prices)
    detailswatch.append(brandwatch, namewatch, priceswatch);
    //console.log(details)
    gridboxwatch.append(avatarwatch, detailswatch)
    //console.log(gridbox)
    let boxwatch = document.createElement("div")
    boxwatch.classList.add("box")
    boxwatch.append(gridboxwatch)


    document.getElementById("smartwatchmenu").append(boxwatch);
  })
}


let Mobileobj = [
  {
    Brand: "SAMSUNG",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/m/l/o/-original-imagmg6gzjf7gggt.jpeg?q=70",
    names: "SAMSUNG Galaxy S23 Ultra 5G (Phantom Black, 256 GB)  (12 GB RAM)#JustHere",
    price: "₹1,24,999",
    actualprice: "₹1,49,999",
  },
  {
    Brand: "GOOGLE",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70",
    names: "Google Pixel 7a (Charcoal, 128 GB)  (8 GB RAM)",
    price: "₹35,999",
    actualprice: "₹43,999"
  }, {
    Brand: "SAMSUNG",
    img_src: "https://rukminim1.flixcart.com/image/2000/2400/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=20",
    names: "SAMSUNG Galaxy Z Flip3 5G (Phantom Black, 128 GB)  (8 GB RAM)#JustHere",
    price: "₹49,999",
    actualprice: "₹95,999"
  }, {
    Brand: "SAMSUNG",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/v/o/-original-imagth5xdvsmprdd.jpeg?q=70",
    names: "SAMSUNG Galaxy S22 5G (Phantom Black, 128 GB)  (8 GB RAM)",
    price: "₹39,999",
    actualprice: "₹85,999"
  },
  {
    Brand: "MOTOROLA",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/q/6/edge-40-pay40028in-motorola-original-imagpqzdnhrgvhj7.jpeg?q=70",
    names: "MOTOROLA Edge 40 (Eclipse Black, 256 GB)  (8 GB RAM)",
    price: "₹26,999",
    actualprice: "₹34,999"
  },
  {
    Brand: "VIVO",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/q/f/-original-imagtyw2vfzzwzgs.jpeg?q=70",
    names: "Vivo V29 5G (128 GB)  (8 GB RAM)",
    price: "₹32,999",
    actualprice: "₹39,999"
  }]

localStorage.setItem("Mobilesdata", JSON.stringify(Mobileobj))
let collectionmob = JSON.parse(localStorage.getItem("Mobilesdata")) || []

Mobile()

function Mobile() {
  collectionmob.map((elementmob) => {
    //let box=document.createElement("div")
    //box.id="box";
    let gridboxmob = document.createElement("div")
    gridboxmob.classList.add("gridbox")
    // console.log(gridbox)
    let avatarmob = document.createElement("img")
    avatarmob.classList.add("avatarmob")
    avatarmob.src = elementmob.img_src
    // console.log(avatar)
    let detailsmob = document.createElement("div")
    detailsmob.classList.add("details")
    //console.log(details)
    let brandmob = document.createElement("p")
    brandmob.classList.add("brand");
    brandmob.innerHTML = elementmob.Brand
    let img = document.createElement("img")
    let namemob = document.createElement("p")
    namemob.classList.add("name")
    namemob.innerHTML = elementmob.names
    //console.log(name)
    let price1mob = document.createElement("span");
    price1mob.classList.add("price1")
    price1mob.innerHTML = elementmob.price
    //console.log(price1)
    let price2mob = document.createElement("span");
    price2mob.classList.add("price2")
    price2mob.innerHTML = elementmob.actualprice
    // console.log(price2)
    let pricesmob = document.createElement("div")
    pricesmob.classList.add("prices")
    pricesmob.append(price1mob, price2mob)
    //console.log(prices)
    detailsmob.append(brandmob, namemob, pricesmob);
    //console.log(details)
    gridboxmob.append(avatarmob, detailsmob)
    //console.log(gridbox)
    let boxmob = document.createElement("div")
    boxmob.classList.add("box")
    boxmob.append(gridboxmob)


    document.getElementById("mobilemenu").append(boxmob);
  })
}


let Decorationobj = [
  {
    Brand: "WALLMAX",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/painting/8/m/r/wagc-21x32-02-wallmax-original-imagtg8kuhxvqyk9.jpeg?q=70",
    names: "WALLMAX Premium Ganesha Canvas Wall Art Painting Canvas 21 inch x 32 inch Painting  (With Frame)",
    price: "₹1,112",
    actualprice: "₹4,990"
  },
  {
    Brand: "ROYALBOX",
    img_src: "https://rukminim2.flixcart.com/image/832/832/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70",
    names: "Royalbox Meditating Buddha Statue For Home Decor Idol/Showpiece Decorative Showpiece - 17 cm  (Polyresin, Gold)",
    price: "₹248",
    actualprice: "₹999"
  }, {
    Brand: "WOODENXDECOR",
    img_src: "https://rukminim2.flixcart.com/image/832/832/kkmwr680/painting/y/x/r/42-sanfpnl31211-saf-original-imafzxvjzwepgfzc.jpeg?q=70",
    names: "Radha Krishna Large Set of 5 Digital Reprint 18 inch x 42 inch Painting  (Without Frame, Pack of 5)",
    price: "₹249",
    actualprice: "₹1,599"
  }, {
    Brand: "SAARTHI",
    img_src: "https://rukminim2.flixcart.com/image/832/832/kflftzk0pkrrdj-0/spiritual-festive-decor/i/v/o/aj-o-1-saarthi-original-imafw3sfwmjbe8j8.jpeg?q=70",
    names: "SAARTHI Brass Akhand Diya | Diamond Crystal Deepak/Dia | Akhand Jyot | Magical Lantern Brass Diya | Decorative Brass Crystal Oil Lamp | Tea Light Holder Lantern | Puja Lamp Brass Table Diya  (Height: 4 inch)",
    price: "₹264",
    actualprice: "₹999"
  },
  {
    Brand: "WOODENXDECOR",
    img_src: "https://rukminim2.flixcart.com/image/832/832/xif0q/rack-shelf/w/e/g/living-room-bedroom-284637-woodenxdecor-4-original-imagmrwgkrgzpwk6.jpeg?q=70",
    names: "WOODENXDECOR Floating Shelves for Wall Set of 4 Intersecting Wall Mounted Wall Shelf white Wooden Wall Shelf  (Number of Shelves - 4, White)",
    price: "₹799",
    actualprice: "₹1,599",
  }
]

localStorage.setItem("Decorationsdata", JSON.stringify(Decorationobj))
let collectiondec = JSON.parse(localStorage.getItem("Decorationsdata")) || []

Decoration()

function Decoration() {
  collectiondec.map((elementdec) => {
    //let box=document.createElement("div")
    //box.id="box";
    let gridboxdec = document.createElement("div")
    gridboxdec.classList.add("gridbox")
    //console.log(gridbox)
    let avatardec = document.createElement("img")
    avatardec.classList.add("avatar")
    avatardec.src = elementdec.img_src
    // console.log(avatar)
    let detailsdec = document.createElement("div")
    detailsdec.classList.add("details")
    //console.log(details)
    let branddec = document.createElement("p")
    branddec.classList.add("brand");
    branddec.innerHTML = elementdec.Brand
    //console.log(brand)
    //let img=document.createElement("img")
    let namedec = document.createElement("p")
    namedec.classList.add("name")
    namedec.innerHTML = elementdec.names
    //console.log(name)
    let price1dec = document.createElement("span");
    price1dec.classList.add("price1")
    price1dec.innerHTML = elementdec.price
    //console.log(price1)
    let price2dec = document.createElement("span");
    price2dec.classList.add("price2")
    price2dec.innerHTML = elementdec.actualprice
    //console.log(price2)
    let pricesdec = document.createElement("div")
    pricesdec.classList.add("prices")
    pricesdec.append(price1dec, price2dec)
    //console.log(prices)
    detailsdec.append(branddec, namedec, pricesdec);
    //console.log(details)
    gridboxdec.append(avatardec, detailsdec)
    //console.log(gridbox)
    let boxdec = document.createElement("div")
    boxdec.classList.add("box")
    boxdec.append(gridboxdec)


    document.getElementById("decorationmenu").append(boxdec);
  })
}