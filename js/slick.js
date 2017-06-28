$('.sl').slick({
    arrows: true,
    dots: true, 
     cssEase:'ease-in',
    asNavFor: '.sl2',
     fade:true
});
$('.sl2').slick({
 arrows:false,
     centerMode: true,
    centerPadding:'40px',
    slidesToShow:7,//количество слайдов 5 показывает
     asNavFor: '.sl',
     focusOnSelect: true,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
});
$('.sl1').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3
});
