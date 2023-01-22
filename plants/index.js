$(document).ready(function(){
  $('.area').click(function(event){
    $('.area,.menu').toggleClass('active')
  });
});

$(document).ready(function(){
  $("a").click(function(){
    $('.area,.menu').toggleClass('active')
  }); 
}); 

$(document).on("click", function(e){
  if( 
    $(e.target).closest('.area,.menu').length == 0 &&
    $('.area,.menu').hasClass('active') &&
    $(e.target).closest(".menu-btn").length == 0
  ){
    $('.area,.menu').toggleClass('active');
  }
});

console.log('Требования к вёрстке\n  1.Вёрстка соответствует макету. Ширина экрана 768px +24\n  2.Вёрстка соответствует макету. Ширина экрана 380px +24\n  3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется ??\n  4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n Score:70/75' )