console.log("connected");

function todo(state=[], action){
  console.log(action);
  switch(action.type){
    case "ADD_TODO":
      let newArray = state
      newArray.push(action.payload)
      console.log("NEW ARRAY!!!", newArray);
      return newArray
    case "REMOVE_TODO":
      let smallerArray = state
       smallerArray.splice(smallerArray.indexOf(action.payload), 1)
       console.log(smallerArray);
       return smallerArray
    default:
    return state
  }
}

const store = Redux.createStore(todo);

function removeTodo(e){
  console.log(e.target.textContent);
  store.dispatch({type: "REMOVE_TODO", payload: e.target.textContent})
}


function render(){
  var list = document.getElementById("todo-list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  if (store.getState().length >= 1) {
    store.getState().forEach(function(todo){
      var addTodo = document.createElement('li');
      addTodo.textContent = todo
      addTodo.addEventListener('click', removeTodo);
      list.appendChild(addTodo)
      input = document.getElementById("input");
      input.value = ''
    })
  }
}

render()
store.subscribe(render)




document.getElementById("addTodo")
.addEventListener('click', function(){
  input = document.getElementById("input");
  store.dispatch({type: "ADD_TODO", payload: input.value})
})
