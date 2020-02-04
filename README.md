# Kitsu Search

<p align="center">
  <img src="./public/logo192.png" alt="logo" width="100" />
</p>
<br>

This project searches the kitsu api, is prepared to accept responsiveness, has the ability to search and character details.

## Getting Started

### Prerequisites

To perform the project installation you need to have a package manager installed in your environment, such as the following:

- [Yarn](https://yarnpkg.com/pt-BR/)
- [Npm](https://www.npmjs.com/)

## Installing process

### Cloning the porject

```
git clone https://github.com/brunoxd13/kitsu-search.git
cd kitsu-search
```

### Instaling the project

```
yarn install
```

or

```
npm install
```

### Running the project

```
yarn start
```

or

```
npm run start
```

### Testing

To test the project in development you can use this comand:

```
yarn test
```

or

```
npm run test
```

To test coverage of tests in project you can use this comand:

```
yarn test:coverage
```

or

```
npm run test:coverage
```

The expect result is like this:

```
-----------------------------|----------|----------|----------|----------|-------------------|
File                         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------------|----------|----------|----------|----------|-------------------|
All files                    |    87.41 |    77.27 |    84.31 |    88.55 |                   |
 components                  |    79.25 |    66.67 |    78.26 |       82 |                   |
  header.js                  |    90.91 |      100 |       80 |    90.91 |                46 |
  pagination.js              |    76.19 |    66.67 |    77.78 |    79.49 |... 9,90,94,95,112 |
 components/base             |      100 |      100 |      100 |      100 |                   |
  heading.js                 |      100 |      100 |      100 |      100 |                   |
 pages/character             |    92.31 |    93.33 |      100 |    92.31 |                   |
  index.js                   |    92.31 |    93.33 |      100 |    92.31 |                41 |
 pages/character/components  |      100 |      100 |      100 |      100 |                   |
  media-container.js         |      100 |      100 |      100 |      100 |                   |
  media.js                   |      100 |      100 |      100 |      100 |                   |
 pages/characters            |    90.91 |    83.33 |      100 |    90.91 |                   |
  index.js                   |    90.91 |    83.33 |      100 |    90.91 |                31 |
 pages/characters/components |    85.71 |       60 |       75 |    85.71 |                   |
  character-row.js           |    90.91 |      100 |       80 |    90.91 |                70 |
  character-search.js        |    66.67 |    33.33 |    33.33 |    66.67 |          28,29,46 |
  characters-list.js         |      100 |      100 |      100 |      100 |                   |
 utils                       |      100 |      100 |      100 |      100 |                   |
  test-utils.js              |      100 |      100 |      100 |      100 |                   |
-----------------------------|----------|----------|----------|----------|-------------------|
```

## Packages

Packages used for the construction of the project:

- [Styled Components](https://www.npmjs.com/package/styled-components)
- [Styled System](https://www.npmjs.com/package/styled-system)
- [React Router](https://www.npmjs.com/package/react-router-dom)

Packages used for the development of the project:

- [Jest](https://www.npmjs.com/package/jest)
- [React Testing Library](https://www.npmjs.com/package/@testing-library/react)
- [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock)

## Author

[Bruno Russi Lautenschlager](https://github.com/brunoxd13)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Credits

Images:

- [Icon Finder](https://www.iconfinder.com)
