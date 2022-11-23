
$(function (){

    let container = $('.full-bg')

    $(window).resize(function (){
        let currentWindow = $(this),
            windowWidth = currentWindow.width(),
            windowHeight = currentWindow.height(),
            broswerRatio = windowWidth / windowHeight,
            imageRatio = 1920/1080;
        if(imageRatio > broswerRatio){
            container.css({
                height : '100%',
                width : windowHeight * imageRatio,
                left : (windowWidth - windowHeight * imageRatio)/2,
                top : 0,
            })


        }else {
            container.css({
                height : windowWidth/imageRatio,
                width : '100%',
                left :0,
                top : (windowHeight - windowWidth/imageRatio)/2,
            })

        }

    })

    $(window).trigger('resize')

});


$(function (){

    let login_layout = $('.login_layout')
    let logo = $('.team_logo img')

    $(window).resize(function (){
        let currentWindow = $(this),
            windowWidth = currentWindow.width(),
            standard = 1300
        if(windowWidth < standard){
            login_layout.css({
                justifyContent : 'center',
            })
            logo.css({
                width : 0,
            })


        }else {
            login_layout.css({
                justifyContent : 'space-between',
            })
            logo.css({
                width : '280px',
            })


        }

    })

    $(window).trigger('resize')

});

// 로딩중 함수
//
//
//         window.onbeforeunload = function () { $('#loading').show(); }  //현재 페이지에서 다른 페이지로 넘어갈 때 표시해주는 기능
//
//         $(window).load(function () {          //페이지가 로드 되면 로딩 화면을 없애주는 것
//             $('#loading').hide();
//         });


document.addEventListener("DOMContentLoaded", () => {

   let imgName = [
    'mount', 'milky_way', 'bridge', 'cat', 'switzerland','nature','bangtan','black_pink'
     ];

    let randomNumber = Math.floor(Math.random() * imgName.length);

    document.getElementById("background_image").src = '/images/mount.jpg';


})


