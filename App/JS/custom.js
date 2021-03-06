/* Header Scroll */

    $(window).scroll(function(){
        if($(this).scrollTop() > 150) {
            $('#ea-header').addClass('scrollnav');
        }
        else{
            $('#ea-header').removeClass('scrollnav');
        }
    });
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

// $('body').on('click', '.image-dl', function(event){
//     // var imgsrc = $(this).find('img').attr('src');
//     var dlButton = event.target;
//     var dlParent = $(dlButton).closest('*[class~="image-dl"]');
//     var dlSrc = $(dlParent).find('img').attr('src');
//     $(dlParent).addClass('isParent');
//     $(dlButton).addClass('clickedme');
//     console.log('It is' + dlSrc );

//     this.xhr = $.ajax({		type: "POST",		url: "https://www.w3schools.com/images/myw3schoolsimage.jpg",	}).done(function (data) { 	});
// });

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
$('body').on('click', '.ea-tabs .nav-tabs a', function(){
    var tab_label = $(this).attr('tab-link');
    $('.ea-tabs a.active').removeClass('active');
    $(this).addClass('active');
    $('.ea-tabs .tab-pane').hide();
    $('#'+tab_label).slideDown(300);
});

$(document).ready(function() {
    $("#homemap").attr("src","https://gisportal.saeon.ac.za/portal/apps/webappviewer/index.html?id=2d572dcf9c5f47c484540f8c934e03f4");
    $("body").on("click", ".supportToggle", function(){
        $("#supportform").toggleClass('show');
        $("#supportform").fadeToggle(300);
    });
    tableBuild();
    explorer();
});
$(window).on('hashchange', function(){

    setTimeout(function(){
        tableBuild();
        explorer();
        console.log('4');
      }, 2000);

    

});


/* Data Table Filter */
function tableBuild() {

    if ( $.fn.dataTable.isDataTable( '#servicesTable' ) ) {
        grid = $('#servicesTable').DataTable();
    }
    else {
        grid = $('#servicesTable').DataTable( {
            "paging": true,
            "ordering": true,
            "info": true
        } );
        console.log('is NOT a bdTable');
        grid.draw();
        $.fn.dataTable.ext.search.push(
            function(settings, data, dataIndex) {
              var dead = $('#gridDisplayDead')[0].checked;
              var alive = $('#gridDisplayAlive')[0].checked;
              var all = $('#gridDisplayAll')[0].checked;
              var condition = String(data[5]); 
              if (all) {
                 toggleActive($('#gridDisplayAllLabel'));
                 return true;
              } else if (dead) {
                 toggleActive($('#gridDisplayPublicDeadLabel'));
                 return ("Public" == condition);
              } else if (alive) {
                 toggleActive($('#gridDisplayCommercialLabel'));   
                 return ("Commercial" == condition);
              }
              return false;
            }
          );
          
        
    }


    
      // Reload on record filter radio button clicks 
      $(document).on("click", "#record-filters", function() {
        grid.draw();
      });
      
      var toggleActive = function(activate)
      {
         // de-activate any existing selection
         $('#record-filters').find('.btn-primary').each(function(index, element) {
           $(element).removeClass('active');
         });
         activate.addClass('active');
      }
    
      
  
  };

  /* Search modal */
  $('body').on('submit', '#sasdisearch', function(e){
    e.preventDefault();
    
    var searchterm = $('.sasdisearch').val();
    var searchurl = 'http://www.sasdi.net/search.aspx?noframe=true&anytext='
    //console.log(searchurl + searchterm);
    window.open(searchurl + searchterm,'_blank');
})
