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

// smooth scroll
$(function () {
  var headerHight = $('header');
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var gap = headerHight.outerHeight();
    var position = target.offset().top - gap;
    $('body, html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// fadeIn
$(function () {
  $('.js-fadein').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('js-fadein-active');
    } else {
      $(this).stop().removeClass('js-fadein-active');
    }
  });
});

// fadeUp
$(function () {
  $('.js-fadeup').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('js-fadeup-active');
    } else {
      $(this).stop().removeClass('js-fadeup-active');
    }
  });
});

// zoomIn
$(function () {
  $('.js-zoomin').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('js-zoomin-active');
    } else {
      $(this).stop().removeClass('js-zoomin-active');
    }
  });
});

// modal window
$(function () {
  var winScrollTop;
  $('.jsModalOpen').each(function () {
    $(this).on('click', function () {
      //  get scroll position
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $('.modal').css('height', $(window).height());
      $('.modal-bg').css('height', $(window).height());
      $('body').css({ 'position': 'fixed', 'width': '100%' });
      return false;
    });
  });
  $('.jsModalClose').on('click', function () {
    $('.jsModal').fadeOut();
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
    $('body').css('position', '');
    return false;
  });
});

// drawer menu open
function menuOpen() {
  scrollPos = $(window).scrollTop();
  $('.slide-menu').addClass('active');
  $('.menu-trigger').addClass('active');
  $('.jsSlideMenuOpen').addClass('active');
  $('html').addClass('scroll-prevent');
  $('body').css('position', 'fixed');
}

// drawer menu close
function menuClose() {
  $('.slide-menu').removeClass('active');
  $('.menu-trigger').removeClass('active');
  $('.jsSlideMenuOpen').removeClass('active');
  $('html').removeClass('scroll-prevent');
  $('body').css('position', '');
  $(window).scrollTop(scrollPos);
}

// drawer menu
$(function () {
  var scrollPos;

  $('.jsSlideMenu').on('click', function () {
    if (!$('html').hasClass('scroll-prevent')) {
      // open
      menuOpen();
    } else {
      // close
      menuClose();
    }
  });
});

// groval-nav-sub PC
$(function () {
  $(".jsSubNav")
    .on('mouseenter touchstart', function () {
      $(this).addClass('is-sub-active');
      $(this).children('.jsSubNavOpen').addClass('global-nav-active');
    }).on('mouseleave touchend', function () {
      $(this).removeClass('is-sub-active');
      $(this).children('.jsSubNavOpen').removeClass('global-nav-active');
    });
});
// groval-nav-sub SP
$(function () {
  $(".jsSubNavSp")
    .on('click', function () {
      $(this).toggleClass('is-sub-active');
      $(this).children('.jsSubNavSpOpen').toggleClass('global-nav-active');
    });
});

// top-slider
$(document).ready(function () {
  $('.slider-top').slick({
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '3vw',
    dots: true,
    focusOnSelect: true,
    infinite: true,
    touchMove: true,
    variableWidth: false,
    responsive:
      [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            centerMode: false,
          }
        },
      ]
  });
});

function accordionBoxViewChange(num) {
  if (num == 0) {
    $('.jsAccordionOpen').hide();
    $('.jsAccordionClose').show();
    $('.jsAccordion').show();
  } else {
    $('.jsAccordionOpen').show();
    $('.jsAccordionClose').hide();
    $('.jsAccordion').hide();
  }
}
$(document).ready(function () {
  accordionBoxViewChange(1);
});

// open searchbox
function serachBoxViewChange(num) {
  if (num == 0) {
    $('.jsSearchTableOpen').hide();
    $('.jsSearchTableClose').show();
    $('.jsSearchTable').show();
  } else {
    $('.jsSearchTableOpen').show();
    $('.jsSearchTableClose').hide();
    $('.jsSearchTable').hide();
  }
}
$(document).ready(function () {
  serachBoxViewChange(1);
});

// 4個並びスライダー
$('.jsSliderItem4').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1199,
    settings: {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  }, {
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  }, {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});

// 2個並びスライダー
$('.jsSliderItem2').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});

// fixed footer btn
$(function () {
  var fixedBtn = $('.jsFixedBtn');
  fixedBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      fixedBtn.fadeIn();
    } else {
      fixedBtn.fadeOut();
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    fixedHeight = $(".jsFooter").innerHeight();
    if (scrollHeight - scrollPosition <= fixedHeight) {
      $(".jsFixedBtn").css({
        "position": "absolute",
        "bottom": fixedHeight,
      });
      $("body").css({
        "position": "relative",
      });
    } else {
      $(".jsFixedBtn").css({
        "position": "fixed",
        "bottom": 0,
      });
    }
  });
});

//page top
$(function () {
  var topBtn = $('.jsPageTop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $(".jsPageTop").css({
        "position": "absolute",
        "bottom": footHeight + 10,
      });
      $("body").css({
        "position": "relative",
      });
    } else {
      $(".jsPageTop").css({
        "position": "fixed",
        "bottom": 10,
      });
    }
  });
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

// add active class
$(function () {
  $(".jsClick")
    .on('click', function () {
      $(this).toggleClass('is-active');
    });
});

// stop link
$('.jsNolink').on('click', function (e) {
  e.stopPropagation();
  e.preventDefault();
})

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

// 4個並びスライダー
$(document).ready(function () {
  $('.jsWinGuideSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        dots: false
      }
    }, {
      breakpoint: 1024,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
      }
    }]
  });


  $('.jsRmdSlider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    arrows: true,
    infinite: true,
    variableWidth: true,
    autoplay: false,
    responsive: [{
      breakpoint: 1199,
      settings: {
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    }, {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        variableWidth: true,
      }
    }]
  });

});