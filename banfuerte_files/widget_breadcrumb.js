function allBreadcrumb(){function e(){$(u[4]).hide(),$(u[4]+".returnHome").show().after('<li class="nobreadcrump">...</li>'),$(u[4]+".nobreadcrump").show();$(u[4]).length;setTimeout(function(){var e=!1,r=!0;$.each($(u[4]),function(i){e=-1*i,$(u[4]).eq(e).show(),a()>971?($(u[4]).eq(e).hide(),r=!1):0==r&&$(u[4]).eq(e).hide()}),$(u[4]+".nobreadcrump").show()},30)}function r(){$(u[3]).css("visibility","hidden");$.each($(u[0]),function(){0==$(this).hasClass("wpthemeCrumbTrailSeparator")&&$(u[2]).append("<li>"+$(this).html()+"</li>")}),$(u[3]).hide()}function a(){var e=$(u[2]).outerWidth(!0);return e}function i(){a()>971&&e()}var u=[".header_breadcrumbs span",".header_breadcrumbs .wpthemeCrumbTrailSeparator",".header_breadcrumbs ul.breadcrumbs",".header_breadcrumbs .wpthemeCrumbTrail",".header_breadcrumbs ul.breadcrumbs li"];a(),r(),i()}$(function(){allBreadcrumb()});