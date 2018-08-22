# React Boilerplate

![Duskull](https://raw.githubusercontent.com/mvfsillva/duskull-boilerplate/master/.github/duskull.jpeg?token=AEXgDGMbCpcHrhcWFCl8783kzhu2wWT7ks5ba-ocwA%3D%3D)
---

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Getting Started

### Project architecture

So we have the following project folder structure:
```
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── build/
├── public/
├── src/
│   ├── store/
│   │   ├── index.js
│   │   └── rootReducer.js
│   ├── containers/
│   │   └── HomeContainer.js
│   ├── modules/
│   │   └── auth
│   │       ├── actions.js
│   │       ├── index.js
│   │       ├── operations.js
│   │       ├── reducers.js
│   │       ├── selectors.js
│   │       ├── auth.spec.js
│   │       ├── types.js
│   │       └── utils.js
│   ├── layouts/
│   │   └── DefaultLayout/
│   │       └── index.js //ReactRouter.Route Component with Layout
│   ├── screens/
│   │   └── Home/
│   │       ├── index.js
│   │       ├── HomeScreen.jsx
│   │       └── HomeScreen.spec.jsx
│   └── components/
│       └── ModalButton/
│           ├── index.js // in this file we're just exporting all ModalButton components
│           ├── ModalButtonComponent.jsx
│           └── ModalButtonComponent.spec.jsx
│   
└── configs/
    ├── base.config.js
    ├── prod.config.js
    └── dev.config.js
```

### How to Run

```sh
$ yarn install  # install dependencies
# after
$ yarn start # Run application
```
> Open browser to http://localhost:3000

### Running the tests

```sh
$ yarn test
$ yarn test:watch
```

### Coding style tests

```sh
$ yarn lint
$ yarn lint:css
$ yarn lint:all
```

### Coding style format

```sh
$ yarn format
$ yarn format:check
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

This boilerplate is inspired by [Fernando Daciuk.](https://github.com/fdaciuk/workflow-reactjs)
