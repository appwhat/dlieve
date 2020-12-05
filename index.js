$(function () {
    $(".hamburguer").click(function (e) {
        e.preventDefault()
        if ($(".menu").hasClass("col-2") == true) {
            $(".menu").removeClass("col-2").addClass("col-4")
            $(".direito").removeClass("col-10 ").addClass("col-8")
        } else {
            $(".menu").addClass("col-2").removeClass("col-4")
            $(".direito").addClass("col-10").removeClass("col-8")
        }

        $(".menu span").toggleClass("d-none")
        })
})