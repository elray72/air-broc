## Prerequisites

Install the following extensions on your **Visual Studio Code**
(press Crl+Shift+X):

- ESLint
- Prettier ESLint

## Installation

Install the required npm packages from command prompt:

```
npm install
```

To run the project locally:

```
npm start
```

To build:

```
npm run build
```

## Before every merge/pull request

Code must be formatted before every pull request. This should be automatic due
to the 'Format on Save' setting, however you may check for code formatting by
running the command:

```
npm run prettier
```

To attempt to automatically fix any warnings and errors, run the command:

```
npm run prettier:fix
```
