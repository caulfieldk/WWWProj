/**
 * Created by kcaulfield on 6/25/15.
 */
$(document).ready(function() {
    $('#wrap').css('width',$(window).width()-315);
    $('#wrap').css('height',$(window).height()-60);
    $('#content').css('width', $('#wrap').width()-450);

    $('.command').width($('#wrap').width()-517);
    $('#uinput').css('height', $(window).height() - $('#wrap').height());
    $('#uinput').css('width', $('#wrap').width());

    $(window).resize(function() {
        $('#wrap').css('width',$(window).width()-300);
        $('#wrap').css('height',$(window).height()-60);
        $('#nav-container').css('height',$(window).height());

        $('#content').css('width', $('#wrap').width()-450);
        $('#uinput').css('height', $(window).height() - $('#wrap').height());
        $('#uinput').css('width', $('#wrap').width());
        $('.command').width($('#wrap').width()-535);
    });
});