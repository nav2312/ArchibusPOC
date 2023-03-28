import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(false);

  const addHandler = (e) => {
    e.preventDefault();
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const deleteHandler = (ele) => {
    setItems(items.filter((x) => x !== ele));
  };

  const cbHandler = (e) => {
    // setItems(items.filter((x) => x !== ele));
    // console.log(e);
    // var temp = checked;
    // if (e.target.checked) {
    //   console.log(temp, e.target.checked);
    //   temp = temp.filter((a) => {
    //     console.log(a);
    //     return (a = e.target.value);
    //   });
    // }
    // e.target.checked
    //   ? setChecked([...checked, e.target.value])
    //   : setChecked([...temp]);
  };

  return (
    <div className="todo-form">
      <form onSubmit={addHandler}>
        <div className="title">
          <label> TODO LIST </label>{" "}
        </div>

        <input
          style={{ margin: "auto" }}
          type="text"
          id="inputTodo"
          name="inputTodo"
          placeholder="type a task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {items.map((ele, i) => {
          console.log(checked);
          return (
            <div key={i}>
              <input type="checkbox" value={checked} onClick={cbHandler} />

              {checked ? (
                <label style={{ textDecoration: "line-through" }}> {ele}</label>
              ) : (
                <label> {ele}</label>
              )}
              <button onClick={() => deleteHandler(ele)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
