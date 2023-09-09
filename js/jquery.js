 //Bài 4//
 var d=new Date();
 var ads="Khách hàng có ngày sinh trong tháng "+d.getMonth()+" sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";
 $("footer").append( "<div id='adscontainer'><span id='adstext'><h2>"+ads+"</h2></span></div>");

 var w = $(window).width()-$('main').width();
 console.log(w);

 if(w >= 200){
    alert('lon hon 200');
    adsVerEffect();
 }else{
    alert('nho hon 200');
 }

//  function addVerEffect(){
//     $('#adscontainer').addClass("adsvercontainer container");
//     $('#adscontainer').css("width",W);

//     $('#adstext').addClass("adsvertext adstext");
//     $('#adstext').css("top",$('#adscontainer').height());
//     var T = 0;
//     T = T-$('#adscontainer').height() + $('#adstext').height();
//     $('#adstext').animate(
//         {top:T} , 30000, addVerEffect
//     )

//  }

function adsVerEffect() {
    $('#adscontainer').addClass('adsvercontainer container')
    $('#adscontainer').css('width', w)
    $('#adstext').addClass('adsvertext adstext')
    $('#adstext').css('top', $('#adscontainer').height())
    let heightTemp = 0
    heightTemp = heightTemp -( $('#adscontainer').height() + $('#adstext').height())
    $('#adstext').animate({ top: heightTemp },
        30000,
        adsVerEffect
    )
}