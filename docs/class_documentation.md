## Full Component List

| Component | Class Name | HTML Element | Preview |
|---|:---:|:---:|---|
| Row | row | div/section/nav/header/ul | Coming Soon |
| 100% Column | col-1-1 | div/section/li | Coming Soon |
| 7/8 Column | col-7-8 | div/section/li |  Coming Soon |
| 3/4 Column | col-3-4 | div/section/li |  Coming Soon |
| 5/8 Column | col-5-8 | div/section/li |  Coming Soon |
| 1/2 Column | col-1-2 | div/section/li |  Coming Soon |
| 3/8 Column | col-3-8 | div/section/li |  Coming Soon |
| 1/4 Column | col-1-4 | div/section/li |  Coming Soon |
| 1/8 Column | col-1-8 | div/section/li |  Coming Soon |
| Brace Button | brace-button | button | Coming Soon |
| Box Button | box-button | button | Coming Soon |
| Link Styled like button | link-button | a | Coming Soon |
| Tabbed Navigation | tabs | nav | Coming Soon |
| Hamburger Menu | hamburger | div | Coming Soon |
| Dropdown | dropdown | div | Coming Soon |
| Settings | settings | div | Coming Soon |
| Box | box | most elements | Coming Soon |
| Tag/Label | tag | most elements | Coming Soon |

## Full Modifier List

| Modifier | Class Name | Usage |
|---|:---:|---|
| Dark | dark | Pages/elements with a dark background |
| Large | lg | Larger-sized buttons |
| Small (Buttons) | sm | Smaller-sized buttons |
| Small (Headers) | sm | Smaller headers, subheaders |
| Left (Row) | left | Justifies non-full row to the left side |
| Right (Row) | right | Justifies non-full row to the right side |
| Fixed (Row) | fixed | Row will not wrap at small window sizes |
| Fixed (Column) | fixed | Column will not resize within it's row |
| Monochrome Links | monochrome | Links will follow gray color scheme |

## Input Labels

Input labels are used by wrapping them around a `text` or `password` type input like so:
```
<label for="username">
  <input type="text" name="username" />
</label>
```

Labels are essential for Toasty CSS inputs to be styled correctly, as the accompanying text of an input is decided via the label's `for` attribute. This is the one scenario where it is not the `class`, but the `for` which should be paid attention.

If you want to substitute the text of an input label into a corresponding FontAwesome icon, simply append add `class="icon"` to the label. If you want to adjust the input's offset for the icon labels, simply add a `class="icon"` to the input as well. Supported `for`s for icons are:

* `User` `user` `Username` `username`
* `Email` `email` `Mail` `mail`
* `Password` `password` `Key` `key`
