"use client"; // Error components must be Client components

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>

      <h3>{error.message}</h3>

      <button
        onClick={() =>
          // Attempt to recover by trying to re-render the segment
          reset()
        }
      >
        Try Again
      </button>
    </div>
  );
};
export default Error;
