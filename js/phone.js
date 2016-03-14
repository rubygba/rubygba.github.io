$(document).ready(function() {

  //click on menu icon
  $(".icon-aside").click(function(event){
    if($(".left-aside").hasClass("hide"))
    {
      //show menu
      $(".wrapper").click();

      $(".left-aside").removeClass("hide");
      $(".left-aside .boxs").addClass("moved-aside");

      $(".wrapper").addClass("moved");

      $(".left-aside").attr("style","");
      if($(window).height()>$(".left-aside").height())
      {
        $(".left-aside").height($(window).height());
      }

      //fixed Profile box position
      //$(".fixed-contact").addClass("moving-fixed");

      $(".search-backdrop").removeClass("hide");
    }
    else
    {
      //hide menu
      $(".wrapper").click();
    }
    event.stopPropagation();
  });

  //click page content to hide menu
  $(".wrapper").click(function(){
    //hide menu
    $(".left-aside").addClass("hide");
    $(".left-aside .boxs").removeClass("moved-aside");
    $(".wrapper").removeClass("moved");
    //$(".fixed-contact").removeClass("moving-fixed");

    //hide Search bar and Search Suggestion Popup
    //$(".search-bar").addClass("hide");
    //$(".search-contens").addClass("hide");
    $(".search-backdrop").addClass("hide");
  });

  //click on tabs
  $('.nav-blue-tab ul li a').on('click', function() {
    var thisTabIndex = $(this).parent().parent().find('li').index($(this).parent()); //
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().addClass('active');

    $(this).find('.num-txt').addClass('hide'); // TODO:clear the note-num-text

    $('.tab-content').addClass('hide');
    $('.tab-content').eq(thisTabIndex).removeClass('hide');
  });

});
