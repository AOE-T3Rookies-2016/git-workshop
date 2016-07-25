$a(document).ready(function () {
    $a(".nav-1-1").css('cursor','pointer').click(function(event) {
        window.location.href = $a(".nav-1-1").find("a").attr("href");
    });
});


