"use strict";

$(function () {
  $(".top2>ul>li").click(function () {
    $(this).find('sub').addClass('cor');
    $(this).siblings().find('sub').removeClass('cor');
    $(this).find('a').addClass('cor1');
    $(this).siblings().find('a').removeClass('cor1');
  });
  $(".nav>li").click(function () {
    $(this).find('em').addClass('nav1');
    $(this).siblings().find('em').removeClass('nav1');
  });
  var $imgs = $(".ban-img a");
  var timer = setInterval(change, 5000);
  var index = 0;

  function change() {
    if ($imgs.is(":animated")) {
      return;
    }

    $imgs.eq(index).fadeOut(1000);
    index++;

    if (index > 8) {
      index = 0;
    }

    $imgs.eq(index).fadeIn(1000);
    $(".dots ul li").eq(index).addClass('cur').siblings().removeClass('cur');
  }

  var length = $imgs.length;
  $("#btnright").click(change);
  $("#btnleft").click(function () {
    if ($imgs.is(":animated")) {
      return;
    }

    $imgs.eq(index).fadeOut(1000);
    index--;

    if (index < 0) {
      index = length - 1;
    }

    $imgs.eq(index).fadeIn(1000);
    $(".dots ul li").eq(index).addClass('cur').siblings().removeClass('cur');
  });
  $(".dots ul li").click(function () {
    $imgs.eq(index).stop(true).fadeOut(1000);
    index = $(this).index();
    $imgs.eq(index).stop(true).fadeIn(1000);
    $(this).addClass('cur').siblings().removeClass('cur');
  });
  $(".cover").hover(function () {
    $(this).find('.alb1').show();
  }, function () {
    $(this).find('.alb1').hide();
  });
  var $list = $(".roll2");
  var time = 400;
  var page = 645;
  var item_time = 20;
  var imgCount = 2;
  $(".pre").bind('click', function () {
    nextPage(true);
  });
  $(".nxt").bind('click', function () {
    nextPage(false);
  });

  function nextPage(next) {
    if (moving) {
      return;
    }

    var offset = 0;
    offset = next ? -page : page;
    var item1 = offset / (time / item_time);
    var cur = $list.position().left;
    var targ = cur + offset;
    var intervaiId = setInterval(function () {
      cur += item1;

      if (cur === targ) {
        clearInterval(intervaiId);

        if (cur === -(imgCount + 1) * page) {
          cur = -page;
        } else if (cur === 0) {
          cur = -imgCount * page;
        }
      }

      $list.css('left', cur);
    }, item_time);
  }
});