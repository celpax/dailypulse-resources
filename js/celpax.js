$('.circle-stats').each(function() {

    var circleColor = $(this).css('color');
    $(this).knob({
        'min' : 0,
        'max' : 100,
        'readOnly' : true,
        'width' : 120,
        'height' : 120,
        'fgColor' : circleColor,
        'dynamicDraw' : true,
        'thickness' : 0.2,
        'tickColorizeValues' : true,
        'skin' : 'tron',
        'font' : "'Bahamas','Open Sans',sans-serif"
    });

});