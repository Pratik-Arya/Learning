import AppName from "./Compoenets/AppName";
import AddTodo from "./Compoenets/AddTodo";
import TodoItem from "./Compoenets/TodoItem";

function App() {
  return (
    <div class="max-w-md mx-auto py-8 bg-[#CDEA68]">
      <AppName />
      <AddTodo />
      {/* <TodoItem /> */}
    </div>
  );
}

export default App;
