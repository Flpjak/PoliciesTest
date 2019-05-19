
$("#start .next").click(function(e){
   // $('html,body').animate({scrollTop:0},0);
    $('#start').addClass("transition-out");
    setTimeout(function(){
        $('#start').addClass("out");
        $('#registerUser').removeClass("out");

        setTimeout(function(){
            $('#registerUser').removeClass("transition-in");
        },100);


        $(".bs-wizard-step.active").removeClass("active").addClass("complete");
        $(".bs-wizard-step.disabled").first().removeClass("disabled").addClass("active");

        $("#myRange").on("input", function()
        {
            var sliderval = this.value;

            $(".num-large").html(Math.round(sliderval*30));
            $(".num-small").html(Math.round(sliderval));

            $(".tb3").html(Math.round(sliderval*10));
            $(".tb4").html(Math.round(sliderval*20));
            $(".tb5").html(Math.round(sliderval*30));

        });

    }, 500);
})

$("#registerUser .next").click(function(e){
   // $('html,body').animate({scrollTop:0},0);
    $('#registerUser').addClass("transition-out");
    setTimeout(function(){
        $('#registerUser').addClass("out");
        $('#registant').removeClass("out");

        setTimeout(function(){
            $('#registant').removeClass("transition-in");
        },100);


        $(".bs-wizard-step.active").removeClass("active").addClass("complete");
        $(".bs-wizard-step.disabled").first().removeClass("disabled").addClass("active");

        $("#myRange").on("input", function()
        {
            var sliderval = this.value;

            $(".num-large").html(Math.round(sliderval*30));
            $(".num-small").html(Math.round(sliderval));

            $(".tb3").html(Math.round(sliderval*10));
            $(".tb4").html(Math.round(sliderval*20));
            $(".tb5").html(Math.round(sliderval*30));

        });

    }, 500);
})

$("#registant .next").click(function(e){
    //$('html,body').animate({scrollTop:0},0);
    $('#registant').addClass("transition-out");

    setTimeout(function(){

        $('#registant').addClass("out");
        $('#coverage').removeClass("out");
        setTimeout(function(){
            $('#coverage').removeClass("transition-in");
        },100);


        $(".bs-wizard-step.active").removeClass("active").addClass("complete");
        $(".bs-wizard-step.disabled").first().removeClass("disabled").addClass("active");


    }, 500);


});

$("#payment .button-option").click(function(){
    $(".payment-container").removeClass("out");
})

$("#coverage .next").click(function(e){
   // $('html,body').animate({scrollTop:0},0);
    $('#coverage').addClass("transition-out");

    setTimeout(function(){

        $('#coverage').addClass("out");
        $('#end').removeClass("out");
        setTimeout(function(){
            $('#end').removeClass("transition-in");
        },100);


        $(".bs-wizard-step.active").removeClass("active").addClass("complete");
        $(".bs-wizard-step.disabled").first().removeClass("disabled").addClass("active");


    }, 500);
})
