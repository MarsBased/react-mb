# MarsBased React Style Guide

## What this repo is about

This is the default MarsBased style guide for React applications. In the `/example` directory there is a working application with Hooks that follow the guidelines below.

### Advanced guidelines

We can have several reference implementations in different branches. One more standard in `master`, and possible variations (`feat/akita`: state with Akita)

## Index

<!-- vscode-markdown-toc -->

- 1. [General guidelines](#Generalguidelines)
  - 1.1. [References (general guidelines)](#Referencesgeneralguidelines)
- 2. [Project structure](#Projectstructure)
  - 2.1. [Project structure example](#Projectstructureexample)
  - 2.2. [References (project structure)](#Referencesprojectstructure)
- 3. [Libraries](#Libraries)
  - 3.1. [Recommended libraries](#Recommendedlibraries)
  - 3.2. [Other libraries we use](#Otherlibrariesweuse)
  - 3.3. [Libraries may worth take a look into](#Librariesmayworthtakealookinto)
  - 3.4. [References (libraries)](#Referenceslibraries)
- 4. [State management](#Statemanagement)
- 5. [External services](#Externalservices)
  - 5.1. [GraphQL](#GraphQL)
  - 5.2. [REST](#REST)
- 6. [Routing](#Routing)
  - 6.1. [Page vs component](#Pagevscomponent)
  - 6.2. [Route definitions](#Routedefinitions)
  - 6.3. [Router.tsx](#Router.tsx)
  - 6.4. [Access route parameters](#Accessrouteparameters)
- 7. [Styling](#Styling)
  - 7.1. [SASS](#SASS)
  - 7.2. [Tailwind](#Tailwind)
  - 7.3. [SVGs](#SVGs)
- 8. [Testing](#Testing)
  - 8.1. [End-to-end](#End-to-end)
  - 8.2. [Component tests](#Componenttests)
  - 8.3. [Unit tests](#Unittests)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='Generalguidelines'></a>General guidelines

- We use [create-react-app](https://create-react-app.dev/docs/getting-started) to bootstrap the application
- Use typescript
- We use ESLint with the React plugin for linting, with recommended rules and [Airbnb](https://github.com/airbnb/javascript/tree/master/react)'s for now, subject to change.
- Write functional components (We write a JavaScript function which accepts props as an argument and returns a React element instead of extending from `React.Component`)
- Use hooks for state management
- Use a declarative API library (react-query, apollo-client)

#### Naming conventions

- useCamelCase for normal typescript files (.ts)
- UsePascalCase for typescript with JSX (.tsx)

#### Monorepo

Consider one repo for both api and client

```
root/
  |- api/
  |- client/
  package.json
```

Should we choose the monorepo option, we use custom npm scripts to manage both projects at the root level, defined at the root `package.json`:

```json
  "scripts": {
    "setup": "npm run api:setup && npm run client:setup",
    "start": "concurrently \"npm:api:start\" \"npm:client:start\"",
    "api:setup": "cd api && npm install && npm run build",
    "api:start": "cd api && npm run start",
    "client:setup": "cd client && npm install && npm run css:dev",
    "client:start": "cd client && npm run start"
  }
```

#### 1.1. <a name='Referencesgeneralguidelines'></a>References (general guidelines)

##### 1.1.2 Naming convention

1. Match your component-related files with the component name

```
├── components
│   ├── SomeComponent
│   │   ├── SomeComponent.test.jsx
│   │   ├── SomeComponent.jsx
│   │   └── SomeComponent.styles.js
```

The above example keeps the component’s folder and the related files all with the same exact name, just different file extensions depending on what it is.

2. Name non-component files based on what they are or do

Files which are not component related are much easier to handle or work with if the name gives you some sort of indication on what it is. This will mostly impact your actions, reducers, providers, hooks, etc. The easiest way to grasp the value of naming your files in this way is illustrated by the examples below where one provides context to the person writing code and the other does not:

```
├── actions
│   ├── anotherAction
│   │   ├── anotherAction.test.ts
│   │   └── anotherAction.ts
│   └── someAction
│       ├── someAction.test.ts
│       └── someAction.ts
```

(Reference: https://levelup.gitconnected.com/2-simple-effective-react-file-naming-convention-tips-cce1022328a8)

## 2. <a name='Projectstructure'></a>Project structure

See: https://create-react-app.dev/docs/folder-structure/

- One entry point `src/index.ts`
- One config file `src/config.ts`
- One router `src/Router.tsx`
- Declare all app routes at `src/routes.ts` (see below)
- All page components under `pages/` (can be nested to mimic routes path hierarchy)
- All non-page components under `components/` (can be nested)
- All hooks under `hooks/` (can expose [Providers](https://reactjs.org/docs/hooks-reference.html#usecontext))
- One folder for each (external) service. For example `api/` (for rest APIs), `graphql/` for GraphQL or `auth/` for authorization service. They can include type definitions, data transformations, clients or anything related to that service and communicating with it.
- One folder for locales: `locales/`
- The rest: utility functions, helpers, etc... under `lib/` (keep it clean, please)

#### 2.1. <a name='Projectstructureexample'></a>Project structure example

```
src/
|- index.ts             # entry point
|- config.ts            # application configuration
|- routes.ts            # Application route definitions
|- App.tsx              # Application setup (providers)
|- Router.tsx           # Application router
|- pages/               # page components (access to router)
  |- HomePage.tsx
  |- UserListPage.tsx
  |- UserDetailPage.tsx
  |- admin/             # try to mimic the actual client urls
    |- AdminUserListPage.tsx
|- components/
  |- Layout.tsx         # Basic layout for app
  |- Spinner.tsx        # shared component
  |- Tag.tsx            # shared component
  |- posts/             # folder for specific areas, pages or sections
    |- PostForm.tsx
  |- users/
    |- UserCard.tsx
|- hooks/
   |- useUser.tsx       # hook
   |- useXXX.ts         # another kook
|- locales/
   |- type.d.ts         # Locale type definitions
   |- en-GB.ts          # locale for en-GB
|- api/                 # REST API folder (optional)
   |- index.ts
   |- types.d.ts        # API Entities type definitions
   |- client.ts         # API client
|- graphql/             # GraphQL folder (optional)
   |- types.d.ts
   |- schema.ts
|- auth/                # Authorization service (optional)
   |- types.d.ts
   |- index.ts
|- lib/                 # internal libraries aka "Everything else"
  |- randomColor.ts
|- react-app-env.d.ts   # declare missing types from npm packages
```

If using a repo for both api and client, put the above inside `client/` folder

#### 2.2. <a name='Referencesprojectstructure'></a>References (project structure)

- Create react app folder structure: https://create-react-app.dev/docs/folder-structure
- Route definitions idea taken from [Redwood](https://github.com/redwoodjs/redwood) framework

## 3. <a name='Libraries'></a>Libraries

#### 3.1. <a name='Recommendedlibraries'></a>Recommended libraries

- Internationalization: [react-intl](https://www.npmjs.com/package/react-intl)
- Forms: [react-hook-form]()
- REST API query: [react-query](https://github.com/tannerlinsley/react-query)
- GraphQL API: [apollo-client](https://www.apollographql.com/docs/react/)
- Routing: [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

#### 3.2. <a name='Otherlibrariesweuse'></a>Other libraries we use (if required by the project)

- Styling
  - [tailwindcss](https://tailwindcss.com/)
- Components
  - [antd](https://ant.design/docs/react/introduce)
- Http
  - [xy](https://github.com/sindresorhus/ky)

#### 3.3. <a name='Librariesmayworthtakealookinto'></a>Libraries may worth take a look into

- State management
  - [recoil](https://recoiljs.org/)

#### 3.4. <a name='Referenceslibraries'></a>References (libraries)

- Blog: [Internationalize React apps done right](https://medium.com/ableneo/internationalize-react-apps-done-right-using-react-intl-library-82978dbe175e)

## 4. <a name='Statemanagement'></a>State management

- In general, prefer hooks over any other solution
- You-don-t-need-redux. But if so, use hooks interface

## 5. <a name='Externalservices'></a>External services

- Each external service has a folder: `src/api`, `src/graphql`, `src/auth`
- Create a clean interface to each service. For example: `src/api/index.ts` (functions to send http requests to a REST API) or `src/graphql/index.ts` (queries and mutations of a GraphQL endpoint)
- All Entity typings inside `<service-name>/types.d.ts`
- Use declarative data fetching: instead of `fetch` prefer `useQuery` (available both in Apollo client and react-query)

#### 5.1. <a name='GraphQL'></a>GraphQL

- Use Apollo: [apollo-client](https://www.apollographql.com/docs/react/)
- Export queries and mutations inside `src/graphql/index.ts`
- Export the client at `src/graphql/client.ts`

#### 5.2. <a name='REST'></a>REST

- A single `src/api/index.ts` exports all possible API interactions
- Use `src/api/types.d.ts` to declare API entity type definitions
- Use mapping functions inside `src/api/map.ts` to ensure responses conform to the type definitions. Those mapping functions could be used also to transform data, if needed
- Do not use axios. Recommended alternative: [xy](https://github.com/sindresorhus/ky)
- Client specific functionality inside `src/api/client.ts`
- If Auth and API are different services, is common to have two folders (`src/auth` and `src/api`) and the API depends on authorization (JWT tokens, for example). If auth and API are in the same service, the `src/auth` folder can be omitted.

## 6. <a name='Routing'></a>Routing

- Use react-router-dom
- Page components can access the router. Use react-router-dom hooks interface: `useRouteMatch`
- Create a route definitions file `src/routes.ts` with all route paths

#### 6.1. <a name='Pagevscomponent'></a>Page vs component

A Page is a component that:

- It is used in Router.tsx
- Can access route parameters (like in: `/post/:id`)
- Normally communicates with external APIs
- Lives inside `src/pages/` folder (can be nested to reflect actual url structure)

The rest of the components live inside `src/components/` (can be nested). Components can have local state (can be smart) but, in general, don't fetch or save data

#### 6.2. <a name='Routedefinitions'></a>Route definitions

It's a file to generate route paths. Advantages:

- You get an overview of all available routes on the app
- It helps to prevent errors when declaring routes
- Route completion via editor

```ts
export default {
  posts: () => `/posts`,
  post: (id: string) => `/posts/${id}`,
  admin: {
    users: () => `/admin/users`,
  },
};
```

Usage:

```tsx
import routes from "./routes";

<Link to={routes.users()}>Users</Link>;
```

#### 6.3. <a name='Router.tsx'></a>Router.tsx

- In general, one Router is enough
- Don't use route guards

Use the `routes` definitions to create the routes placeholders:

```tsx
<Router>
  <Switch>
    <Route exact path={routes.posts()}>
      <PostsListPage />
    </Route>
    <Route exact path={routes.post(":id")}>
      <PostPage />
    </Route>
    <Route exact path={routes.admin.users()}>
      <AdminUsersListPage />
    </Route>
  </Switch>
</Router>
```

#### 6.4. <a name='Accessrouteparameters'></a>Access route parameters

For a route like `/posts/:postId/comments/:commentId` we use the following code to access route params:

```tsx
type RouteParams = {
  postId: string;
  commentId: string;
};

const { params } = useRouteMatch<RouteParams>();
```

## 7. <a name='Styling'></a>Styling

- In general, place all styles inside `src/styles`
- Dani likes tailwind :-)

#### 7.1. <a name='SASS'></a>SASS

Create react app supports Sass out of the box

#### 7.2. <a name='Tailwind'></a>Tailwind

Self promotion: https://danigb.github.io/codes/2020-02-09-add-tailwind-css-to-a-react-app

#### 7.3. <a name='SVGs'></a>SVGs

- Inline SVGs when possible

## 8. <a name='Testing'></a>Testing

- Favor end-to-end-testing over components test
- More important to cover critical paths that general coverage
- Ensure business logic are pure functions and write unit test for them when needed

#### 8.1. <a name='End-to-end'></a>End-to-end

Use cypress.io

#### 8.2. <a name='Componenttests'></a>Component tests

Not sure to add them. If so, use this: https://github.com/testing-library/react-testing-library

#### 8.3. <a name='Unittests'></a>Unit tests

Use CRA's built in [jest]()
