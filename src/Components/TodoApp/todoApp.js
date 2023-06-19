import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const TodoApp = () => {
  const firstName = "Bennett";

  return (
    <div>
      <div>
        <Header />
        <div>
          <h1>Hello world</h1>
          <h3>My name is {firstName}</h3>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TodoApp;
