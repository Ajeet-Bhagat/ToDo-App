import { useState, useRef } from "react";
import { MdAddComment } from "react-icons/md";
function InputBar({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddButtonClick = (event) => {
    event.preventDefault(); // in form we to need to do this
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value ="";
    todoDateElement.current.value ="";
    onNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
    
  };

  return (
    <form className="container item-cont Amarg" onSubmit={handleAddButtonClick}>
      <div className="row">
        <div className="col-sm-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here..."
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>
        <div className="col-sm-5">
          <input
            type="date"
            ref={todoDateElement}
            // onChange={handleDateChange}
            // value={todoDate}
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-success Asizbtn">
            <MdAddComment />
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputBar;
