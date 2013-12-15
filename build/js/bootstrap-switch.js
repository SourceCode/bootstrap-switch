/*! ============================================================
 * bootstrap-switch v1.9.0 by Larentis Mattia @SpiritualGuru
 * http://www.larentis.eu/
 *
 * Enhanced for radiobuttons by Stein, Peter @BdMdesigN
 * http://www.bdmdesign.org/
 *
 * Project site:
 * http://www.bootstrap-switch.org
 * ============================================================
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * ============================================================ */
(function(e){e.fn.bootstrapSwitch=function(t){var n;n={init:function(){return this.each(function(){var t,n,r,i,s,o,u,a;n=e(this);s=e("<span>",{"class":"switch-left",html:function(){var e,t;e="ON";t=n.data("on-label");typeof t!="undefined"&&(e=t);return e}});o=e("<span>",{"class":"switch-right",html:function(){var e,t;e="OFF";t=n.data("off-label");typeof t!="undefined"&&(e=t);return e}});i=e("<label>",{"for":n.attr("id"),html:function(){var e,t,r;e="&nbsp;";t=n.data("label-icon");r=n.data("text-label");typeof t!="undefined"&&(e='<i class="icon '+t+'"></i>');typeof r!="undefined"&&(e=r);return e}});t=e("<div>");u=e("<div>",{"class":"has-switch"});r=n.closest("form");a=function(){if(!i.hasClass("label-change-switch"))return i.trigger("mousedown").trigger("mouseup").trigger("click")};n.data("bootstrap-switch",!0);n.attr("class")&&e.each(["switch-mini","switch-small","switch-large"],function(e,t){if(n.attr("class").indexOf(t)>=0){s.addClass(t);i.addClass(t);return o.addClass(t)}});n.data("on")!==undefined&&s.addClass("switch-"+n.data("on"));n.data("off")!==undefined&&o.addClass("switch-"+n.data("off"));t.data("animated",!1);n.data("animated")!==!1&&t.addClass("switch-animate").data("animated",!0);t=n.wrap(t).parent();u=t.wrap(u).parent();n.before(s).before(i).before(o);t.addClass(n.is(":checked")?"switch-on":"switch-off");n.is(":disabled")&&u.addClass("deactivate");n.on("keydown",function(t){if(t.keyCode!==32)return;t.stopImmediatePropagation();t.preventDefault();return a(e(t.target).find("span:first"))}).on("change",function(e,r){var i,s;i=n.is(":checked");s=t.is(".switch-off");e.preventDefault();t.css("left","");if(s!==i)return;i?t.removeClass("switch-off").addClass("switch-on"):t.removeClass("switch-on").addClass("switch-off");t.data("animated")!==!1&&t.addClass("switch-animate");if(typeof r=="boolean"&&r)return;return n.trigger("switch-change",{el:n,value:i})});s.on("click",function(){return a()});o.on("click",function(){return a()});i.on("mousedown touchstart",function(e){var r;r=!1;e.preventDefault();e.stopImmediatePropagation();t.removeClass("switch-animate");return n.is(":disabled")||n.hasClass("radio-no-uncheck")?i.unbind("click"):i.on("mousemove touchmove",function(e){var n,i,s,o;s=(e.pageX||e.originalEvent.targetTouches[0].pageX)-u.offset().left;i=s/u.width()*100;n=25;o=75;r=!0;i<n?i=n:i>o&&(i=o);return t.css("left",i-o+"%")}).on("click touchend",function(e){e.stopImmediatePropagation();e.preventDefault();i.unbind("mouseleave");r?n.prop("checked",parseInt(i.parent().css("left"),10)>-25):n.prop("checked",!n.is(":checked"));r=!1;return n.trigger("change")}).on("mouseleave",function(e){e.preventDefault();e.stopImmediatePropagation();i.unbind("mouseleave mousemove").trigger("mouseup");return n.prop("checked",parseInt(i.parent().css("left"),10)>-25).trigger("change")}).on("mouseup",function(e){e.stopImmediatePropagation();e.preventDefault();return i.trigger("mouseleave")})});if(!r.data("bootstrap-switch"))return r.bind("reset",function(){return window.setTimeout(function(){return r.find(".has-switch").each(function(){var t;t=e(this).find("input");return t.prop("checked",t.is(":checked")).trigger("change")})},1)}).data("bootstrap-switch",!0)})},toggleActivation:function(){var t;t=e(this);t.prop("disabled",!t.is(":disabled")).parents(".has-switch").toggleClass("deactivate");return t},isActive:function(){return!e(this).is(":disabled")},setActive:function(t){var n,r;n=e(this);r=n.parents(".has-switch");if(t){r.removeClass("deactivate");n.prop("disabled",!1)}else{r.addClass("deactivate");n.prop("disabled",!0)}return n},toggleState:function(t){var n;n=e(this);n.prop("checked",!n.is(":checked")).trigger("change",t);return n},toggleRadioState:function(t){var n;n=e(this);n.not(":checked").prop("checked",!n.is(":checked")).trigger("change",t);return n},toggleRadioStateAllowUncheck:function(t,n){var r;r=e(this);t?r.not(":checked").trigger("change",n):r.not(":checked").prop("checked",!r.is(":checked")).trigger("change",n);return r},setState:function(t,n){var r;r=e(this);r.prop("checked",t).trigger("change",n);return r},setOnLabel:function(t){var n;n=e(this);n.siblings(".switch-left").html(t);return n},setOffLabel:function(t){var n;n=e(this);n.siblings(".switch-right").html(t);return n},setOnClass:function(t){var n,r,i;n=e(this);r=n.siblings(".switch-left");i=n.attr("data-on");if(typeof t=="undefined")return;typeof i!="undefined"&&r.removeClass("switch-"+i);r.addClass("switch-"+t);return n},setOffClass:function(t){var n,r,i;n=e(this);r=n.siblings(".switch-right");i=n.attr("data-off");if(typeof t=="undefined")return;typeof i!="undefined"&&r.removeClass("switch-"+i);r.addClass("switch-"+t);return n},setAnimated:function(t){var n,r;r=e(this);n=r.parent();t==null&&(t=!1);n.data("animated",t).attr("data-animated",t)[n.data("animated")!==!1?"addClass":"removeClass"]("switch-animate");return r},setSizeClass:function(t){var n,r,i,s;n=e(this);i=n.siblings(".switch-left");r=n.siblings("label");s=n.siblings(".switch-right");e.each(["switch-mini","switch-small","switch-large"],function(e,n){if(n!==t){i.removeClass(n);r.removeClass(n);return s.removeClass(n)}i.addClass(n);r.addClass(n);return s.addClass(n)});return n},setTextLabel:function(t){var n;n=e(this);n.siblings("label").html(t||"&nbsp");return n},setTextIcon:function(t){var n;n=e(this);n.siblings("label").html(t?'<i class="icon '+t+'"></i>':"&nbsp;");return n},status:function(){return e(this).is(":checked")},destroy:function(){var t,n,r;n=e(this);t=n.parent();r=t.closest("form");t.children().not(n).remove();n.unwrap().unwrap().unbind("change");r.length&&r.unbind("reset").removeData("bootstrapSwitch");return n}};return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):typeof t=="object"||!t?n.init.apply(this,arguments):e.error("Method "+t+" does not exist!")};return this})(jQuery);