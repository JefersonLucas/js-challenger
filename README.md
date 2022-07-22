# JS challenger

![JS Challenger](https://img.shields.io/badge/JefersonLucas-%20JS%20Challenger-yellow)
![GitHub last commit](https://img.shields.io/github/last-commit/JefersonLucas/js-challenger?style=flat)
![MIT](https://img.shields.io/github/license/JefersonLucas/js-challenger?style=flat)

![Javascript](https://img.shields.io/badge/-Javascript-21262d?fff&style=flat-square&logo=javascript)
![Node.js](https://img.shields.io/badge/-Node.js-21262d?style=flat-square&logo=node.js&logoColor=509941)
![Jest](https://img.shields.io/badge/-Jest-21262d?fff&style=flat-square&logo=jest&logoColor=c63d14)
![Git](https://img.shields.io/badge/-Git-21262d?fff&style=flat-square&logo=git)
![Yarn](https://img.shields.io/badge/-Yarn-21262d?fff&style=flat-square&logo=yarn)
![ESLint](https://img.shields.io/badge/-ESLint-21262d?fff&style=flat-square&logo=eSLint&logoColor=462fb9)
![Prettier](https://img.shields.io/badge/-Prettier-21262d?fff&style=flat-square&logo=prettier)
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-21262d?fff&style=flat-square&logo=visual-studio-code&logoColor=007ACC)

This project is intended to solve challenges in the Javascript language. All challenges were taken from the [JSchallenger](https://www.jschallenger.com/) website.

## How this project works?

These challenges fall into two categories: [Javascript Fundamentals](https://www.jschallenger.com/javascript-fundamentals) and [Javascript DOM](https://www.jschallenger.com/javascript-dom-exercises).

The **Javascript Fundamentals** category has the following topics:
- Javascript basics
- Javascript arrays
- Javascript objects
- Javascript dates
- Javascript Sets

The **JavaScript DOM** category has the following topics:
- DOM selector methods
- Events and user interations
- DOM manipulation
- DOM fundamentals
- Recursive functions

Each topic has different challenges.

## How does the project structure work?

Categories and topics are divided into different folders. For each category there is a `README.md` file containing instructions for solving the challenges and for each topic there is a `index.js` file containing the challenges and `index.test.js` containing the challenge tests. You will find something like this:

```
src/
├── javascript-fundamentals/
|   ├── javascript-basics/
|   |   ├─── index.js
|   |   └─── index.test.js
|   └── README.md
└── javascript-dom/
    ├── dom-selector-methods/
    |   ├─── index.js
    |   └─── index.test.js
    └── README.md
```

## How to run the challenges?

Choose a challenge from the **categories** and **topics** and do it inside the `index.js` file and the tests in the `index.test.js` file.

- Test example in `index.test.js` file:

```js
const { sumTwoNumbers } = require('./index')

test('must sum two numbers', () => {
  expect(sumTwoNumbers(1, 2)).toBe(3)
  expect(sumTwoNumbers(1, 10)).toBe(11)
  expect(sumTwoNumbers(99, 1)).toBe(100)
})
```

- Example challenge in `index.js` file:

```js
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

function sumTwoNumbers (a, b) {
  return a + b
}

module.exports = { sumTwoNumbers }
```

Run the tests to check whether your challenge passed or not. To test use the commands:

```bash
yarn run test
# or
yarn run watch
```

Output example:

```bash
$ jest
 PASS  src/javascript-fundamentals/javascript-basics/index.test.js
  √ must sum two numbers (0 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.000 s, estimated 1 s
Ran all test suites.
Done in 0.00s.
```

## Challenges solved

All the challenges I've already completed:

| Days | Challenge                                                      | Category     | Topic   | Difficulty |
| ---- | -------------------------------------------------------------- | ------------ | ------- | ---------- |
| 01   | Sum two numbers                                                | Fundamentals | Basics  | Easy       |
| 01   | Comparison operators, strict equality                          | Fundamentals | Basics  | Easy       |
| 01   | Get nth character of string                                    | Fundamentals | Basics  | Easy       |
| 01   | Remove last n characters of string                             | Fundamentals | Basics  | Easy       |
| 01   | Get type of value                                              | Fundamentals | Basics  | Easy       |
| 01   | Accessing object properties one                                | Fundamentals | Objects | Easy       |
| 02   | Get last n characters of string                                | Fundamentals | Basics  | Easy       |
| 02   | Get nth element of array                                       | Fundamentals | Arrays  | Easy       |
| 02   | Get first n elements of an array                               | Fundamentals | Arrays  | Easy       |
| 02   | Creating Javascript objects one                                | Fundamentals | Objects | Easy       |
| 02   | Accessing object properties three                              | Fundamentals | Objects | Easy       |
| 02   | Extract first half of string                                   | Fundamentals | Basics  | Easy       |
| 02   | Count number of elements in JavaScript array                   | Fundamentals | Arrays  | Easy       |
| 02   | Get first n characters of string                               | Fundamentals | Basics  | Easy       |
| 03   | Count number of negative values in array                       | Fundamentals | Arrays  | Easy       |
| 03   | Remove first n characters of string                            | Fundamentals | Basics  | Easy       |
| 03   | Remove first n elements of an array                            | Fundamentals | Arrays  | Easy       |
| 03   | Multiplication, division, and comparison operators             | Fundamentals | Basics  | Easy       |
| 03   | Sort an array of strings alphabetically                        | Fundamentals | Basics  | Easy       |
| 03   | Check if property exists in object                             | Fundamentals | Basics  | Easy       |
| 03   | Check if value is present in Set                               | Fundamentals | Sets    | Easy       |
| 03   | Get last n elements of an array                                | Fundamentals | Arrays  | Easy       |
| 03   | Return the percentage of a number                              | Fundamentals | Basics  | Easy       |
| 03   | Check if one date is earlier than another                      | Fundamentals | Dates   | Easy       |
| 03   | Creating Javascript objects two                                | Fundamentals | Objects | Easy       |
| 04   | Extract keys from Javascript object                            | Fundamentals | Objects | Easy       |
| 04   | Convert a Set to Array                                         | Fundamentals | Sets    | Easy       |
| 04   | Sum object values                                              | Fundamentals | Objects | Easy       |
| 04   | Sort an array of numbers in descending order                   | Fundamentals | Arrays  | Easy       |
| 04   | Return last n array elements                                   | Fundamentals | Arrays  | Easy       |
| 04   | Remove a specific array element                                | Fundamentals | Arrays  | Easy       |
| 04   | Accessing object properties two                                | Fundamentals | Objects | Easy       |
| 04   | Basic JavaScript math operators                                | Fundamentals | Basics  | Easy       |
| 04   | Check if a number is even                                      | Fundamentals | Basics  | Easy       |
| 04   | Check if two dates are equal                                   | Fundamentals | Dates   | Easy       |
| 04   | Creating Javascript Sets                                       | Fundamentals | Sets    | Easy       |
| 04   | Remove a property from an object                               | Fundamentals | Objects | Easy       |
| 04   | Merge two objects with matching keys                           | Fundamentals | Objects | Medium     |
| 04   | Check if a number is a whole number                            | Fundamentals | Objects | Easy       |
| 04   | How many times does a character occur?                         | Fundamentals | Basics  | Easy       |
| 05   | Check whether a string contains another string and concatenate | Fundamentals | Basics  | Easy       |
| 05   | Round a number to 2 decimal places                             | Fundamentals | Basics  | Easy       |
| 05   | Split a number into its digits                                 | Fundamentals | Basics  | Easy       |
| 05   | Clear up the chaos behind these strings                        | Fundamentals | Basics  | Advanced   |
| 05   | Find the correct word by incrementing letters in alphabet      | Fundamentals | Basics  | Advanced   |
| 05   | Insert character after every n characters (backwards)          | Fundamentals | Basics  | Medium     |
| 05   | Return the number of days between two dates                    | Fundamentals | Dates   | Medium     |
| 05   | Multiply all object values by x                                | Fundamentals | Objects | Medium     |
| 06   | Return the average of an array of numbers                      | Fundamentals | Arrays  | Easy       |
| 06   | Return the longest string from an array of strings             | Fundamentals | Arrays  | Easy       |
| 06   | Create a range of numbers                                      | Fundamentals | Arrays  | Medium     |
| 06   | Check if all array elements are equal                          | Fundamentals | Arrays  | Easy       |
| 07   | Merge an arbitrary number of arrays                            | Fundamentals | Arrays  | Easy       |
| 07   | Creating Javascript objects three                              | Fundamentals | Objects | Easy       |
| 07   | Swap object keys and values                                    | Fundamentals | Objects | Medium     |
| 07   | Replace empty strings in object with null values               | Fundamentals | Objects | Medium     |
| 07   | Return the next higher prime number                            | Fundamentals | Objects | Advanced   |
| 08   | Check if property exists in object and is truthy               | Fundamentals | Objects | Easy       |
| 08   | Calculate the sum of an array of numbers                       | Fundamentals | Arrays  | Easy       |
| 08   | Add property to each object in array                           | Fundamentals | Objects | Easy       |
| 08   | Merge two arrays with duplicate values                         | Fundamentals | Arrays  | Easy       |
| 08   | Convert array to object with counter                           | Fundamentals | Objects | Medium     |
| 09   | Select the button element on the page                          | DOM          | Methods | Easy       |
| 09   | Query descendent HTML elements                                 | DOM          | Methods | Easy       |

## Documentation

Some of the documentation I used in this project:

**Guide**:

- [Expressions and operators](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)

**Array**:

- [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [from()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [flat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [sort()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Set**:

- [Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [add()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

## Stacks

This project is configured with the following stacks:

- Node: `16.13.2`
- Yarn: `1.22.5`
- Jest: `28.1.2`
- ESLint: `8.19.0`
- Git: `2.28.0`
- Git Flow: `1.12.3`

For more information check the [package.json](package.json) file of this project.

## License 

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) for details.