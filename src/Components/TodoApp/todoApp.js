import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const TodoApp = () => {
  const firstName = "Bennett";

  const [name, setName] = useState("Bennett");

  useEffect( () => {
    console.log("Hello my name is", name);
  });

  return (
    <div>
      <div>
        <Header />
        <div>
          <h1>Hello world</h1>
          <div>
            <label htmlFor="name" style={{
                marginRight: "1rem"
            }}>Name:</label>
            <input type = "text" id="name" onChange = {(e) => setName(e.target.value)} value = {name}/>
          </div>
          <h3>My name is {firstName}</h3>
        </div>
        <Footer />
      </div>
    </div>
  );
};
function addItem() {
  console.log("Item added to list");
}

export { addItem };

export default TodoApp;
