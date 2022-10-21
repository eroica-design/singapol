jQuery(document).ready(function() {
    $(".main-menu > li").mouseover(function(){
        $(this).children(".sub-menu").stop().slideDown();
    });
    $(".main-menu > li").mouseleave(function(){
        $(this).children(".sub-menu").stop().slideUp();
    });
    // $(".down-icon").click(function(){
    //     $(".contents-down").slideDown();
    // });    
    // $("#tab_btn2").click(function (){
    //     $("#tab_btn2").addClass("active");
    //     $("#tab_btn1").removeClass("active");
    //     $("#tab_btn3").removeClass("active");
    //     $("#tab_btn4").removeClass("active");
    //     $(".layer_3").hide();
    //     $(".layer_1").hide();
    //     $(".layer_2").show();
    //     $(".layer_4").hide();
    // });  

    // $("#tab_btn1").click(function (){
    //     $("#tab_btn1").addClass("active");
    //     $("#tab_btn2").removeClass("active");
    //     $("#tab_btn3").removeClass("active");
    //     $("#tab_btn4").removeClass("active");
    //     $(".layer_2").hide();
    //     $(".layer_3").hide();
    //     $(".layer_1").show();
    //     $(".layer_4").hide();
    // });
    
    // $("#tab_btn3").click(function (){
    //     $("#tab_btn3").addClass("active");
    //     $("#tab_btn2").removeClass("active");
    //     $("#tab_btn1").removeClass("active");
    //     $("#tab_btn4").removeClass("active");
    //     $(".layer_1").hide();
    //     $(".layer_2").hide();
    //     $(".layer_3").show();
    //     $(".layer_4").hide();
    // });

    // $("#tab_btn4").click(function (){
    //     $("#tab_btn4").addClass("active");
    //     $("#tab_btn2").removeClass("active");
    //     $("#tab_btn1").removeClass("active");
    //     $("#tab_btn3").removeClass("active");
    //     $(".layer_1").hide();
    //     $(".layer_2").hide();
    //     $(".layer_3").hide();
    //     $(".layer_4").show();
    // });

    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    // acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //     panel.style.maxHeight = null;
    //     } else {
    //     panel.style.maxHeight = panel.scrollHeight + "px";
    //     } 
    // });
    // }
});
