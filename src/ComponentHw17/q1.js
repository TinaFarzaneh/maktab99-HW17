import React from "react";

function FrameworkAndLibrary() {
  return (
    <div className="container1">
      <h2>Question1</h2>
      <p>
        Libraries and frameworks are both tools in software development, but
        they serve different purposes and have distinct characteristics. Here
        are the key differences between the two: <h3>Library :</h3> A library is
        a collection of pre-written code that you can use in your application.
        When you use a library, you are in control of the overall flow of your
        program. You call functions or methods from the library as needed, and
        you decide how to use them in your code.<br></br>
        Libraries are generally more flexible and allow you to pick and choose
        which components to use. You can use multiple libraries in a single
        project and combine them in various ways.
        <h3>Framework:</h3>A framework, on the other hand, is a pre-designed,
        structured architecture for building applications. In a framework, the
        control flow is often inverted. Instead of calling functions from the
        framework, the framework calls your code at specific points. The
        framework dictates the structure and flow of your application, and you
        fill in the details as required.
      </p>
    </div>
  );
}

export default FrameworkAndLibrary;
