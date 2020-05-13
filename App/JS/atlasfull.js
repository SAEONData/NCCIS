/* Header Scroll */


/* Atlas Explorer page */
function explorer(){
if ($(".ea-content-full").hasClass("explore-data")) {
    setTimeout(function(){
        $('#ea-header').addClass('explorer-scrollnav');
        $('#app').addClass('full-explorer');
        }, 4000);
    }else{
    $('#ea-header').removeClass('explorer-scrollnav');
    $('#app').removeClass('full-explorer');
    };
};
/* Image Download */




$(document).ready(function() {
    tableBuild();
    explorer();
});
$(window).on('hashchange', function(){

    setTimeout(function(){
        explorer();
      }, 2000);
});
