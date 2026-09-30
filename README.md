# Forma Product Card

A beginner-friendly React product card built with JavaScript, JSX, and React-Bootstrap.

## Run the app

Install the dependencies, then start the development server:

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To create a production build, run `npm run build`.

## Project files

- `src/product.js` contains the product name, price, description, and image URL.
- `src/Name.js`, `src/Price.js`, `src/Description.js`, and `src/Image.js` display one piece of product data each.
- `src/App.js` assembles the card and greeting. Change the `firstName` value near the top to personalize the greeting; an empty string shows the default greeting.
- `src/App.css` styles the product card and responsive page layout.
- `src/index.js` is the app entry point and imports Bootstrap's CSS.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
