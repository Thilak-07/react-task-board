const ListItem = (props) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={(e) => props.toggleTodo(props.todo.id, e.target.checked)}
        />
        {props.todo.title}
      </label>
      <button
        onClick={() => props.handleDelete(props.todo.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;
