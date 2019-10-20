var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')

button.addEventListener('click', function() {
  modal.classList.add('modal_active');

});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});






    
 $(document).ready(function () {
   // валидация формы 
   $('#brif-form').validate({
     rules: {

       username: {
         required: true,
         minlength: 2,
         maxlength: 15
       },

       phone:{
         required: true
       },

       email:{
         required: true,
         email: true
       }

     },
     errorElement: "div",
     errorClass: "invalid",
     messages: {
       username: {
         required: "Имя обязательно",
         minlength: jQuery.validator.format("Имя должно быть не короче двух букв"),
         maxlength: jQuery.validator.format("Имя должно быть длиннее 15 букв")
       },
       email: {
         required:"Заполните поле",
         email: "Введите корректный email"
       },
       phone: {
         required: "Укажите телефон"
       }

     }
   });
   $('#offer-form').validate({
     rules: {

       username: {
         required: true,
         minlength: 2,
         maxlength: 15
       },

       phone:{
         required: true
       },

     },
     errorElement: "div",
     errorClass: "invalid invalid-offer",
     messages: {
       username: {
         required: "Имя обязательно",
         minlength: jQuery.validator.format("Имя должно быть не короче двух букв"),
         maxlength: jQuery.validator.format("Имя должно быть длиннее 15 букв")
       },
       phone: {
         required: "Укажите телефон"
       }

     }
   });
   $('#modal-dialog').validate({
     rules: {

       username: {
         required: true,
         minlength: 2,
         maxlength: 15
       },

       phone:{
         required: true
       },

     },
     errorElement: "div",
     errorClass: "invalid invalid-modal",
     messages: {
       username: {
         required: "Имя обязательно",
         minlength: jQuery.validator.format("Имя должно быть не короче двух букв"),
         maxlength: jQuery.validator.format("Имя должно быть длиннее 15 букв")
       },
       phone: {
         required: "Укажите телефон"
       }

     }
   });
   // маска для телефона
   $('.phone').mask('+7 (999) 999-99-99')

   var portfolio = $('.portfolio')
   var portfolioTop = portfolio.offset().top;
   $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop()
    if (windowTop > portfolioTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa01ad7dbf67a1150c352b58e5a7b1666e549da2a08e40f4db4c0a232fe4712fb&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=folse"></script>')
      $(window).unbind('scroll')
      
      
    }
    myMap.behaviors.disable('scrollZoom');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      myMap.behaviors.disable('drag');
}
   });


  //  $('#offer-form').on('submit', function name(event){

  //    event.preventDefault();
  //    var $form = $(this);


  //    if(! $form.valid()) return false;

    //  $.ajax({
    //   type: "POST",
    //   url: "mail.php",
    //   data: $(this).serialize(),
    //   success: function (response) {
    //     console.log('прибыли данные: ' + response);
    //     $('#offer-form')[0].reset(),
    //     // $('.confirmation').css("display", "block");
    //   },
    //     error: function (jqXHR, textStatus){
    //       console.error(jqXHR + " " + textStatus)
    //     }
    //  });
   })
   // скрипт слайдера 
   $('.slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     prevArrow: $('.arrows__left'),
     nextArrow: $('.arrows__right'),
     responsive: [{
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },

     ]
   });
 
