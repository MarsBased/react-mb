# Martian Day May 28 2020 - React

This is the repository for the Martian Day presentation.

It contains a [react app](/client/src) and a [react style guide](/docs/REACT_STYLE_GUIDE.md)

See it in action: https://danigb.github.io/react-mb

## What to expect

The talk is going to be about React Hooks. Basically I'll be doing live coding, to "bring life" (aka: add state and business logic) the example react application:

- Overview of a react application
- Different types of state: state, props, and effects
- Local state with hooks
- Effects with hooks
- API with effects
- Global state with hooks
- Questions
- Lunch!!

## How to use it

You can use this repository as a code kata: write the hooks to make it work. This is what I'm going to try on friday.

## What I want for the future

I'd like to have a [Marsbased React style guide](/docs/REACT_STYLE_GUIDE.md) with a [reference implementation](/client/src)

The React style guide is based on what David, Genís and I did in the last Zerg Rush.

My proposal is to start with the content of this repository as a base, and open PRs to make changes, additions, etc.

We can have several reference implementations in different branches. One more standard in `master`, and possible variations (`feat/akita`: state with Akita)

## Contributing

Node required (version, the same as [create-react-app](https://create-react-app.dev/docs/getting-started/))

Clone this repo and run setup the project:

```bash
npm run setup
```

To start (api and client):

```bash
npm run start
```

Or alternatively: `cd api && npm start` and `cd client && npm start`

Make a PR.

## Contributors

- Daniel Gómez - daniel.gomez@marsbased.com
- David Garmendia - david.garmendia@marsbased.com
- Genís Matutes - genis.matutes@marsbased.com
