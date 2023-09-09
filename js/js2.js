// bai 1
// tim kiem o o nhap lieu
// Bài 1


function testSub(){
    var input = document.getElementById('input-search');
    if(input.value.length == 0){
        alert("Ô nhập liệu trống");
        return false;
    }
    alert("Tìm kiếm từ khóa "+ input.value)
    return true;
}
//tim kiem xong thi chuyen qua trang timkiem.html va them vao trang
/*Hàm hiển thị nội dung keyword trong trang timkiem.html**/
function showSearch() {
    var url = new URL(window.location);
    var ws = url.searchParams.get("words");
    document.getElementById("searchDetail").innerHTML = "<h1>Từ khóa tìm kiếm</h1> <b>" + ws + "</b>";
}
function openCart(){
    window.location.href = 'donhang.html';
}

//Bai 2 kt o nhap lieu form
var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 
function signInForm(form){
    if(regEmail.test(form.email.value) == false){
        alert("Email khong hop le");
        return false;
    }
    if(form.pass.value.length < 8){
        alert("Mật khẩu chưa hợp lệ");
        return false;
    }

    if(form.pass.value != form.pass2.value){
        alert("Mật khẩu chưa khớp với nhau");
        return false;
    }

    alert("Đã gửi dữ liệu!");
    return true;
}

function logInForm(form){
    if(regEmail.test(form.email.value) == false){
        alert("Email khong hop le");
        return false;
    }
    if(form.pass.value.length < 8){
        alert("Mật khẩu chưa hợp lệ");
        return false;
    }
    alert("Đăng nhập Thành Công!");
    return true;
}

function connectForm(form){
    if(form.name.value.length < 4){
        alert("Tên chưa hợp lệ");
        return false;
    }

    if(regEmail.test(form.email.value) == false){
        alert("Email khong hop le");
        return false;
    }
    if(form.textarea.value.length < 10){
        alert("Nội dung góp ý quá ít!");
        return false;
    }
    alert("Góp ý Thành Công!");
    return true;
}

// Bài 3
var itemList={
    "sp001":{ "name":"Sữa Chua Vị Kiwi",
    "price":21000,
    "photo":"images/sanpham/kiwi.jpg"},
    "sp002":{ "name":"Sữa Chua Vị Xoài",
    "price":22000,
    "photo":"images/sanpham/mango.jpg"},
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới",
    "price":23000,
    "photo":"images/sanpham/cantaloupe.jpg"},
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi",
    "price":24000,
    "photo":"images/sanpham/blackberry.jpg"},
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây",
    "price":25000,
    "photo":"images/sanpham/strawberry.jpg"},
    "sp006":{ "name":"Sữa Chua Vị Việt Quất",
    "price":26000,
    "photo":"images/sanpham/blueberry.jpg"},
    "sp007":{ "name":"Sữa Chua Vị Bưởi",
    "price":27000,
    "photo":"images/sanpham/grapes.jpg"},
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh",
    "price":28000,
    "photo":"images/sanpham/green-apple.jpg"},
    "sp009":{ "name":"Sữa Chua Vị Dứa",
    "price":29000,
    "photo":"images/sanpham/pineapple.jpg"}
    };
    
    function addCart(code){
        var number = parseInt(document.getElementById(code).value);
        if(number > 100 || number < 0){
            alert("Số lượng phải nằm trong 0-100");
            return;
        }
       
        if(window.localStorage[code] === undefined){
            window.localStorage.setItem(code, number.toString());
            alert("Đã thêm "+ number+" sản phẩm vào giỏ hàng!");
        }
        else{
            var current = parseInt(window.localStorage.getItem(code));
            if(current + number >100){
                alert("Tổng số lượng đã quá 100!");
                window.localStorage.setItem(code, '100');
            }else{
                alert("Đã thêm "+ number+" sản phẩm vào giỏ hàng"+" Tổng số lượng: "+(current+number) );
                window.localStorage.setItem(code, (current+number).toString());
            }
        }
    }
// Bài 4 Thêm sản phẩm hiển thị ... trong bảng ở trang donhang.html
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
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function showCart(){
    let TotalPreTax = 0;
    let cartDetail = document.querySelector('table#cartDetail tbody')

    for(e in window.localStorage){
        if(itemList[e]){
            let tr = document.createElement('tr');
            tr.id = e;

            let photo = document.createElement('td');
            let prodimg = new Image();;
            prodimg.src = itemList[e].photo;
            prodimg.style.width = '100px';
            photo.appendChild(prodimg);
            photo.style.width = '1px';
            tr.appendChild(photo);

            let name = document.createElement('td');
            name.innerHTML = itemList[e].name;
            tr.appendChild(name);

            let number = document.createElement('td');
            number.innerHTML = window.localStorage.getItem(e);
            tr.appendChild(number);

            let price = document.createElement('td');
            price.innerHTML = itemList[e].price;
            tr.appendChild(price);

            let total = document.createElement('td');
            total.innerHTML = VNDFomat(window.localStorage.getItem(e)*itemList[e].price);
            tr.appendChild(total);

            let removeProduct = document.createElement('td');
            removeProduct.innerHTML=`<button onclick="removeCart('${e}')" data-key=${e} class="removeButton"><i class="fa fa-trash"></i></button>`
            removeProduct.style.width='1px';
            tr.appendChild(removeProduct);

            cartDetail.appendChild(tr);

            TotalPreTax += itemList[e].price * window.localStorage.getItem(e)

        }
    }
    let TotalPreTaxSpan = document.getElementById('bill_pre_tax_total')
    let discountRateSpan = document.getElementById('bill_discount')
    let discountSpan = document.getElementById('bill_tax')
    let taxSpan = document.getElementById('bill_tax')
    let TotalSpan = document.getElementById('bill_total')

    TotalPreTaxSpan.innerHTML = VNDFomat(TotalPreTax);
    discountRateSpan.innerHTML = VNDFomat(TotalPreTax*getDiscountRate());
    taxSpan.innerHTML = VNDFomat(0.1*(TotalPreTax-TotalPreTax*getDiscountRate()));
    TotalSpan.innerHTML = VNDFomat(TotalPreTax-(TotalPreTax*getDiscountRate())+(0.1*(TotalPreTax-TotalPreTax*getDiscountRate())));

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