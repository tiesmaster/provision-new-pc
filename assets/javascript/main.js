$(function() {

    var availableInstructionsDict = $('.post-list li').map(function () {
        var li = $(this);
        return { label: li.text().trim(), value: $('a.post-link', li).get(0) };
    }).get();

    var availableInstructions = availableInstructionsDict.map(function (x) { return x.label; });

    $( "#quick-search-box" ).autocomplete({
        source: availableInstructions,
        select: function( event, ui ) { availableInstructionsDict.find(function(y) { return y.label == ui.item.label; }).value.click()}
    });

    $(document).bind('keyup', '/', function(){
        $('#quick-search-box').focus();
    });

    $(document).bind('keyup', 'h', function(){
        $('.site-title').get(0).click();
    });

    $(document).bind('keyup', 'n', function(){
        $('#new-instruction').get(0).click();
    });
});