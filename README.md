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

License
-------
Copyright 2013 Andreas Larsson.

This project is released under the WTFPL license: http://www.wtfpl.net/

```
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.

	DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

	0. You just DO WHAT THE FUCK YOU WANT TO.
```
