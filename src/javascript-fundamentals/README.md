# Javascript Fundamentals

This series of Javascript exercises covers the basic functionality of Javascript. Learn all about the vanilla Javascript fundamentals.

## How to

### How do Javascript Fundamentals coding exercises work?

Each Javascript exercise consists of a specific problem that you have to solve. For instance you might be asked to find the maximum of several numbers.

You will always get a specific value that you have to work with. This value can be of any Javascript type. In the example above, this might be an array of numbers.

To solve the Javascript problem, you have to write a function that takes the value as parameter and returns the desired outcome. Applied to our example, it finds the maximum of all elements inside the given array and returns the result.

### How do Javascript functions work?

The classical way to create a Javascript function is by using [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations). In the following example, we declare the function _findMax_. It expects one parameter called _array_ that could be of any value. But, as the name suggests, we expect it to be an array. The function takes the array and finds its maximum. Then, indicated by the _return statement_, it returns the result.

```js
function findMax(array) {
  const max = Math.max(...array)
  return max
}
```

In order to execute the function, we have to call it. While calling it, we can pass arguments with it that will be available to the function as parameters. In the following example, we call our function _findMax_ with the array `[1,5,3]`. As expected, it returns 5, the maximum of the given array.

```js
findMax([1, 5, 3])
// returns 5
```

### What are Javascript Fundamentals test cases?

The Javascript Fundamentals challenges are test-case-driven. This simply means that you have to solve the Javascript problems for several different function arguments.

In the example above, we solved the problem for an array of value `[1,5,3]`. The expected result was 5. This is a test case. A function is called with a certain argument and the return value is compared to the expected value. Each Javascript exercise has several test cases that your function has to pass.

### Example

Try it out for yourself. In the following example, the task is to multiply a given number by itself. The Javascript exercise has 3 different test cases. That means, your function is called 3 times and you have to make sure that it returns the expected outcome.

```js
// multiply the given number by itself
function myFunction(a) {
  return
}
```

| Test Cases:      |          |       |
| ---------------- | -------- | ----- |
| myFunction(3)    | Expected | 9     |
| myFunction(10)   | Expected | 100   |
| myFunction(-7.5) | Expected | 56.25 |
