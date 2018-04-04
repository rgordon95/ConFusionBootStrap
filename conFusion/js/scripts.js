$(document).ready(function(){
    $("#reserve-button").click(function(){
        $("#ReserveModal").modal();
    });
});

$(document).ready(function(){
    $("#loginbutton").click(function(){
        $("#loginModal").modal();
    });
});



$("#carousel-button").click(function(){
           if ($("#carousel-button").children("span").hasClass('fa-pause')) {
               $("#mycarousel").carousel('pause');
               $("#carousel-button").children("span").removeClass('fa-pause');
               $("#carousel-button").children("span").addClass('fa-play');
           }
           else if ($("#carousel-button").children("span").hasClass('fa-play')){
               $("#mycarousel").carousel('cycle');
               $("#carousel-button").children("span").removeClass('fa-play');
               $("#carousel-button").children("span").addClass('fa-pause');
           }
       });
