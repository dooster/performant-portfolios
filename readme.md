#*The Performant Portfolio Project*

##Intro

This project was based around optimizing the 'index.html' and 'pizza.html' in the first level of this folder.
Optimizations were carried out through the use of Gulp and tweaking of each HTML files' own JavaScript, HTML, and CSS code.

##How To Run

Both HTML files can be run in your browser. Download the zip file from github. Once on your machine, open 'index.html' with your
favorite web browser to run 'index.html.' The same running instructions apply for 'pizza.html.'

##Gulp Files and The Dist Index

I used Gulp to automate the minifcation of CSS and Javascript for 'index.html.'
Gulp was also used for inlining critical-path blocking CSS elements into HTML, and for optimizing all images
for both 'index.html' and 'pizza.html.'

All the original files can be found at the 'src' directory. All the modified files are located in the 'dist' directory.
Both HTML files point to the modified files in the 'dist' directory.

##Pizza Optimizations

I made two main optimizations to have 'pizza.html' run faster. Firstly, I applied a modified version of the solution from the
Browser Rendering Course to the pizza resize slider. I moved all element quering out of the loop.
I also removed an additional `sizeSwitcher` function that was rendered useless following the refactoring of the code.

To achieve 60 frames per second scrolling, I refactored the `updatePositions` function.
I made a variable `top` outside of the for loop that is equal to `document.body.scrollTop`.
Additionally, within the loop, I created a second variable `n`. `n` only loops until it is less than 4. This variable is used
in `phase` for the modulo.

I had also tested changing the `movers` style in the CSS to `will-change: transform`; however, although that sped up the
site's rendering, it drastically slowed down the page's painting and was ultimately slower.