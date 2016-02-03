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

I made two main optimizations to have 'pizza.html' run faster.

###Pizza Slider Optimizations

Firstly, I applied a modified version of the solution from the Browser Rendering Course to the pizza resize slider. I moved all element quering out of the loop. I also removed an additional `sizeSwitcher` function that was rendered useless following the refactoring of the code.

On line 447, I also replaced `var randomPizzas = document.querySelectorAll(".randomPizzaContainer")` with `var randomPizzas = document.getElementsByClassName("randomPizzaContainer")`. This selector is faster.

On line 448, I calculated the length of the `randomPizzas` array outside of the for loop to again speed the `for` loop.

On line 467 I moved `var pizzasDiv = document.getElementById("randomPizzas")` outside of its for loop so that the script makes only one DOM call.

###Pizza Framrate Optimizations

To achieve 60 frames per second scrolling, I refactored the `updatePositions` function on line 498 and the anonymous function on line 533.


I refactored `updatePositions by making a variable `top` outside of the for loop that is equal to `document.body.scrollTop`. Additionally, within the loop, I created a second variable `n`. `n` only loops until it is less than 4. This variable is used in `phase` for the modulo.

On line 503, I calculated the length of the `item.length' for the `updatePositions` function outside of the loop in a variable `itemLength` so that it only needs to be calculated once as opposed to each iteration in the loop.

In "pizza-style.css" I also added additional styles onto the `.mover`. I gave the elements the `will-change: transform;` and `transform: translateZ(0);` styles to speed the rendering of the pizzas.

I made numerous refactoring changes to the anonymous function at line 533. I moved the `elem` variable out of the loop, so it only had to be created once. I also moved `var movingPizzas = document.getElementById('movingPizzas1')` outside the loop so that the element did not to be queried on each iteration through the loop.

Additionally, I created a `rows` variable outside the loop based off of the screen's height. I then multiplied `rows` and `cols` and assigned the result to the variable `pizzaNumber`. This generates a varying number of pizzas to be displayed in the background based on a screen's size.

I use `pizzaNumber` in the `for` loop to determine the number of overall pizzas to generate and render on the site.