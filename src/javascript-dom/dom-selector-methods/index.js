/**
 * **Select the button element on the page**
 * In this scenario, the existing code adds an eventListener for a click event on a variable 'buttonElem'.
 * It expects 'buttonElem' to be the button element in the example UI. But, that element is not selected yet.
 * Assign the button element to the variable 'buttonElem' with one of the existing selector methods.
 * Click the button to verify that the code is working.
 * Hint: Make use of the unique id identifier of the button element.
 */

// assign the correct element to the variable
// const buttonElem = document.getElementById('button')

// buttonElem.addEventListener('click', () => {
//   const oldText = buttonElem.innerText
//   // eslint-disable-next-line no-return-assign
//   return buttonElem.innerText = oldText === 'ON' ? 'OFF' : 'ON'
// })

/**
 * **Query descendent HTML elements**
 * Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.
 * Assign the respective elements to the variables.
 * In this case, the two elements do not have unique identifiers - like for example an id.
 * Instead they are direct descendents of a div element with id 'wrapper'.
 * Use an appropriate selector method!
 * Click the button to verify that the code is working.
 */

// assign the correct elements to the variables
const buttonElem = document.querySelector('#wrapper button')
const inputElem = document.querySelector('#wrapper input')

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value
  // eslint-disable-next-line no-return-assign
  return inputElem.value = oldText === 'ON' ? 'OFF' : 'ON'
})

/**
 * **Select multiple HTML elements*
 * In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.
 * Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.
 * Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'
 */

const listItems = document.querySelectorAll('#list li')

const handleHover = (event) => {
  // eslint-disable-next-line no-return-assign
  return event.target.innerText = 'ON'
}

if (listItems.length > 1) {
  listItems.forEach(item => item.addEventListener('mouseover', handleHover))
}
