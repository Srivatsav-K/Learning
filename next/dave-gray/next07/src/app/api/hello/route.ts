/* 
  Route Handlers are cached by default when using the GET method with the Response object.
*/
export async function GET() {
  // Response.json() is only valid from TypeScript 5.2. If you use a lower TypeScript version, you can use NextResponse.json() for typed responses instead.
  return Response.json({
    name: "John Doe",
    age: 30,
  });
}
