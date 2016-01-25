$(function() {
    $("#toggle-visible-border").on("click", function() {
        $("html").toggleClass("visible-border", this.checked);
    });
});
