var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $('.img1').mouseenter(function (){
$('.designs').css('background-image',"URL('img/bg_1.jpg')");
  })
  $('.img2').mouseenter(function (){
    $('.designs').css('background-image',"URL('img/bg_2.jpg')");
      })
      $('.img3').mouseenter(function (){
        $('.designs').css('background-image',"URL('img/bg_3.jpg')");
          })
          $('.img4').mouseenter(function (){
            $('.designs').css('background-image',"URL('img/bg_4.jpg')");
              })