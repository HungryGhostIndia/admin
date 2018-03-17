var SiteJS = (function ($) {
  return {
    setupCountdown: function () {
      var countdown = $('.countdown[data-countdown]');
      if (countdown.length > 0) {
        countdown.each(function () {
          var $countdown = $(this);
          var finalDate = new Date($countdown.data('countdown'));
          console.log("Site.js finalDate ",finalDate);
          var currentDate = new Date();
          var currentUTCDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());
          console.log("Site.js currentUTCDate ",currentUTCDate);
          var cdFinalDate = finalDate.getTime() - (currentUTCDate.getTimezoneOffset() * 60 * 1000);
          console.log("Site.js cdFinalDate ",cdFinalDate);
          $countdown.countdown(cdFinalDate, function (event) {
            $countdown.html(event.strftime(
              '<div class="counter-container"><div class="counter-box first"><div class="number"> %-D </div> <span> Day </span></div><div class="counter-box"><div class="number"> %H </div><span> h </span></div><div class="counter-box"><div class="number"> %M </div><span> m </span></div><div class="counter-box last"><div class="number"> %S </div><span> s</span></div></div>'
            ));
          });
        });
      }
    },
    scrollDown: function(){
         var objDiv = document.getElementsById("scrlDwn");              
         objDiv.scrollTop = objDiv.scrollHeight;

         
    },
    textar: function(){
      var textarea = document.querySelector('textarea');

      textarea.addEventListener('keydown', autosize);
                  
      function autosize(){
        var el = this;
        setTimeout(function(){
          el.style.cssText = 'height:auto; overflow:auto; max-height:80px; padding:0';
          // for box-sizing other than "content-box" use:
          // el.style.cssText = '-moz-box-sizing:content-box';
          el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
      }
    },
    console: function(){
       var cursorPosition = $('#comment').prop("selectionStart");
       console.log(cursorPosition);

       var valat = $("#comment").html();
	    
        if(valat[valat.length -1] == "@"){
          $("#suggestion-list").show();
          $(document).click(function (e) {
            $("#suggestion-list").hide();
          }); 

        }
        else{
          
          
        }
    },
    opmodal1: function () {
      $("#opmodal1").click();
    },
    slider: function () {
      $(".ex6").bootstrapSlider({
        formatter: function (value) {
          return value;
        },
        tooltip: 'always'
      });
    }
  }
})(jQuery);