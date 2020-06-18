import React from 'react';

function Todo(props) {
  return (
    <div>
      {props.state.map(item => (
        <p
          key={item.id}
          className={item.completed ? 'completed' : 'notCompleted'}
          onClick={() => props.toggleCompleted(item.id)}>
          {item.todo}
        </p>
      ))}
    </div>
  );
}

export default Todo;