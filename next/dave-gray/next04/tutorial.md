- Run `npm run build`

```sh
info  - Compiled successfully
info  - Linting and checking validity of types
info  - Collecting page data
info  - Generating static pages (5/5)
info  - Finalizing page optimization

Route (app)                                Size     First Load JS
┌ ○ /                                      175 B          74.3 kB
├ ○ /api/hello                             0 B                0 B
├ ○ /users                                 175 B          74.3 kB
└ λ /users/[userId]                        141 B          68.8 kB
+ First Load JS shared by all              68.7 kB
  ├ chunks/455-e3a12aac2a978f1a.js         66.4 kB
  ├ chunks/main-app-df24e48dc511d08f.js    204 B
  └ chunks/webpack-13c265ee458c9e63.js     2.06 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

info  - Creating an optimized production build .%
```

- `/users` page is statically generated in advance, built on the server and then sent to CDNs

- `/users/[userId]` page is server side rendered as `userId` can be anything next does not know the exact parameter in advance. So, they are rendered at request time. They are built on the server and sent to the client

  - To see the response time of this run the build : `npm run start`
  - Unlike in dev mode in the network tab requests are not made on hovering but all the data is server side rendered and sent at a single shot.

### Data fetching

```js
const options: RequestInit = { cache: "force-cache" };
/* cache options:
force-cache -> will cache the data always : best if we know the exact params and are sure they wont change. (Next caches data by default using this setting)
no-store -> will never cache : best for constantly changing data */

/*
Incremental Static Regeneration (ISR) - Create the page and after an interval in seconds, check if there is an update - const options: RequestInit = { next: { revalidate: 60 } }; // 60s
*/
const options: RequestInit = { next: { revalidate: 60 } };

const res = await fetch(url, options);
```

- This can be done at the page or layout level too by exporting a variable named revalidate (https://beta.nextjs.org/docs/data-fetching/caching#segment-level-caching)

### Static site generation (SSG)

```js
// SSG -> For static site generation tell next what are all the possile values of params before hand
export const generateStaticParams = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => {
    return { userId: user.id.toString() }; // If next reads data from browser URL it is a string but since we are generating userIds statically we should convert number to string.
  });
};
```

- `notFound()` built in 404 page
