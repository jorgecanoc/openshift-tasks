function eraseSearch(){$(".notes_line").slideUp(),$(inputSearchTriggers[0]+","+inputSearchTriggers[1]).val("").blur(),$(nameWidgets[2]+" .results").slideUp().find("dd, dt").remove()}function listenSearch(){$.each(inputSearchTriggers,function(e,i){$(i).bind("focus",function(){i==inputSearchTriggers[1]?$(i).keypress(function(e){var a=e.which;if(13==a){e.preventDefault();var r=$(i).val();null==r.match(/^$/)&&headerOpenWidget(openHeaderTriggers[0])}}):i==inputSearchTriggers[0]&&$(i).keypress(function(e){var a=e.which;if(13==a){e.preventDefault();var r=$(i).val();null==r.match(/^$/)&&querySearch()}})}).bind("blur",function(){$(i).unbind("keypress")})})}function copyingSearchFields(){var e=$(inputSearchTriggers[1]).val();$(inputSearchTriggers[0]).val(e)}function switchToggleWidget(e){switch(e){case openHeaderTriggers[0]:$current=nameWidgets[2];break;case openHeaderTriggers[1]:$current=nameWidgets[3];break;case openHeaderTriggers[2]:$current=nameWidgets[0];break;case openHeaderTriggers[3]:$current=nameWidgets[1];break;case openHeaderTriggers[4]:$current=nameWidgets[2]}return $current}function headerOpenWidget(e){var i=switchToggleWidget(e),a=e,r=$(window).scrollTop();0==r?$(i).css("position","relative"):$(i).css("position","fixed"),$(i).slideDown(600,function(){i==nameWidgets[0]?($(".widget_map select").addClass("avoid"),"undefined"!=typeof mapWidgetPostInitialize&&$.isFunction(mapWidgetPostInitialize)&&mapWidgetPostInitialize()):i==nameWidgets[1]&&"undefined"!=typeof contactoChatWidgetPostInitialize&&$.isFunction(contactoChatWidgetPostInitialize)&&contactoChatWidgetPostInitialize()}).addClass("open"),$(a).addClass("active"),headerGlobalOpen=!1,i==nameWidgets[0],i==nameWidgets[1],i==nameWidgets[2]&&e==openHeaderTriggers[0]&&(copyingSearchFields(),querySearch()),i==nameWidgets[3]&&($(window).scrollTop(0),$(headerHeaderBar).css("z-index","999"),lightbox("open"))}function headerToogleWidget(e){headerCloseWidgets(),setTimeout(function(){headerOpenWidget(e)},620)}function headerCloseWidgets(){headerGlobalOpen=!1,lightbox("close"),$.each(nameWidgets,function(e,i){$(i).slideUp(600).removeClass("open")}),setTimeout(function(){headerGlobalOpen=!0},610),$(headerMenuDiv+" li,"+openHeaderTriggers[0]+","+openHeaderTriggers[1]).removeClass("active"),$(headerHeaderBar).css("z-index","189"),eraseSearch()}function verifyOpenCloseWidgets(e){if(0==headerGlobalOpen&&0==$(e).hasClass("active")&&1==$(nameWidgets[0]).hasClass("open")||0==headerGlobalOpen&&0==$(e).hasClass("active")&&1==$(nameWidgets[1]).hasClass("open")||0==headerGlobalOpen&&0==$(e).hasClass("active")&&1==$(nameWidgets[2]).hasClass("open"))headerToogleWidget(e);else if(1==headerGlobalOpen&&0==$(e).hasClass("active"))if(e==openHeaderTriggers[0]){var i=$(inputSearchTriggers[1]).val(),a=$(inputSearchTriggers[1]).attr("placeholder");i.match(/^$/)||a==i||headerOpenWidget(e)}else headerOpenWidget(e)}function headerControlWidgets(){$.each(openHeaderTriggers,function(e,i){$(i).click(function(){verifyOpenCloseWidgets(i)})}),$.each(closeHeaderTriggers,function(e,i){$(i).click(function(){0==headerGlobalOpen&&headerCloseWidgets()})})}function openHeaderWidget(e){var i;switch(e){case"contacto":i=toogleHeaderTriggers[1];break;case"ubicacion":i=toogleHeaderTriggers[0];break;case"buscar":i=toogleHeaderTriggers[2]}verifyOpenCloseWidgets(i)}var toogleHeaderTriggers=[".location_trigger",".contact_trigger",".search_trigger"],closeHeaderTriggers=[".widget_map .nomap .close_widget",".widget_map .tool_line .close_widget",".widget_contacto .close",".widget_search .close","#login_close"],openHeaderTriggers=$.merge([".homepage_slider_search input[type=submit]",".login_trigger"],toogleHeaderTriggers),nameWidgets=[".widget_map",".widget_contacto",".widget_search",".widget_login_inside"],inputSearchTriggers=["#widget_search_input",".homepage_slider_search input[type=text]"],headerMenuDiv=".header_menu",headerHeaderBar=".header_notificationbar",headerWidgetsVel=600,headerGlobalOpen=!0;$(function(){headerControlWidgets(),listenSearch()});