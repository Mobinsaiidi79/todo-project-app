import Todo from "./TodoList/Todo/Todo";
import Todos from "./TodoList/Todos";
import FormLogin from "./TodoList/fromLogin/FormLogin";
let routers = [
  { path: "/", element: <FormLogin /> },
  { path: "/todo", element: <Todos /> },
];
export default routers;
