const About = (): JSX.Element => {
  const throwCustomError = () => {
    throw new Error("This is a custom error");
  };

  //hrowCustomError();

  return (
    <div>
      <h1>About Page</h1>

      {/* <button onClick={() => throwCustomError()}>Throw new Error</button> */}
    </div>
  );
};
export default About;
