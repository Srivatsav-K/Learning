# Route handlers

- Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

- Route Handlers are only available inside the app directory.

## Convention

1. Route Handlers are defined in a route.ts file inside the app directory

   ```ts
   // In app/api/hello/route.ts
   export async function GET() {
     return Response.json({
       name: "John Doe",
       age: 30,
     });
   }

   // How to access this API :
   GET "http://localhost:3000/api/hello"
   ```

2. Route Handlers can be nested inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.

## Behaviour

### Caching

Route Handlers are cached by default (statically evaluated) when using the GET method with the Response object as in the example above.

### Opting out of caching

You can opt out of caching by:

1. Using the Request object with the GET method.

   ```ts
   export const GET = async (req: Request) => {
     const { searchParams } = new URL(req.url);

     const obj = Object.fromEntries(searchParams);

     return NextResponse.json(obj);
   };
   ```

2. Using any of the other HTTP methods.

   ```ts
   import { NextResponse } from "next/server";

   type Feedback = {
     name?: string;
     email?: string;
     message?: string;
   };

   export const POST = async (req: Request) => {
     const body: Feedback = await req.json();

     console.log(body);

     return NextResponse.json(body);
   };
   ```

3. Using Dynamic Functions like cookies and headers.
4. The Segment Config Options manually specifies dynamic mode.
