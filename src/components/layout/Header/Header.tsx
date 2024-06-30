import React from "react";

import Styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
     <header className={Styles.header}>
       <div className={Styles.logo}>
         <h1>Dashboard do Meu Site Pessoal</h1>
       </div>
     </header>
  );
};

export default Header;
