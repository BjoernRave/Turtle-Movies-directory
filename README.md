To run this repo, you first need to create a new firebase project and insert the firebaseConfig variables, which you can obtain by registering a web application, to your project.

Add the config data from firebase in `config.ts`

Install dependencies:

```
yarn || npm i
```

Start development server:

```
yarn dev || npm run dev
```

Build application to start in production-mode:

```
yarn build || npm run build
```

Start in production:

```
yarn start || npm run start
```

## The thoughts behind this repo:

I used Next.js, because I think it's the easiest and best way to develop react applications. I am using styled-components, because it makes sense when you think in components. I also used Typescript, because, once you learn how it works, it makes programming faster and safer and much more convenient, because you have to look up less things, because the editor tells you what is there and what it does (if it's a good lib).

Because of a lack of ids, I created slugs out of the title to use for routing and identification in the db.

Everything is super basic and I would not do it like this in a production environment.

If I would to improve this I would add more filter, make the details section much more descriptive, like explaining more about the movie, have the user choose a nickname. Also I would maybe hide some info on the table on mobile, etc.

I would also store the firebaseConfig in ENV variables, instead of a `config.ts` file.
