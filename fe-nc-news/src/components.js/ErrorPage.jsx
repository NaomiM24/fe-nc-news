import React from 'react';

const ErrorPage = ({msg, status}) => {
  console.log(msg)
  return (
    <main>
      <h2> Error: {status} </h2>
      <h3> {msg} </h3>
    </main>
  );
};

export default ErrorPage;