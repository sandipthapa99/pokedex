# Pokédex

Welcome to **Pokédex**! This project is built using React and the features associated with it.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Usage](#installation--usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): This comes with Node.js installation.

### Installation & Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/sandipthapa99/pokedex.git
   ```

2. Install required packages and dependencies:

   ```bash
   npm install
   ```

3. Run the app in development server:

   ```bash
   npm run dev
   ```

### Features

Followings are the features of the app with approaches used to acheive the feature.

- All Pokémon lisiting.

  - Fetched data using `createAsyncThunk` from `"@reduxjs/toolkit"`
  - Store the fetched data into the `redux store`
  - Fetches 20 data at a time making use of `query params` provided by the API.
  - Load more feature adding 20 more data to the existing data in the store.

- Pokémon filtering based on Generation.

  - Select field for the users to select and choose from multiple generations of Pokémon.
  - Filter reset options returning user to last state of all Pokémon listing.
  - Client side <strong>Pagination</strong> for filtered data with 20 data per page.

- Pokémon detail

  - Details of the Pokémon using <strong>Modal</strong>.
  - <strong>Tabs</strong> for details under different labels.

- <strong>Team</strong> feature.
  - Add or remove any Pokémon from the listing page.
  - Made use of `localStorage` to store team data so as to preserve it upon page reload.

### Technologies Used

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Tabler Icons](https://tabler-icons.io/) as icon library
- [Mantine](https://mantine.dev/) as UI library
- [JSDoc](https://jsdoc.app/tags-param.html) for utility functions documentation

Live site: [Pokédex](https://sandip-pokedex.netlify.app/)
