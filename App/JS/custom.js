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
$('body').on('click', '.tab-parent h3', function(){
    var ea_tab_parent = $(this).parent('.tab-parent');
    var ea_tab_child = $(this).next('.tab-child');
    var map_path = $(ea_tab_parent).attr('maploc');
    $('#svg2 path.active-path').removeClass('active-path');
    $('#'+map_path).addClass('active-path');
    $(ea_tab_child).slideToggle(300);
    $('.tab-parent ').removeClass('active-tab');
    $(ea_tab_parent).addClass('active-tab');

});
$('body').on('click', '#svg2 path', function(){
    $('#svg2 path.active-path').removeClass('active-path');
    $(this).addClass('active-path');
    var path_id = $(this).attr('id');
    var parent_info = $('.ea-tabs').find('[maploc="'+ path_id+'"');
    $('.tab-parent ').removeClass('active-tab');
    $('.tab-child').slideUp(300);
    $(parent_info).addClass('active-tab').find('.tab-child').slideDown(300);
});
/* custom tabs */
$('body').on('click', '.ea-tabs a', function(){
    var tab_label = $(this).attr('tab-link');
    $('.ea-tabs a.active').removeClass('active');
    $(this).addClass('active');
    $('.ea-tabs .tab-pane').hide();
    $('#'+tab_label).slideDown(300);
});
