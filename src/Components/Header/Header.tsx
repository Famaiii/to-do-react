import React from "react";

import styles from "./Header.module.css";

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  console.log("@");
  return (
    <div className={styles.header_container}>
      <div className={styles.header_title}>
        <div>
          Todo List <b>{todoCount}</b> task(s)
        </div>
      </div>
    </div>
  );
};
