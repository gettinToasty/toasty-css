# Toasty CSS

Toasty CSS is a lightweight, open-source alternative to popular web frameworks like Bootstrap. Built entirely in CSS and SASS, Toasty CSS offers users a quick and painless way to implement modern styling on their webpage. Filled with pre-made components and primed for user customizability, Toasty CSS can make a website look amazing without relying on bulky libraries like jQuery.

## Usage Guidelines

Everything in Toasty CSS is applied with a class name. All you need to do is find the class that suits your needs and apply it to your HTML element like so:
```
<div class="row">
  <div class = "col-1-2">
    <label for="Username"><input type="text" /></label>
  </div>
</div>
```
This creates a simple username input which spans 50% of it's parent container. You'll notice that the label wraps around the input, and has a `for` tag, which will determine the displayed text of the input. It's as easy as that!

A full list of class names and their corresponding components can be seen [here](./docs/class_documentation.md).



## Features and Implementation

### The Grid

Toasty CSS uses modern styling technology, the flexbox framework, to build it's layout grid. This automatically makes your page responsive to various screen sizes and even mobile devices without you having to worry about configuring it. Flexbox is a powerful tool that Toasty CSS leverages to make sure everything appears exactly where it should on a page. You can see an example of The Grid in action on the [Toasty CSS demo page](./index.html).

The Grid dynamically handles resizing the window and includes break points to re-arrange the data in a way that is still easily readable even at small screen sizes. The Grid is comprised of rows, which are comprised of columns, like the general structure seen below:
```
<div class="row">
  <div class="col-1-2">
    <!-- Content goes here! -->
  </div>
  <div class="col-1-2">
    <!-- Content goes here! -->
  </div>
</div>
<div class="row">
  <div class="col-1-4">
    <!-- Content goes here! -->
  </div>
  <div class="col-1-8">
    <!-- Content goes here! -->
  </div>
  <div class="col-5-8">
    <!-- Content goes here! -->
  </div>
</div>
```
Columns in The Grid function as proportions of eight (a common theme of the Toasty CSS design principles), supporting columns of sizes up to 1/1 (100% of the page) down to 1/8 (12.5% of the page), and everything in between.

## Future Development
