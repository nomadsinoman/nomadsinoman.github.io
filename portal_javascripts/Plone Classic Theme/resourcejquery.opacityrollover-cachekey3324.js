
/* - ++resource++jquery.opacityrollover.js - */
// http://www.nomadsinoman.com/portal_javascripts/++resource++jquery.opacityrollover.js?original=1
;(function(jq){var defaults={mouseOutOpacity:0.67,mouseOverOpacity:1.0,fadeSpeed:'fast',exemptionSelector:'.selected'};jq.fn.opacityrollover=function(settings){jq.extend(this,defaults,settings);var config=this;
function fadeTo(element,opacity){var $target=jq(element);if(config.exemptionSelector)
$target=$target.not(config.exemptionSelector);$target.fadeTo(config.fadeSpeed,opacity)}
this.css('opacity',this.mouseOutOpacity).hover(
function(){fadeTo(this,config.mouseOverOpacity)},
function(){fadeTo(this,config.mouseOutOpacity)});return this}})(jQuery);
