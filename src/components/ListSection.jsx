import ListItem from "./ListItem";

const ListSection = (props) => {
  return (
    <ul className="list">
      {props.todos.length === 0 && "List is Empty"}
      {props.todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleTodo={props.toggleTodo}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ListSection;
