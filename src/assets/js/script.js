"use strict";

// hamburger
const $btnTrigger = $('#hamburger');
const $btnText = $('.hamburger__text');
const $nav = $('#sp-gnav');
const point_header = window.matchMedia('screen and (min-width: 960px)');

function openMenu() {
    $btnTrigger.attr('aria-expanded',true).attr('aria-label','メニューを閉じる');
    $btnText.text('Close');
    $nav.attr('aria-hidden',false).fadeIn();
}
function closeMenu() {
    $btnTrigger.attr('aria-expanded',false).attr('aria-label','メニューを開く');
    $btnText.text('Menu');
    $nav.attr('aria-hidden',true).fadeOut();
}

$btnTrigger.on('click',function() {
    const $expanded = $(this).attr('aria-expanded');
    if($expanded == 'false') {
        openMenu();
    }else {
        closeMenu();
    }
});

function checkBreakPoint() {
    if (point_header.matches) {
        closeMenu();
    }
}
point_header.addListener(checkBreakPoint);

// デバッグ用
console.log('hello');