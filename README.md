# Cocktail app

## Project description

TODO: Describe the project

## Installation

- Clone the repo

### Running the app

#### Run dev environment

`cd app`\
`npm install`\
`npm run dev`

## File structure

- `app/` contains configuration files for the app
  - `index.html` configure metadata here
    - is technically the main entry point for the application
  - `public/` contains public assets
  - `src/` contains the main code for the application
    - `components/` contains components with more complicated logic
      - `ui/` contains reusable ui components like buttons and cards
    - `hooks/` contains custom hooks
    - `layouts/` contains layout components reused by multiple pages
    - `data/` contains mock data
    - `pages/` define separate pages in the application
      - Importantly have the responsibility of data handling and conditional rendering
    - `server/` contains code related to fetching data from the server
    - `lib/` contains different utilities
      - Basically "etc." but for code reused throughout the application
    - `global.css` defines css variables and resets default styling
    - `main.tsx` is the main entry point for our application
      - Here providers, routing and styles are added to the application
    - `router.tsx` is where we handle routing

## Tools

### React

TODO

### Typescript

TODO

### Vite

is our required frontend build tool. No configuration is required outside of whats included in the repo.

### React Router

allows us to employ URL path routing in our Single Page Application (SPA)

#### Implementation

- All pages are wrapped within `<App />` which contains layout elements like a universal header
- Search Page (/): Users can search for and are presented with a myriad of cocktail recipes
- Details Page (/cocktail/:cocktailId): Displays information specific to the cocktailId parameter
- Error Page (*): Displays if a routing error occurs, for example navigating to an undefined page url

```jsx
const rootPath = import.meta.env.BASE_URL
export const appRouter = createBrowserRouter([
  {
    path: rootPath,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: rootPath,
        element: <SearchPage />,
      },
      {
        path: "cocktail/:cocktailId",
        element: <DetailsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  ]);
```

### Tailwind

is our choice for in-line styling.
It is popular for good reasons.
The development experience (DX) provides lets us focus on making a good website without having to bother with the intricacies of plain css.

### shadcn/ui

is a collection of re-usable components that you can copy and paste into your apps. This is not a component library in the sense that it is not a dependency.

We use shadcn/ui components as our base and build on top of the sensible defaults it provides.

### Zustand

TODO

### Tanstack Query

TODO

## Testing with Cypress

Cypress is our choice of testing library for its ease of use and its excellent E2E testing environment.
To open the Cypress testing app run `npm run cypress:open` and it will automatically open.
From there on you can choose whether to run component or end-to-end (E2E) tests.

### Component testing

We do not write custom tests the shadcn/ui components as it is a stable "library" and we are not tinkering with its primitives.

### End-to-end testing

Our most important tests are our e2e tests that ensures the app works as intended for our users.

## Linting

ESlint is used for linting. Our configs lie in .eslintrc.cjs. To manually test the linting of the project run the command

`npm run lint`

## Formatting (Prettier)

Prettier is our choice of formatter.
To manually format the project run

`npm run format`

Our team prefers to use the VSCode Prettier extension with the "Format on save" option enabled.
That way it is practically impossible to push unformatted code.

`.prettierrc` contains our configurations so everyone has the same formatting rules.
These are set to the defaults with the exception of enabling plugins.

### Plugins

The plugins we use are:

- "prettier-plugin-organize-imports"
- "prettier-plugin-tailwindcss"

These sort and clean up our imports and tailwind classes so to avoid meaningless merge conflicts.

## Commit messages

We follow the conventional commits specifications described in <https://www.conventionalcommits.org/en/v1.0.0/>

[more concise and web oriented document](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)

We also use the conventional commits VSCode extension for ease of use

### Template

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Diagrams

### Our Tech-stack

```mermaid
flowchart LR
  DB_ACCESS --> Prisma

  subgraph FULL_STACK
    direction LR
      DB[(PostgresDB)] --> Prisma 
      Prisma --> ApolloServer
      subgraph BACKEND
        DB
        Prisma
        ApolloServer
      end
      ApolloServer --> ApolloClient
      subgraph FRONTEND
        ApolloClient --> React-App
      end
    end
```

### Component hierarchy

```mermaid
classDiagram

cocktailStore --> App

App --> SearchPage

SearchPage <--> cocktailStore
SearchPage --> DetailsPage
SearchPage --> ResultList

DetailsPage --> DrinkDetails
DetailsPage --> ReviewForm
DetailsPage --> ReviewList
ReviewList <..> ReviewListItem


class cocktailStore {
  searchResults

  setSearchResults()
  clearSearchResults()
}
class App {
  useQuery()
}

class SearchPage {
  drink[] searchResults
  String inputValue
}
class ResultList {
  drink[]
}

class DetailsPage {
  String drinkName
}
class DrinkDetails {
  drinkDetails
}
class ReviewForm {
  int rating
  string text
}
class ReviewList {
  drinkId
  review
}
class ReviewListItem {
  review
}
```
