document.querySelector("#show_content").addEventListener("click", hidden_content);
document.querySelector("#hidden_content").addEventListener("click", show_content);


function hidden_content() {
    var hidden = document.querySelector("#show_content");
    var show = document.querySelector("#hidden_content");
    var hiddenalso = document.querySelector(".para-gift-part");
    var flexing = document.querySelector(".managament-flex-container-second-part");
    var hiddenitems = document.querySelector("#free-product-add");
    var widthmanag = document.querySelector(".container-second-minimize-magical");
    widthmanag.style.height = "auto";
    hiddenitems.style.display = "block";
    flexing.style.display = "block";
    // flexing.style.justifyContent = "space-between";
    hiddenalso.style.display = "block";
    hidden.style.display = "none";
    show.style.display = "block";

}

function show_content() {
    var hidden = document.querySelector("#show_content");
    var show = document.querySelector("#hidden_content");
    var hiddenalso = document.querySelector(".para-gift-part");
    var flexing = document.querySelector(".managament-flex-container-second-part");
    var hiddenitems = document.querySelector("#free-product-add");
    var widthmanag = document.querySelector(".container-second-minimize-magical");
    widthmanag.style.height = "80px";
    hiddenitems.style.display = "none";
    flexing.style.display = "flex";
    flexing.style.justifyContent = "space-between";
    hiddenalso.style.display = "none"
    hidden.style.display = "block";
    show.style.display = "none";

}
//free gift item database
var freeitems = [{
        img_url: "https://s1.thcdn.com/productimg/70/70/11835646-5364602521660403.jpg",
        name: "La Roche - Posay Toleriane Double Repair Facial Moisturizer 3 ml",
        type: "FREE",
        price: 22
    }, {
        img_url: "https://s1.thcdn.com//productimg/70/70/12810753-5014862239182846.jpg",
        name: "Medik8 Micellar Mousse 150ml",
        type: "FREE",
        price: 32
    }, {
        img_url: "https://s1.thcdn.com//productimg/70/70/13524399-1684935333822609.jpg",
        name: "Sulwhasoo Concentrated Ginseng Renewing Cream Soft 1ml (12 value)",
        type: "FREE",
        price: 52

    },
    {
        img_url: "https://s1.thcdn.com/productimg/70/70/12226098-6324710028130814.jpg",
        name: "Vichy Mineral 89 Eyes 1 ml(Free Gift)",
        type: "FREE",
        price: 32
    }, {
        img_url: "https://s1.thcdn.com//productimg/70/70/12063515-6754866760034079.png",
        name: "SkinCeuticals Hyaluronic Acid Intensifier 2 ml",
        type: "FREE",
        price: 72
    }
];




// total

var freeitems2 = [{
        img_url: "https://s1.thcdn.com/productimg/70/70/11835646-5364602521660403.jpg",
        name: "La Roche - Posay Toleriane Double Repair Facial Moisturizer 3 ml",
        type: "FREE",
        price: "FREE"
    }, {
        img_url: "https://s1.thcdn.com//productimg/70/70/12810753-5014862239182846.jpg",
        name: "Medik8 Micellar Mousse 150ml",
        type: "FREE",
        price: "FREE"
    }, {
        img_url: "https://s1.thcdn.com//productimg/70/70/13524399-1684935333822609.jpg",
        name: "Sulwhasoo Concentrated Ginseng Renewing Cream Soft 1ml (12 value)",
        type: "FREE",
        price: "FREE"

    },
    {
        img_url: "https://s1.thcdn.com/productimg/70/70/12226098-6324710028130814.jpg",
        name: "Vichy Mineral 89 Eyes 1 ml(Free Gift)",
        type: "FREE",
        price: "FREE"
    }, {
        img_url: "https://s1.thcdn.com//productimg/70/70/12063515-6754866760034079.png",
        name: "SkinCeuticals Hyaluronic Acid Intensifier 2 ml",
        type: "FREE",
        price: "FREE"
    }
];




// cartadddatabase
// databaseitemaddbag
var arr = [];
var databaseitemaddbag = JSON.parse(localStorage.getItem("cartadddatabase")) || [];
databaseitemaddbag.map(function(el, i) {
    var box = document.createElement("tr");
    var td1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = el.img_url;
    var td2 = document.createElement("td");
    td2.innerText = el.name;
    var td3 = document.createElement("td");
    td3.innerText = el.price;
    var td4 = document.createElement("td");

    var boxQty = document.createElement("div");
    boxQty.setAttribute("id", "display_flexing_profo_DSA");
    var boxbtnA = document.createElement("div");
    var increbtn = document.createElement("button");
    increbtn.addEventListener("click", decreasebtn);



    var minuesicon = document.createElement("i");
    minuesicon.setAttribute("class", "fa-solid fa-minus");

    var boxbtnS = document.createElement("div");
    var additemore = document.createElement("button");
    var plusicon = document.createElement("i");
    plusicon.setAttribute("class", "fa-solid fa-plus");
    additemore.addEventListener("click", increasingorder);
    var paraforitems = document.createElement("p");
    paraforitems.setAttribute("id", "itemshow_incr_decre");


    var td5 = document.createElement("td");


    var td6 = document.createElement("td");
    td6.setAttribute("class", "remove_item_style_css");
    var iconremove = document.createElement("i");
    iconremove.setAttribute("class", "fa-solid fa-xmark");

    iconremove.addEventListener("click", function() {
        removeitemformbag(el, i);
    });


    var counter = 1;
    var subtotalamount = 0;

    // var incrementdd = [];

    function decreasebtn() {

        if (counter == 1) {
            paraforitems.innerText = 1;
        } else {
            counter--;
            paraforitems.innerText = counter;
            subtotalamount = el.price * Number(counter);
            td5.innerText = subtotalamount;
            gettotalamout(subtotalamount, el);

        }

    }


    function increasingorder() {
        if (counter == 0) {
            paraforitems.innerText = 0;
        } else {
            counter++;
            paraforitems.innerText = counter;
            subtotalamount = el.price * Number(counter);
            td5.innerText = subtotalamount;
            gettotalamout(subtotalamount, el);

        }
    }

    paraforitems.innerText = 1;


    td5.innerText = el.price;
    td5.setAttribute("id", "fgredfd");
    arr.push(Number(td5.innerText));


    td6.append(iconremove);
    additemore.append(plusicon);
    boxbtnS.append(additemore);
    boxbtnA.append(increbtn);
    increbtn.append(minuesicon);
    boxQty.append(boxbtnA, paraforitems, boxbtnS);
    td4.append(boxQty);
    td1.append(img);
    box.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("#apeend-details-product").append(box);
});

function removeitemformbag(el, i) {
    databaseitemaddbag.splice(i, 1)
    window.location.reload();
    localStorage.setItem("cartadddatabase", JSON.stringify(databaseitemaddbag));
}

freeitems2.forEach(function(el) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.img_url;
    var para = document.createElement("p");
    para.innerText = el.name;
    var icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-exclamation");
    box.append(img, para, icon);
    document.querySelector("#free-product-add").append(box);
});


// total show on subtotal amount
var cartadditemtotalprice = 0;
for (var i = 0; i < arr.length; i++) {
    cartadditemtotalprice += arr[i];
}


var totalspecialsuntotal = databaseitemaddbag.reduce(function(sum, el, i, arr) {
    sum += el.price;
    return sum;
}, 0);
var showthegiftsection = document.querySelector(".free-item-eligible");
var qualifited = document.querySelector(".hiddenShow");
if (totalspecialsuntotal >= 130) {
    // document.querySelector("#free-product-add").addEventListener("click", addfreeitems);
    showthegiftsection.style.display = "block";
    qualifited.style.display = "block";
    document.querySelector("#free-product-add").addEventListener("click", addfreeitems);
} else {
    showthegiftsection.style.display = "none";
    qualifited.style.display = "none";
}
var databasdfs = JSON.parse(localStorage.getItem("cartadddatabase")) || [];

function addfreeitems() {
    console.log(databasdfs.push(el))
    window.location.reload();
    localStorage.setItem("cartadddatabase", JSON.stringify(databasdfs));

}

function gettotalamout(subtotalamount, el) {



    //when price increase database
    //when price decrease 
    var finalamoutwillbe = totalspecialsuntotal + el.price;
    // console.log(finalamoutwillbe)

    // console.log(totalspecialsuntotal)
    var showthegiftsection = document.querySelector(".free-item-eligible");
    var qualifited = document.querySelector(".hiddenShow");

    // console.log(addingitems)
    if (subtotalamount >= 130) {
        // document.querySelector("#free-product-add").addEventListener("click", addfreeitems);
        showthegiftsection.style.display = "block";
        qualifited.style.display = "block";
        document.querySelector("#free-product-add").addEventListener("click", addfreeitems);
    } else {
        showthegiftsection.style.display = "none";
        qualifited.style.display = "none";
    }
    var total = subtotalamount;
    document.querySelector("#subttotalamount_show_actual").innerText = `$ ${total}`;

    var databasdfs = JSON.parse(localStorage.getItem("cartadddatabase")) || [];

    function addfreeitems() {
        console.log(databasdfs.push(el))
        window.location.reload();
        localStorage.setItem("cartadddatabase", JSON.stringify(databasdfs));

    }


}

document.querySelector("#subttotalamount_show_actual").innerText = `$ ${cartadditemtotalprice}`;






// total
document.querySelector("click", promocunpne);
var fhdskd = document.querySelector("#promoinput").value;
var fjdnoko = document.querySelector(".success");
var bjfgfighgui = document.querySelector(".empty");
// freeitems
function promocunpne() {
    if (fhdskd != "masai") {
        bjfgfighgui.style.display = "block";
        fjdnoko.style.display = "none";
    } else {
        fjdnoko.style.display = "block";
    }
    if (fhdskd == "") {
        fjdnoko.style.display = "none";
    }
}

// ../payment/payment.html

document.querySelector("#paymentlink").addEventListener("click", goanothrerpaged);

function goanothrerpaged() {
    window.location.href = "../payment/payment.html";
}

document.querySelector("#anotherpaymentlink").addEventListener("click", gophirse);

function gophirse() {
    window.location.href = "../payment/payment.html";
}
document.querySelector("#reshopping").addEventListener("click", reshopping);

function reshopping() {
    window.location.href = "../index.html";
}
document.querySelector("#check-cart-part").addEventListener("click", carthreflink);

function carthreflink() {
    window.location.href = "";
}
// cartadddatabase
var database = JSON.parse(localStorage.getItem("cartadddatabase")) || [];
var lengthofbagitems;
if (database == null) {
    lengthofbagitems = 0;
} else {
    lengthofbagitems = database.length;
}

if (lengthofbagitems == 0) {
    document.querySelector(".scroll-able-items-container").style.display = "none";
} else { document.querySelector(".scroll-able-items-container").style.display = "block"; }

document.querySelector("#add-count-items").innerText = lengthofbagitems;

document.querySelector("#secondFirst").addEventListener("click", gotagainmainpage);

function gotagainmainpage() {
    window.location.href = "../index.html";
}

//empty itemscondition

var dataemptydatabase = [
    { image: "https://s1.thcdn.com/widgets/121-us/53/Skincare-041053.jpg", name: "Skin Care" },
    { image: "https://s1.thcdn.com/widgets/121-us/30/580x580-125830.jpg", name: "Hair Care" },
    { image: "https://s1.thcdn.com/widgets/121-us/17/original-NF_PROD_SpringPromo22-Mini_Hero_01-102717.jpg", name: "Tools" },
    { image: "https://s1.thcdn.com/widgets/121-us/16/Makeup-041316.jpg", name: "Makeup" },
    { image: "https://s1.thcdn.com/widgets/121-us/32/Body-041332.jpg", name: "Bath & Body" },
    { image: "https://s1.thcdn.com/widgets/121-us/49/Wellness-041349.png", name: "wellness" }

];

// append_img_box_here
dataemptydatabase.forEach(function(el) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.image;
    var name = document.createElement("p");
    name.innerText = el.name;
    box.append(img, name);

    document.querySelector("#append_img_box_here").append(box);
});

var lengthogitemsinbag = database.length;
var hiddenbagsystem = document.querySelector(".cart-info");
var emptydatashow = document.querySelector("#if_cart_empty_show");

if (lengthogitemsinbag == 0) {
    hiddenbagsystem.style.display = "none";
} else {
    hiddenbagsystem.style.display = "block";
    emptydatashow.style.display = "none";
}


document.querySelector("#secondFirst").addEventListener("click", gotmainpage);
document.querySelector("#givingbackhomepage").addEventListener("click", gottomainpages);

function gotmainpage() {
    window.location.href = "../index.html";

}

function gottomainpages() {
    window.location.href = "../index.html";

}
//user show detail        


var gettingcurrentuser = JSON.parse(localStorage.getItem("currentuser")) || [];
gettingcurrentuser.map(function(el) {
    if (el.name == null) {
        document.querySelector(".login-then-show-name").style.display = "none";
        document.querySelector(".conditional-thin-if-not-login").style.display = "block";

        document.querySelector("#logoutuser").style.display = "none";


    } else {
        document.querySelector(".login-then-show-name").innerText = `Welcome ${el.name}`;
        document.querySelector(".conditional-thin-if-not-login").style.display = "none";

        document.querySelector("#logoutuser").style.display = "block";
        console.log(el.name);
    }
});



// logoutuser

document.querySelector("#logoutuser").addEventListener("click", logoutcurrentuser);

function logoutcurrentuser() {
    gettingcurrentuser.map(function(el, i) {
        gettingcurrentuser.splice(i, 10000);
        window.location.reload();
        localStorage.setItem("currentuser", JSON.stringify(gettingcurrentuser));
    });

}


// cart conditional

if (lengthofbagitems > 0) {
    document.querySelector(".empty-things").style.display = "none";
}
if (lengthofbagitems == 0) {
    document.querySelector(".total-of-items").style.display = "none";
    document.querySelector(".btn-view-cart").style.display = "none";
    document.querySelector(".price-of-items-total").style.display = "none";
}
document.querySelector(".total-of-items").innerText = `${lengthofbagitems} items in your cart`;
var subtotal = database.reduce(function(sum, el, i, arr) {
    sum += el.price;
    return sum;
}, 0);
document.querySelector(".price-of-items-total").innerText = `$${subtotal}`;

database.map(function(el, i, arr) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.img_url;
    var para = document.createElement("p");
    para.innerText = el.name;
    var price = document.createElement("p");
    price.innerText = `$${el.price}`;
    var Qty = document.createElement("p");
    Qty.innerText = `Quantity : 1`;

    box.append(img, para, price, Qty)
    document.querySelector(".scroll-able-items-container").append(box);
});

document.querySelector("#brand-link").addEventListener("click", brandLink);

function brandLink() {
    window.location.href = "../brands/brands.html";
    console.log("asdf")
}