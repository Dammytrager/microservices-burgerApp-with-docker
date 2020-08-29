$('document').ready(() => {
    let star = $(".star");

    star.onClick(function() {
        if (star.hasClass("starred")) {
            star.removeClass("starred");
            star.addClass("unstarred");
        } else if (star.hasClass("unstarred")) {
            star.removeClass("unstarred");
            star.addClass("starred");
        } else {
            star.addClass("starred");
        }
    });
});
