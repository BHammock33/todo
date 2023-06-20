import React from "react";

const TodoItem = (props) => {
  //const todoItemData = props.todoItemData;
  const { todoItemData, emitTodoItemDataUpdate } = props;

  return (
    <div>
      <>
        <input
          type="checkbox"
          onChange={(e) => {
            todoItemData.isDone = !todoItemData.isDone;
            emitTodoItemDataUpdate(todoItemData);
          }}
          value={todoItemData}
        />
        <label
          style={
            //                        yes                           no
            todoItemData.isDone ? { textDecoration: "line-through" } : {}
            //same as todoItem.isDone === true ?
          }
        >
          {todoItemData.itemName}
        </label>
      </>
    </div>
  );
};

export default TodoItem;
//TodoItem is a child of TodoApp (along with header/footer/todoItems) data coming from parent is accessible
//to child from props
//<> is same as <React.fragment>
