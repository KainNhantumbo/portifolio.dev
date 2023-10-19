---
topic: 'Javascript'
createdAt: '2022-09-20T12:10:18.366Z'
title: 'How to Generate Random Colors in Javascript'
excerpt: 'Learn how to generate colors in javascript programatically'
---

In this post, I will write a  quick guide to build a simple hexadecimal color generator with javascript, so you can use it in your projects.

Without much, let's begin.

### Generating the colors

First, we have to create an array of hexadecimal caracters like this:

```js
const charactersArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
```

Putting those characters in an array will simplify the process, thats why I have picked an array to allow us to select any item by providing its index.

Then, let's create a function to select items from the array we created:

```js
// function that takes a index and returns an integer.
function getHexCharacter(index) {
  return charactersArray[index];
}
```

The function above will take the index and return the hexademical-character stored in that place. Next, we need to represent colors using the returned value.

```js
function generateColor() {
  const hexColorCode = '#'; // initial hex color code

  // iterate over the 6 possible aditional characters for the color code
  for (const i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * charactersArray.length);
    hexColorCode += getHexCharacter(randomIndex);
  }
  return hexColorCode;
}
```

The above function, loops 6 times because hexadecimal colors are represented by 6 hexadecimal digits. Within the loop, the function calls `getHexCharacter()` to generate a hexadecimal digit for each index of the color code. 

The function `getHexCharacter()` takes the `randomIndex` generated from the array of characters we have created before as parameter to ensure that we not have te same generated calor code values. Once all digits of the color code have been generated, the function `generateColor()`  returns the complete hexadecimal color code represented as a string.


That's it. I hope you could learn something new today.
Thank you for reading! 