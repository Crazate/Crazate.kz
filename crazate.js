


//search code 
$('#searsh').on('input', function () {
    const val $(this).val().toUpperCase()

    $('.post').each(function () {
        if ($(this).html().toUpperCase().indexOf(val) !== -1) {

            $(this).show()

        } else {

            $(this).hide()

        }
    })
})


//menu cody
function MenuAshu() {

    let menu_out = document.getElementById("menu-out");
    if (menu_out.classList != 'menu-out2') {
        menu_out.classList.add('menu-out2');
           

    }
}
