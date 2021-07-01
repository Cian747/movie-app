$(document).ready(function () {
    $(".movies .col-md-3").on('click', function () {
        $(this).append(`<div class="action">
        <a href="form.html" class="btn btn-success" type="button">Purchase/Rent</a>
        <a href="vendor.html" class="btn btn-success" type="button">Vendor's Page</a>
        </div>`)

        $(".movies .col-md-3").on('mouseleave', function () {
            $(this).find('.action').remove()
        })

        $(".movies .screen").remove();
    })

    $(".movies .col-md-3").on('mouseenter', function() {
        $(this).append(`<div style="text-align:center" class="screen"><h3>Click To See Details</h3></div>`)
    })

    $(".movies .col-md-3").on('mouseleave',function() {
        $(this).find(".screen").remove()
    })

})