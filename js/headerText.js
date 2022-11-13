var tl = new TimelineMax({repeat:-1, repeatDelay:0.5});
tl.staggerFrom(".words", 1.5, {top:-100, opacity:0, delay:0.5, ease: Elastic.easeOut.config(0.9, 0.45)}, 0.6);
tl.staggerTo(".words", 1, {top:200, opacity:0, delay:2, ease:Power4.easeIn},0.1);