## Sass Practice
Following the tutorial video: [Sass Tutorial for Beginners - CSS With Superpowers](https://www.youtube.com/watch?v=_a5j7KoflTs)<br>
Original: https://github.com/codeSTACKr/portfolio-sass/tree/master/dist

## What I learned + What I had a hard time with 

- `@function` usage.
- how to create a hamburger button with `::before` `::after` pseudo classes. *review
- manipulating the duration time using the syntax like below.

```
@for $i from 1 through 4 {
  .menuNav_item:nth-child(#{$i}) {
    transition-delay: ($i * 0.1s) + .15s;
  }
}
```

- putting the function inside the function hack.

```
&:hover {
      color: setTextColor(setTextColor($secondary-color));
    }
```

- multipul animations.
