# Grocery Table

An interactive grocery table built with **React**, **TypeScript**, **Vite**, **Radix UI**, and **Tailwind CSS**.  
Easily browse, filter, sort, and paginate a list of grocery items.

## Features

- **Filter** groceries by section
- **Sort** by name, section, price, or price per 100g
- **Pagination** and adjustable rows per page
- **Responsive** and accessible UI using Radix UI and Tailwind CSS

## Project Structure

```
.
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── components/
│       └── GroceryTable/
│           ├── GroceryTable.tsx
│           ├── mockData.ts
│           ├── utils.ts
│           ├── TableContent.tsx
│           ├── TableRows.tsx
│           ├── HeaderCell.tsx
│           ├── PageHeader.tsx
│           └── Footer/
│               ├── Footer.tsx
│               ├── PageSwitcher.tsx
│               └── RowsPerPage.tsx
├── index.html
├── package.json
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (see `.nvmrc` for recommended version)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

```sh
# Install dependencies
yarn install
# or
npm install
```

### Development

```sh
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```sh
yarn build
# or
npm run build
```

### Preview Production Build

```sh
yarn preview
# or
npm run preview
```

## Linting

```sh
yarn lint
# or
npm run lint
```

## Deployment

Static deployment is configured for GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml). Click [here](https://jakersa.github.io/coolset-table/) to visit the deployed app

## License

MIT (add a LICENSE file if you want to specify this)

---

Made using [React](https://react.dev/), [Vite](https://vitejs.dev/), [Radix UI](https://www.radix-ui.com/themes), and [Tailwind CSS](https://tailwindcss.com/).
