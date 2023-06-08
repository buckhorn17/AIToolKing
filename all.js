$(document).ready(function () {
  
    $('.hamBar-menu').click(function(){
      $(".menu").slideToggle(400);
      $(".menu").css("display","flex");
      $(".hamBar-menu").css("display","none");
      $(".hamBar-close").css("display","flex");
      })

    $('.hamBar-close').click(function(){
      $(".menu").slideToggle(400);
      $(".menu").css("display","flex");
      $(".hamBar-menu").css("display","flex");
      $(".hamBar-close").css("display","none");
    })

    $('.udrt').click(function(){
      $("html,body").animate({scrollTop: 0},500)
      })
     
});
