RippleCSS
=========
*A Webkit experiment for creating water ripples using JavaScript, jQuery and CSS3 animations. Yes, Webkit only.*

Usage
-----
Basically, you will have a container element in which the ripples will be created. In addition, some CSS is required for the actual animations. Calling this project Ripple*CSS* might be a bit confusing as you could create all kinds of funky shapes in the CSS. The JS primarily just spawns then into the container.

Kick things off by simply doing something like:

```html
$('#myRippleContainer').ripple(optionalSettings);
```

Multiple ripple areas can exist on the same page. See [demo section](demo "Demo section") for more details.