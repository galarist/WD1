$('nav a').click(function (e) {
    $('nav a').removeClass('active'); // Removing class from the link that has been clicked
    $(this).addClass('active'); // Adding class to the link that has been clicked
});
