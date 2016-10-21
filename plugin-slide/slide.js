/**
 * Created by ctt on 2016/10/7.
 */
(function ($) {

    $.fn.mySlide = function (options) {

        var defaults={
            "speed":"30",
            "imgWidth":"200",
            "imgHeight":"200"
        }

        var settings = $.extend({}, defaults, options);





        var slide1 = $(this);
        slide1.find("img").css({"width":settings.imgWidth,"Height":settings.imgHeight})
        slide1.append(slide1.html());
        slide1.wrap("<div id='slide0'></div>");
        var imgs = slide1.find("img");
        var len = imgs.length;
        var wid = $(imgs[0]).width();
        var ulWidth = len * wid;
        slide1.width(ulWidth);
        var slide0 = $("#slide0");
        slide0.width(ulWidth / 2).height(imgs.height());
//            slide0.scrollLeft(1000);
        function mySlide() {

            if (slide0.scrollLeft() >= ulWidth / 2) {
                slide0.scrollLeft(0);
            } else {
                slide0.scrollLeft(slide0.scrollLeft() + 1);
            }
        }


        setInterval(mySlide, settings.speed);
    }


})(jQuery)