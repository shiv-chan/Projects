## How To Make A Website Using HTML And CSS | Website Design In HTML And CSS
Following this tutorial video : https://youtu.be/-2LtZRi6Q0s
#### Original Design 
![スクリーンショット 2021-01-10 16 15 45](https://user-images.githubusercontent.com/51708229/104116983-e6424280-5360-11eb-82bd-3abe7fe77f3c.png)
<br>
<br>
####  My Solution 
![image](https://user-images.githubusercontent.com/51708229/104118110-d0854b00-5369-11eb-8fb5-89195d0179a5.png)
<details>
  <summary>Functions - here's an animated GIF of the page.</summary>
  
![chrome-capture](https://user-images.githubusercontent.com/51708229/104118077-91ef9080-5369-11eb-8586-82c2d491c309.gif)
</details>

***

## What I learned + What I had a hard time with

- Creating gradient colored border around a button.

```css:style.css
.playBtnInner {
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: #42455a;  /* fallback for old browsers */
  background-image: -webkit-linear-gradient(to right, #42455a,#42455a), -webkit-radial-gradient(circle at top left, var(--pink), var(--purple));  /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(to right, #42455a,#42455a), radial-gradient(circle at top left, var(--pink), var(--purple)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```
- `border-radius: 50%` does not necessarily make a perfect circle.
needed to set a element width and height to the same size. (not sure)






