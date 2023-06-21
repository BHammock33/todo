import React from "react";

const TodoItem = (props) => {
  //const todoItemData = props.todoItemData;
  const { todoItemData, emitTodoItemDataUpdate, emitTodoItemDataDelete } =
    props;

  return (
    <div>
      <>
        <input
          type="checkbox"
          onChange={(e) => {
            todoItemData.isDone = !todoItemData.isDone;
            emitTodoItemDataUpdate(todoItemData);
          }}
          checked={todoItemData.isDone}
        />

        {todoItemData.isDone ? (
          <label
            style={
              //                        true                           false
              todoItemData.isDone ? { textDecoration: "line-through" } : {}
              //same as todoItem.isDone === true ?
            }
          >
            {todoItemData.itemName}
          </label>
        ) : (
          <>
            <input
              type="text"
              value={todoItemData.itemName}
              placeholder="New Todo Item..."
              onChange={(e) => {
                todoItemData.itemName = e.target.value;
                emitTodoItemDataUpdate(todoItemData);
              }}
            />
          </>
        )}
        <span
          style={{ marginLeft: "1em", cursor: "pointer" }}
          onClick={(e) => {
            emitTodoItemDataDelete(todoItemData);
          }}
        >
          ➖
        </span>
      </>
    </div>
  );
};

export default TodoItem;
//TodoItem is a child of TodoApp (along with header/footer/todoItems) data coming from parent is accessible
//to child from props
//<> is same as <React.fragment>
