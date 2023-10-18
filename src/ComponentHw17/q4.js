import React from "react";

function Component() {
  return (
    <div className="container1" style={{ border: "3px solid #009000" }}>
      <h2>Question4</h2>
      <p>
        React components play a central role in building user interfaces. You
        can create them as function components or class components, and they can
        be composed together to create a complete application UI. Components
        allow you to break down your UI into smaller, manageable parts, making
        it easier to build and maintain complex applications.
        <br></br>
        Components are independent and reusable bits of code. They serve the
        same purpose as JavaScript functions, but work in isolation and return
        HTML via a render() function.
        <br></br>
        There are two main methods for creating components in React: functional
        components and class components:
        <h5>Functional Components:</h5>
        Functional components are simply JavaScript functions that return a
        React element (typically a JSX element).They are used for creating
        simple, presentational UI elements.
        <h5>Class Components:</h5>
        They are used when a component needs to manage its own state or has more
        complex behavior.
        <br></br>
        In recent versions of React (since React 16.8), functional components
        have become more popular because of the introduction of hooks. Hooks
        allow functional components to manage state and perform side effects,
        making them more powerful and easier to work with.
      </p>
    </div>
  );
}

export default Component;
