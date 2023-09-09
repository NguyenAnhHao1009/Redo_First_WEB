// CÂU 1 //
// ô nhập liệu ở tiêu đề //

function ktSubmit(){
    var input = document.getElementById('input-search');
    var form = document.getElementById('form-search');
    if(input.value.trim() == ''){
        alert("Ô nhập liệu trống")
        return false;
    }
    var word = input.value;
    var timkiem = document.getElementById('search-word');
    var p = document.createElement('')
    timkiem.textContent = word;
    return true;
        
}




// CÂU 2 //
// Xác thực dữ liệu form//
function formValidate_SignIn(frm){
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regEmail.test(frm.email.value) == false){
        alert("Email chưa hợp lệ");
        return false;
    }

 
    if(frm.pass.value.length < 8){
        alert("Mật khẩu chưa hợp lệ");
        return false;
    }

    if(frm.pass.value != frm.pass2.value){
        alert("Mật khẩu chưa khớp với nhau");
        return false;
    }

    alert("Đã gửi dữ liệu!");
    return true;
}

function formValidate_LogIn(frm){
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regEmail.test(frm.email.value) == false){
        alert("Email chưa hợp lệ");
        return false;
    }

 
    if(frm.pass.value.length < 8){
        alert("Mật khẩu chưa hợp lệ");
        return false;
    }

    alert("Đã gửi dữ liệu!");
    return true;
}

function formValidate_Contact(frm){
    if(frm.name.value.length < 4){
        alert("Tên chưa hợp lệ");
        return false;
    }

    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regEmail.test(frm.email.value) == false){
        alert("Email chưa hợp lệ");
        return false;
    }

    if(frm.textarea.value.length < 10){
        alert("Nội dung phản ánh chưa hợp lệ");
        return false;
    }

    alert("Đã gửi dữ liệu!");
    return true;
}
// Xác thực dữ liệu form//


// CÂU 3  //
//SẢN PHẨM LIST//
var itemList={
    "sp001":{ "name":"Sữa Chua Vị Kiwi",
    "price":21000,
    "photo":"sanpham/kiwi.jpg"},
    "sp002":{ "name":"Sữa Chua Vị Xoài",
    "price":22000,
    "photo":"sanpham/mango.jpg"},
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới",
    "price":23000,
    "photo":"sanpham/cantaloupe.jpg"},
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi",
    "price":24000,
    "photo":"sanpham/blackberry.jpg"},
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây",
    "price":25000,
    "photo":"sanpham/strawberry.jpg"},
    "sp006":{ "name":"Sữa Chua Vị Việt Quất",
    "price":26000,
    "photo":"sanpham/blueberry.jpg"},
    "sp007":{ "name":"Sữa Chua Vị Bưởi",
    "price":27000,
    "photo":"sanpham/grapes.jpg"},
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh",
    "price":28000,
    "photo":"sanpham/green-apple.jpg"},
    "sp009":{ "name":"Sữa Chua Vị Dứa",
    "price":29000,
    "photo":"sanpham/pineapple.jpg"}
    };

function addCart(code) {
    
    var number =parseInt( document.getElementById(code).value);
    if(number > 100 || number<0){
        alert("Số lượng không hợp lệ (0 - 100)!");
        return;
    }
    if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number.toString())
        alert("Đã thêm vào giỏ hàng"+ number+" sản phẩm!");
    }else{
        var current = parseInt(window.localStorage.getItem(code)) ;
        if(number + current > 100){
            alert("Số lượng cộng lại quá 100!");
            window.localStorage.setItem(code, 100);
            console.log("hiện tại : "+ code+ current);
        }else{
            window.localStorage.setItem(code,  (number + current).toString());
            alert("Đã thêm vào giỏ hàng "+ number +" sản phẩm!");
        }
    }
}



//SẢN PHẨM LIST//


// CÂU 4 //

// NÚT GIỎ HÀNG//
function openCart(){
    window.location.href = 'donhang.html';
}

function getDiscountRate()
{
    var d=new Date();//lấy ngày hiện tại của máy tính
    var weekday=d.getDay();//lấy ngày trong tuần
    var totalMins=d.getHours()*60+d.getMinutes();//đổi thời gian hiện tại ra số phút tương đối trong ngày
    if(weekday>=1 && weekday<=3 && ((totalMins>=420&&totalMins<=660) || (totalMins>=780 && totalMins<=1020)))
        return 0.1;
    return 0;
}



function VNDFomat(number) {
    return new Intl.NumberFormat('vi-VI', {
        style: 'currency', currency: 'VND'
    }).format(number)
}


function ShowCart() {
    let TotalPreTax = 0
    let cartDetail = document.querySelector('table#cartDetail tbody')

    for (e in window.localStorage) {
        if (itemList[e]) {
            let tr = document.createElement('tr')
            tr.id = e

            let photo = document.createElement('td')
            let prdimg = new Image()
            prdimg.src = itemList[e].photo
            prdimg.style.width = '100px'
            photo.appendChild(prdimg)
            photo.style.width = '1px'
            tr.appendChild(photo)

            let name = document.createElement('td')
            name.innerHTML = itemList[e].name
            tr.appendChild(name)

            let number = document.createElement('td')
            number.innerHTML = window.localStorage.getItem(e)
            tr.appendChild(number)

            let price = document.createElement('td')
            price.innerHTML = VNDFomat(itemList[e].price)
            tr.appendChild(price)

            let total = document.createElement('td')
            total.innerHTML = VNDFomat(itemList[e].price * window.localStorage.getItem(e))
            tr.appendChild(total)

            let removeProduct = document.createElement('td')
            removeProduct.innerHTML = `<button onclick="removeCart('${e}')" data-key=${e} class="cart-btn removeprd-btn"> <i class="fa fa-trash" style="color: rgb(255, 72, 102);""></i></button>`
            removeProduct.style.width='1px';
            tr.appendChild(removeProduct)

            cartDetail.appendChild(tr)

            TotalPreTax += itemList[e].price * window.localStorage.getItem(e)
        }
    }
    let TotalPreTaxSpan = document.getElementById('bill_pre_tax_total')
    let discountRateSpan = document.getElementById('bill_discount')
    let discountSpan = document.getElementById('bill_tax')
    let taxSpan = document.getElementById('bill_tax')
    let TotalSpan = document.getElementById('bill_total')

    TotalPreTaxSpan.innerHTML = VNDFomat(TotalPreTax)

    let discountrate = getDiscountRate()
    discountRateSpan.innerHTML = discountrate

    let discount = discountrate * TotalPreTax
    discountSpan.innerHTML = VNDFomat(discount)

    let tax = 0.1 * (TotalPreTax - discount)
    taxSpan.innerHTML = VNDFomat(tax)

    let total = TotalPreTax - discount + tax
    TotalSpan.innerHTML = VNDFomat(total)

}

if(window.location.pathname == '/donhang.html') showCart();

function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        document.querySelector('tr#' + code).outerHTML = '';
        window.location.reload();
    }
}

window.onstorage = () => {
    window.location.reload()
    showCart()
}

   


// NÚT GIỎ HÀNG//
