// user input - includes validation
import React from 'react';  

function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');

  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value + " (new)");
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add new..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

export default TodoForm;