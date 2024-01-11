
  
  // --------------------------------------------------------------------------------------------------
  $(document).ready(function() {
    $(window).scroll(function() {
      updateProgressBar();

    });
  });

  function updateProgressBar() {
    var winScroll = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercentage = (winScroll / (documentHeight - windowHeight)) * 100;
    
    // -------------------------------------------------------
    if (winScroll > 500) {
    $(document).ready(function() {
      $('#rocket').css('display', 'inline-block');
    });
    }
    else{
      $(document).ready(function() {
        $('#rocket').css('display', 'none');
      });
    }
    // -------------------------------------------------------
    $('#progressBar').width(scrollPercentage + '%');
  }

// -----------------------------------------------------------------------------



