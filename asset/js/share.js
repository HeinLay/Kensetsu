// UA settings
var _ua = (function (u) {
  return {
    Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf('ipad') > -1 || u.indexOf('macintosh') > -1 && 'ontouchend' in document)
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

// device
if (_ua.Mobile) {
  $("meta[name='viewport']").attr('content', 'width=device-width, initial-scale=1,viewport-fit=cover');
  // change images with devices width
  $(document).ready(function () {
    $(function () {
      var $setElem = $('img'),
        pcName = '_pc',
        spName = '_sp',
        replaceWidth = 767;

      $setElem.each(function () {
        var $this = $(this);
        function imgSize() {
          if (window.innerWidth > replaceWidth) {
            $this.attr('src', $this.attr('src').replace(spName, pcName)).css({ visibility: 'visible' });
          } else {
            $this.attr('src', $this.attr('src').replace(pcName, spName)).css({ visibility: 'visible' });
          }
        }
        $(window).resize(function () { imgSize(); });
        imgSize();
      });
    });
  });
} else if (_ua.Tablet) {
  $("meta[name='viewport']").attr('content', 'width=device-width,viewport-fit=cover,');
  $("body").attr('class', 'tablet');
} else {
  $("meta[name='viewport']").attr('content', 'width=device-width');
}

//Accordion JS
if (_ua.Mobile) {
  $(function () {
    $('.sec-guide-search .guide-list .content-txt').css("display", "none");
    $(".jsAccordionTitle").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    });
  });
}

// MenuOpen
$(function () {
  $('.jsMenuOpen').each(function () {
    $(this).on('click', function () {
      $(this).toggleClass('active');
      $('.header-toggle').fadeToggle();

    });
  });
});

// word count ellipsis
setTimeout(function () {
  var max = 67;
  var space = 0;
  var tot, str, i;
  var modifyStr;

  $('.news-detail').each(function () {
    str = String($(this).html());
    tot = str.length;
    space = 0;
    modifyStr = " ";
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == ' ') {
        space++;
      } else {
        modifyStr += (str.charAt(i).toString());
      }
    }
    tot -= space;
    str = (tot <= max) ? str : modifyStr.substring(0, (max + 1)) + "...";
    $(this).html(str);
  });
});

setTimeout(function () {
  var max = 31;
  var space = 0;
  var tot, str, i;
  var modifyStr;

  $('.tile-list-txt').each(function () {
    str = String($(this).html());
    tot = str.length;
    space = 0;
    modifyStr = " ";
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == ' ') {
        space++;
      } else {
        modifyStr += (str.charAt(i).toString());
      }
    }
    tot -= space;
    str = (tot <= max) ? str : modifyStr.substring(0, (max + 1)) + "...";
    $(this).html(str);
  });
});

setTimeout(function () {
  var max = 55;
  var space = 0;
  var tot, str;
  var modifyStr;

  $('.rcmd-content').each(function () {
    str = String($(this).html());
    tot = str.length;
    space = 0;
    modifyStr = " ";
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == ' ') {
        space++;
      } else {
        modifyStr += (str.charAt(i).toString());
      }
    }
    tot -= space;
    str = (tot <= max) ? str : modifyStr.substring(0, (max + 1)) + "...";
    $(this).html(str);
  });
});

// 4個並びスライダー
$(document).ready(function () {
  $('.jsWinGuideSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }]
  });


  $('.jsRmdSlider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }]
  });

});

// modal window
$(function () {
  $('.jsModalOpen').each(function () {
    $(this).on('click', function () {
      $('#' + $(this).data('modal')).fadeIn();

    });
  });
  $('.jsModalClose').on('click', function () {
    $('.modal').fadeOut();
    return false;
  });
});

//Sorting dropdown
$(function () {
  $(document).on('click', '.js-sort-btn ', function () {
    $('#sorting-list').fadeIn('slow');
    $(this).toggleClass('show');
    return false;
  });

  $(document).on('click', '.show', function () {
    $('#sorting-list').fadeOut('slow');
  });

  $('.js-sort-btn').on('click', function () {
    if (!$('.js-sort-btn').hasClass('sort-active')) {
      $(this).addClass('sort-active');
    } else {
      $(this).removeClass('sort-active');
    }
  });
});

// Button List
var hdrHeight = $('.header-theme').outerHeight();
var height = $('.sec-search-box').offset().top + hdrHeight;
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $('.btn-list').fadeIn();
  } else {
    $('.btn-list').fadeOut();
  }
});