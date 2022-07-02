# Javascript challenger

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
└── javascript-fundamentals/
    ├── javascript-basics/
    |   ├─── index.js
    |   └─── index.test.js
    └── README.md
```

## How to run the challenges?

Choose a challenge from the **categories** and **topics** and do it inside the `index.js` file and the tests in the `index.test.js` file.

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

- Test example in `index.test.js` file:

```js
const { sumTwoNumbers } = require('./index')

test('must sum two numbers', () => {
  expect(sumTwoNumbers(1, 2)).toBe(3)
  expect(sumTwoNumbers(1, 10)).toBe(11)
  expect(sumTwoNumbers(99, 1)).toBe(100)
})
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

| Challenge       | Category                | Topic             | Difficulty |
| --------------- | ----------------------- | ----------------- | ---------- |
| Sum two numbers | JavaScript fundamentals | JavaScript basics | easy       |
| Comparison operators, strict equality | JavaScript fundamentals | JavaScript basics | easy |

## Stacks

This project is configured with the following stacks:

- node: `16.13.2`
- yarn: `1.22.5`
- jest: `28.1.2`
- eslint: `8.19.0`
- git: `2.28.0`
- git flow: `1.12.3`

For more information check the [package.json](https://github.com/JefersonLucas/js-challenger/main/package.json) file of this project.

## License 

This project is licensed under the MIT license - see the [LICENSE.md](https://github.com/JefersonLucas/js-challenger/main/LICENSE.md) for details.