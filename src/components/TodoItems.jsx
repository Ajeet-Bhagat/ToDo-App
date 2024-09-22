import Item from "./Item";
const TodoItems = ({ todoitems,onDeleteItem }) => {
  return (
    <>
      {todoitems.map((item) => (
        <div key={`${item.name}`}>
          <Item name={item.name} date={item.date} onDeleteClick={onDeleteItem}></Item>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default TodoItems;
