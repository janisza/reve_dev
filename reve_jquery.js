$(document).ready(function(){

    $("#openMenuButton").on("click", openDropMenu);

    function openDropMenu() {
        document.getElementById("menuDropdown").classList.toggle("show");
    }

    $('.carousel').carousel({
        interval: 8000
    });

    $.scrollify({
        section: ".panel",
        easing: "easeOutExpo",
        offset: 0,
        before:function(i,panels) {

            // pagination
            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

            // fixed content
            var active = $(".slide.active");

            active.addClass("remove");

            $("[data-slide=" + i + "]").addClass("active");
            active.removeClass("remove active");

        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function(i) {
                activeClass = "";
                if(i===0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $.scrollify.update();

            $(".home").append(pagination);

            $("[data-slide=0]").addClass("active");

          $(".pagination a").on("click",function() {
              $.scrollify.move($(this).attr("href"));
          })
        }
    })

})
