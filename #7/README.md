# Build A Complete HTML & CSS Website with Bootstrap 4

Following this tutorial video: https://youtu.be/V_lAhqLXT9A

### Desktop version
![chrome-capture](https://user-images.githubusercontent.com/51708229/110256077-3f81c780-7fda-11eb-9ee4-ac9e9cc89117.gif)

### Mobile version
![chrome-capture (1)](https://user-images.githubusercontent.com/51708229/110256101-68a25800-7fda-11eb-808a-9084bed803a7.gif)


<hr>

# What I learned + What I had a hard time with
- Basic bootstrap 4 usage.
- [Scropllspy](https://getbootstrap.com/docs/4.0/components/scrollspy/) (Bootstrap)
  <br>`<body data-spy="scroll" data-target="#navbarResponsive">` This updates navigation items and highlights them according to the secion that is currently in the viewport.
- [Power Transform](https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms) (Font Awesome)
  <br> `data-fa-transform="shrink-3 up-5"` This manipulates an icon's size or tilt.
- Offset a navigation bar when it reaches the target sections.
  ```css
  .offset:before {
  display: block;
  content: '';
  height: 4rem;
  margin-top: -4rem;
  }
  ```
