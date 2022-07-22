# Javascript DOM exercises

These Javascript exercises cover everything you need to know about manipulating web pages using the Document Object Model (DOM).

## Example

Try it out for yourself. In the following example, we want to change the text of the button in the example UI. The existing JavaScript code already selects the button in the DOM. It also registers an [event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) with a callback function that is executed once the button is clicked.

But, a tiny detail is missing for the code to actually change the text of the button. Assign the variable text to the innerText property of the button element!

Confirm that your code is working by clicking the button in the example UI.

**HTML**:
```html
<button type="button" id="button">Click Me</button>
```

**Javascript**:
```js
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const text = 'Thank You! ❤️';
  // assign the variable 'text'
  button.innerText = 
});
```
