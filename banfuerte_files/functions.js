function cleanURI(e){return e.replace(/\?uri\=nm\:oid\:/g,"").replace(/\./g,"-")}function isEmpty(e){return e===undefined||e==null||e.length<=0?true:false}function readmore(){$("button.content_keep").hide();$(".content_more").slideDown()}function lightbox(e,t){function i(){$(n).animate({opacity:0},r/2,"swing",function(){$(this).hide();t}).removeClass("open")}function s(){$(n).show().animate({opacity:1},r,"swing",function(){t}).addClass("open")}var n=".lightbox";var r=600;if(e=="open"){s()}if(e=="close"){i()}}function tooltips(){var e=2e3;var t=".tooltip";$(t+" .close").click(function(){$(this).parent().parent().hide()});$(".icon_help").mouseenter(function(){$(t).hide();$(this).find(t).show();$(this).mouseleave(function(){setTimeout(function(){$(t).hide()},e)})})}function mixFixes(){var e=$(".widget_indicadores_layout, .widget_login");e.parent().css("position, relative")}function selectfix(){var e,t;$('select[class!="avoid"]').each(function(n,r){e=$(this);t=e.find(":selected").text();e.wrap("<div class='select'></div>");e.after("<div class='row'>"+t+"</div>");var i=e.prop("disabled");if(i){e.parent().addClass("disabled")}});$('select[class!="avoid"]').change(function(){var e=$(this).find(":selected").text();$(this).next("div.row").text(e)})}function crossbrowser(){if(/*@cc_on !@*/false&&document.documentMode===9){document.documentElement.className+=" ie9";$("body").find("input[type=text], input[type=tel], input[type=email]").each(function(e){if(!$(this).val()){var t=$(this).attr("placeholder");$(this).attr("value",t).focus(function(){var e=$(this).val();$(this).select();if(e==t){$(this).val("")}}).blur(function(){var e=$(this).val();if(e==""){$(this).val(t)}})}});selectfix()}else if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1){document.documentElement.className+=" firefox";selectfix()}}$(function(){tooltips();mixFixes();crossbrowser()});$.fn.selected=function(select){if(select==undefined){select=true;}return this.each(function(){var t = this.type;if(t=='checkbox'||t=='radio'){this.checked = select;}else if(this.tagName.toLowerCase()=='option'){var $sel=$(this).parent('select');if(select&&$sel[0]&&$sel[0].type=='select-one'){$sel.find('option').selected(false);}this.selected=select;}});};