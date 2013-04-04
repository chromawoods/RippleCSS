/*!
 * jQuery RippleCSS plugin 0.1
 * 
 * A webkit experiment for creating water ripples using
 * jQuery and CSS3 animations.
 * 
 * Copyright 2013 Andreas Larsson <andreas@chromawoods.com> - http://chromawoods.com/
 * Released under the WTFPL license: http://www.wtfpl.net/
 */
(function($) {
    $.fn.ripple = function (args) {
        var createRipples, spawnLoop, $cluster,
            container = $(this),

            defaults = {
                ripplesPerSecond : 2, // More than 10 is not recommended. :)
                ripplesPerCluster : 2,
                animationDuration : 1000,
                rippleInterval : 200,
                opacity : '.4',
                clusterClass : 'cluster',
                rippleClass : 'ripple',
                expandClass : 'expand',
                doneClass : 'done'
            },
            s = $.extend({}, defaults);

        $.extend(s, args); // Assemble settings.
        s.spawnInterval = parseInt(1000 / s.ripplesPerSecond);

        $cluster = $('<div/>', { // A blueprint for clusters, we will clone it later on.
            'class' : s.clusterClass,
            html : (function (num) {
                var rippleHtml = '';
                for (var i = 0; i < num; i++) {
                    rippleHtml += '<div class="' + s.rippleClass + '"></div>';
                }
                return rippleHtml;
            })(s.ripplesPerCluster)
        });

        createRipples = function (cluster) { // Creates ripples for a cluster.
            var items = [], curr = 0, next, lastItem, 
                ripples = cluster.children(), 
                rippleCss = { 
                    top : Math.floor(Math.random() * 99) + '%',
                    left : Math.floor(Math.random() * 99) + '%',
                    opacity : s.opacity,
                    '-webkit-animation-duration' : s.animationDuration + 'ms'
                };

            ripples.each(function () {
                items.push($(this));
            });

            cluster.removeClass(s.doneClass); // If cluster was added from "cache", un-cache it.

            next = (function next() { // Will call itself until all ripples have been processed.
                var iter = true;

                if (curr < items.length) {
                    items[curr]
                        .css(rippleCss)
                        .addClass(s.expandClass);
                    if (items[curr].is(':last-child')) {
                        iter = false;
                        lastItem = items[curr];
                        lastItem.on('webkitAnimationEnd', function () { // Add classes to indicate that we can re-use this cluster.
                            cluster.addClass(s.doneClass);
                            ripples.removeClass(s.expandClass);
                        });
                    } 
                }
                if (iter) { // Iterate next ripple.
                    setTimeout(function () {
                        curr++; next();
                    }, s.rippleInterval);
                }
            })();
        };

        spawnLoop = (function spawnLoop() {
            setTimeout(function () {
                webkitRequestAnimationFrame(spawnLoop);
                (function (c) { // If there are idle clusters, re-use them.
                    c = c.length ? c : $cluster.clone().appendTo(container);
                    createRipples(c);
                })(container.children('.' + s.clusterClass + '.' + s.doneClass));
            }, s.spawnInterval);
        })();
    };
}(jQuery));