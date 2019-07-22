/* Header Scroll */

    $(window).scroll(function(){
        if($(this).scrollTop() > 150) {
            $('#ea-header').addClass('scrollnav');
        }
        else{
            $('#ea-header').removeClass('scrollnav');
        }
    });

/* Sidenav Dropdowns */

$('body').on('click', '.ea-parent span', function(){
    var ea_child = $(this).next('.ea-child');
    $(this).toggleClass('ea-open-child');
    $(ea_child).slideToggle(300);
});

/* Tabs */
$('body').on('click', '.tab-parent', function(){
    var ea_tab_child = $(this).find('.tab-child');
    $(ea_tab_child).slideToggle(300);
});
