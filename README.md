RippleCSS
=========
*A Webkit experiment for creating water ripples using JavaScript, jQuery and CSS3 animations. Yes, Webkit only.*

Requirements
------------
I'm not sure what min versions of Webkit and jQuery is needed. Just use a recent version and you'll be fine. In development, Chrome 25 and jQuery 1.9.1 was used, but you can probably get away with less than that.

Usage
-----
Basically, you will have a container element in which the ripples will be created. In addition, some CSS is required for the actual animations. Calling this project *Ripple*CSS might be a bit confusing as you could create all kinds of funky shapes in the CSS. The JS primarily just spawns them into the container.

Kick things off by simply doing something like:

```javascript
$('#myRippleContainer').ripple(optionalSettings);
```

Multiple ripple areas can exist on the same page. See [demo section](demo "Demo section") for more details.