import React,{useState} from "react";
import Background from "./TodoList/Todo/background/Background";
import { useRoutes } from "react-router-dom";
import routers from "./router";
import UseContext from "./Context/UseContext";
import users from "./datas";
import Toast from "./TodoList/Tost/Toast";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("all");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [inLogin, setInLogin] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  let router = useRoutes(routers);
  return (
    <>
      <UseContext.Provider
        value={{users,
          todos,
          setTodos,
          todoTitle,
          setTodoTitle,
          status,
          setStatus,
          userName,
          setUserName,
          userPassword,
          setUserPassword,
          inLogin,
          setInLogin,
          setIsShowToast,
          isShowToast
        }}
      >
        <div>
          {router}
          <Background></Background>
          <Toast/>
        </div>
      </UseContext.Provider>
    </>
  );
}
