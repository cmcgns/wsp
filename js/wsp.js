var ratio = 1.0;

function on_resize() 
{
    if ($(window).width() / $(window).height() < ratio) 
    {
        $(".stretch_img").addClass("stretch_img_height");
    }
    else 
    {
        $(".stretch_img").removeClass("stretch_img_height");
    }
}

$(document).ready(function () {
    var w = $('.stretch_img').attr('width');
    var h = $('.stretch_img').attr('height');
    ratio = w / h;

    on_resize();
    $(window).bind('resize', on_resize);
});