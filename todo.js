function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
    <div className="addTodo"> {todo.text}</div>
    </div> );
}

export default Todo;