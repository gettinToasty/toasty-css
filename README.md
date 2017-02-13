# Toasty CSS
Life is beautiful, websites should be too. Toasty CSS is a lightweight, open-source alternative to popular web frameworks like Bootstrap. Built entirely in CSS and SASS, Toasty CSS offers users a quick and painless way to implement modern styling on their webpage. Filled with pre-made components and primed for user customizability, Toasty CSS can make a website look amazing without relying on bulky libraries like jQuery.

The easiest way to use Toasty CSS if by just including this line in your HTML file's `<head>`, seriously, that's it!
```
<link rel="stylesheet" href="https://cdn.rawgit.com/gettinToasty/toasty-css/master/stylesheets/master.min.css">
```

If you're familiar with SASS and would like a higher degree of customizability, you can grab the entire [stylesheets](./stylesheets) folder and change whatever you like!

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

Because Toasty CSS is completely open-source and uses the MIT License, you are free to use it for any personal or commercial purpose, and is completely open to alteration and customization. Even though you don't need to reference us in any way, we appreciate the credit and please let us know if you decide to use it!


## Features and Implementation

### The Grid

Toasty CSS uses modern styling technology, the flexbox framework, to build it's layout grid. This automatically makes your page responsive to various screen sizes and even mobile devices without you having to worry about configuring it. Flexbox is a powerful tool that Toasty CSS leverages to make sure everything appears exactly where it should on a page. You can see an example of The Grid in action on the [Toasty CSS demo page](https://gettintoasty.github.io/toasty-css/).

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

Columns in The Grid function as proportions of eight (a common theme of the Toasty CSS design principles), supporting columns of sizes up to 1/1 (100% of the page) down to 1/8 (12.5% of the page), and everything in between. Naming convention for columns follows this proportional model, with class names being flexible in how you name them (`col-1-1` is equal to `col-2-2` is equal to `col-8-8`) for maximum ease-of-use.

If your content fills beyond the constraints of your chosen column, no worry! Flexbox will automatically adjust the dimensions of that and it's neighboring columns to display what you need. Likewise, if you build a row that contains proportions less or more than 100% of the space flexbox will constrict or expand those elements in the row accordingly.

There are a few other goodies for users of The Grid, as well. If you want an element to remain at specific width no matter what, simply add the `fixed` class after the column name. You can also add `left` or `right` classes to your rows to justify the columns of a non-filled row to either side of the page.

### Components
Toasty CSS provides a healthy library of prebuilt components right out of the box. The full component list is [here](./docs/class_documentation.md), and it covers everything from form inputs to buttons to navigation. Seeing is believing so here is an idea of what the Toasty styling library will give you:


### Typography
Toasty CSS has selected a few fonts to make everything consistent in your web application

### User customization
Toasty CSS offers several powerful modifiers to add flexibility and customization to its components. If you're element is using a dark background color, you can add the "dark" modifier to nearly any component to help increase readability. Buttons can be classed as "lg" or "sm" for larger or smaller buttons, respectively. Headers can also have a "sm" class applied to them for a lighter effect, which is great for subheadings. A full list of modifiers can be found [here](./docs/class_documentation.md).

Applying a modifier is as simple as appending the class to your element:
```
<nav class="row dark">
  <div class="col-1-2">
    <a class="link-button dark" href="#">Click me!</a>
  </div>
  <div class="col-1-2">
    <a class="link-button dark sm" href="#">Small click me!</a>
  </div>
</nav>
```

## Future Development

### Components
* Button Groups
* Pagination
* Email-specific input
* Labels/tags
* Thumbnails
* Alerts
* Insets
* Boxes

### Grid
As CSS' new "grid" functionality becomes more supported we are dedicated to incorporating elements of it into the Toasty CSS Grid to allow users even more flexibility when creating their layouts.

## License (MIT)
Copyright 2017 Sean Beyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
