import React from "react";

import styles from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { TodoPanel } from "./Components/TodoPanel/TodoPanel";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoProvider } from "./utils";

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.app_container}>
        <div className={styles.container}>
          <Header />
          <TodoPanel mode={"add"} />
          <TodoList
          />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
