(function(e){function o(e){return e.replace(/(:|\.)/g,"\\$1")}var t="1.4.13",n={},r={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2,preventDefault:true},i=function(t){var n=[],r=false,i=t.dir&&t.dir=="left"?"scrollLeft":"scrollTop";this.each(function(){if(this==document||this==window){return}var t=e(this);if(t[i]()>0){n.push(this)}else{t[i](1);r=t[i]()>0;if(r){n.push(this)}t[i](0)}});if(!n.length){this.each(function(e){if(this.nodeName==="BODY"){n=[this]}})}if(t.el==="first"&&n.length>1){n=[n[0]]}return n},s="ontouchend"in document;e.fn.extend({scrollable:function(e){var t=i.call(this,{dir:e});return this.pushStack(t)},firstScrollable:function(e){var t=i.call(this,{el:"first",dir:e});return this.pushStack(t)},smoothScroll:function(t,n){t=t||{};if(t==="options"){if(!n){return this.first().data("ssOpts")}return this.each(function(){var t=e(this),r=e.extend(t.data("ssOpts")||{},n);e(this).data("ssOpts",r)})}var r=e.extend({},e.fn.smoothScroll.defaults,t),i=e.smoothScroll.filterPath(location.pathname);this.unbind("click.smoothscroll").bind("click.smoothscroll",function(t){var n=this,s=e(this),u=e.extend({},r,s.data("ssOpts")||{}),a=r.exclude,f=u.excludeWithin,l=0,c=0,h=true,p={},d=location.hostname===n.hostname||!n.hostname,v=u.scrollTarget||(e.smoothScroll.filterPath(n.pathname)||i)===i,m=o(n.hash);if(!u.scrollTarget&&(!d||!v||!m)){h=false}else{while(h&&l<a.length){if(s.is(o(a[l++]))){h=false}}while(h&&c<f.length){if(s.closest(f[c++]).length){h=false}}}if(h){if(u.preventDefault){t.preventDefault()}e.extend(p,u,{scrollTarget:u.scrollTarget||m,link:n});e.smoothScroll(p)}});return this}});e.smoothScroll=function(t,r){if(t==="options"&&typeof r==="object"){return e.extend(n,r)}var i,s,o,u,a=0,f="offset",l="scrollTop",c={},h={},p=[];if(typeof t==="number"){i=e.extend({link:null},e.fn.smoothScroll.defaults,n);o=t}else{i=e.extend({link:null},e.fn.smoothScroll.defaults,t||{},n);if(i.scrollElement){f="position";if(i.scrollElement.css("position")=="static"){i.scrollElement.css("position","relative")}}}l=i.direction=="left"?"scrollLeft":l;if(i.scrollElement){s=i.scrollElement;if(!/^(?:HTML|BODY)$/.test(s[0].nodeName)){a=s[l]()}}else{s=e("html, body").firstScrollable(i.direction)}i.beforeScroll.call(s,i);o=typeof t==="number"?t:r||e(i.scrollTarget)[f]()&&e(i.scrollTarget)[f]()[i.direction]||0;c[l]=o+a+i.offset;u=i.speed;if(u==="auto"){u=c[l]||s.scrollTop();u=u/i.autoCoefficent}h={duration:u,easing:i.easing,complete:function(){i.afterScroll.call(i.link,i)}};if(i.step){h.step=i.step}if(s.length){s.stop().animate(c,h)}else{i.afterScroll.call(i.link,i)}};e.smoothScroll.version=t;e.smoothScroll.filterPath=function(e){return e.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")};e.fn.smoothScroll.defaults=r})(jQuery)